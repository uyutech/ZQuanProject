//
//  UnzipManager.m
//  ZQuanProject
//
//  Created by wyy on 2018/2/28.
//  Copyright © 2018年 zquan. All rights reserved.
//

#import "UnzipManager.h"
#import "JZNetTool.h"
#import <SSZipArchive/ZipArchive.h>
#import "Helper+Cache.h"

@interface UnzipManager()<SSZipArchiveDelegate>

@property(nonatomic,assign)float requestVersion;
@property(nonatomic,copy)NSString *downLoadUrl;
@property(nonatomic,assign)BOOL isUnZip;  //已经解压

@end

@implementation UnzipManager

static UnzipManager *unzipManager;

-(void)loadZip:(LoadZipBlock)loadZipBlock Unzip:(UnzipSuccessBlock)unzipSuccessBlock UnzipFinish:(UnzipFinishBlock)unzipFinishBlock;
{
    _loadZipBlock = loadZipBlock;
    _unzipSuccessBlock = unzipSuccessBlock;
    _unzipFinishBlock = unzipFinishBlock;
    [self CheckVersion];
}


/**
 检查新版本
 */
-(void)CheckVersion
{
    [JZNetTool GetDataWithUrl:[APPURL stringByAppendingString:@"/h5/version"] Success:^(id response) {
        NSDictionary *result = (NSDictionary *)response;
        if([result isKindOfClass:[NSDictionary class]]){
            if([result[@"success"] integerValue]==1){
                _requestVersion = [result[@"version"] floatValue];
                if([self isShouldUpdate:_requestVersion]){
                    
                    _downLoadUrl = result[@"url"];
                    [self downLoadHeBundle];
                    return;
                }
            }
        }
        //不需要更新 || 请求异常
        if([self achiveIsSuccess]){
            [self unzipfinish];
        }else{
            [self achiveDownLoadZipFile:YES];
        }
    } NetFailure:^(id error) {
        
        if([self achiveIsSuccess]){
            [self unzipfinish];
        }else{
            [self achiveDownLoadZipFile:YES];
        }
    }];
}


/**
 下载H5资源包
 */
-(void)downLoadHeBundle
{
    WEAKSELF(weakSelf);
    [JZNetTool downloadTaskWithURl:_downLoadUrl progress:^(float progressPercent) {
        
        dispatch_async(dispatch_get_main_queue(), ^{
    
            if(_loadZipBlock){
                self.loadZipBlock(YES, progressPercent);
            }
        });
    } completionBlock:^(NSString * _Nullable ZIPfilePath, NSError * _Nullable error) {
        if(!error){
            [[NSUserDefaults standardUserDefaults] setObject:ZIPfilePath forKey:K_ZIPPath];
            [weakSelf achiveDownLoadZipFile:YES];
        }else{
            //下载失败
            [weakSelf unzipfinish];
            [Helper removeCacheWithFilePath:ZIPfilePath];
        }
    }];
}


#pragma mark -
#pragma mark - avhive zip
-(void)achiveDownLoadZipFile:(BOOL)downloadzip
{
    NSString *zipPath = [Helper getdownzipPath];
    if(downloadzip==NO){
        zipPath = [[NSBundle mainBundle] pathForResource:@"h5" ofType:@"zip"];
    }
    [self releaseZipFilesWithUnzipFileAtPath:zipPath Destination:[Helper getUnZipFilePah]];
}

- (void)releaseZipFilesWithUnzipFileAtPath:(NSString *)zipPath Destination:(NSString *)unzipPath{
    [[NSUserDefaults standardUserDefaults] setBool:NO forKey:K_isArchived];
    //覆盖解压
    NSError *error;
    if ([SSZipArchive unzipFileAtPath:zipPath toDestination:unzipPath overwrite:YES password:nil error:&error delegate:self]) {
        NSLog(@"unzipPath = %@",unzipPath);
        NSLog(@"解压成功并覆盖！");
        [[NSUserDefaults standardUserDefaults] setBool:NO forKey:K_isArchived];
        //删除zip
        [Helper removeCacheWithFilePath:[Helper getdownzipPath]];
        //保存新版本号
        [Helper setCurrentH5Version:_requestVersion];
        
        if(_unzipSuccessBlock){
            self.unzipSuccessBlock(YES);
        }
        [self unzipfinish];
    }else {
        NSLog(@"解压失败：%@",error);
        [self unzipfinish];
    }
}

#pragma mark - SSZipArchiveDelegate
- (void)zipArchiveWillUnzipArchiveAtPath:(NSString *)path zipInfo:(unz_global_info)zipInfo {
    NSLog(@"将要解压。");
}


/**
 是否需要更新版本
 */
-(BOOL)isShouldUpdate:(float)version
{
    if(version>[Helper getCurrentH5Version])
    {
        return YES;
    }
    return NO;
}
/**
 是否解压成功
 */
-(BOOL)achiveIsSuccess
{
    //是否解压成功
    NSString *zipPath = [Helper getdownzipPath];
    
    if([[NSUserDefaults standardUserDefaults] objectForKey:K_isArchived]==NO && [Helper isExistObjectForfilePath:zipPath]){
        return NO;
    }
    return YES;
}

-(void)unzipfinish
{
    NSString *cacheH5Path = [[Helper getUnZipFilePah] stringByAppendingString:@"/index.html"];
    //如果本地不存在html 解压项目中的zip
    if(![Helper isExistObjectForfilePath:cacheH5Path]){
        [self achiveDownLoadZipFile:NO];
        return;
    }
    if(_unzipFinishBlock){
        self.unzipFinishBlock(YES); //操作完成回传进入主界面。
    }
}

@end

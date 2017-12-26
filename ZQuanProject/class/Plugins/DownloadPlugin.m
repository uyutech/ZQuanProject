//
//  DownloadPlugin.m
//  ZQuanProject
//
//  Created by 王园园 on 2017/12/18.
//  Copyright © 2017年 zquan. All rights reserved.
//

#import "DownloadPlugin.h"
#import <AFNetworking/AFHTTPSessionManager.h>
#import <Photos/Photos.h>
@interface DownloadPlugin()
@property(nonatomic,strong) MBProgressHUD *hud;
@property(nonatomic,strong) NSURLSessionDownloadTask *task;
@end

@implementation DownloadPlugin

-(void)initMessageJson:(NSDictionary *)message
{
    [super initMessageJson:message];
    if(IS_DICTIONARY_CLASS(message[@"param"])){
        NSDictionary *param = message[@"param"];
        NSString *url = param[@"url"];
        NSString *name = param[@"name"];
        
        if([self isImage:url] || [self isImage:name]){
            
            NSData * data = [NSData dataWithContentsOfURL:[NSURL URLWithString:url]];
            UIImage *image = [UIImage imageWithData:data];
            if(image){
                UIImageWriteToSavedPhotosAlbum(image, self, @selector(image:didFinishSavingWithError:contextInfo:), (__bridge void *)self);
            }
            
            /*
            //图片下载
            _hud = [MBProgressHUD showHUDAddedTo:[UIApplication sharedApplication].keyWindow animated:YES];
            _hud.mode = MBProgressHUDModeDeterminateHorizontalBar;
            _hud.label.text =@"正在下载...";
            
            [_hud.button setTitle:@"取消" forState:UIControlStateNormal];
            [_hud.button addTarget:self action:@selector(cancelWork) forControlEvents:UIControlEventTouchUpInside];
            float progress = 0.0f;
            _hud.progress = progress;
            
            [self startDownLoad:url name:name];
            */
        }
    }
}


-(void)cancelWork
{
    [_task cancel];
    if(_hud){
        [_hud hideAnimated:YES];
    }
}

-(BOOL)isImage:(NSString *)str
{
    if(IsEmptyStr(str)){
        return NO;
    }
    
    NSArray *arr = @[@".png",@".jpg",@".jpeg",@".gif",@".PNG",@".JPG",@".JPEG",@".GIF"];
    
    __block BOOL isTrue = NO;
    [arr enumerateObjectsUsingBlock:^(id  _Nonnull obj, NSUInteger idx, BOOL * _Nonnull stop) {
        if([str containsString:obj]){
            isTrue = YES;
        }
    }];
    return isTrue;
}

-(void)startDownLoad:(NSString *)url name:(NSString *)fileName
{
     NSString *encodeUrl=  [url stringByAddingPercentEscapesUsingEncoding:NSUTF8StringEncoding];
    NSURLRequest *request = [NSURLRequest requestWithURL:[NSURL URLWithString:encodeUrl]];
    AFHTTPSessionManager *manager = [AFHTTPSessionManager manager];
    manager.responseSerializer.acceptableContentTypes = [NSSet setWithObjects:@"text/plain", @"application/json", @"text/json", @"text/javascript",@"application/x-www-form-urlencoded", nil];
    manager.requestSerializer = [AFHTTPRequestSerializer serializer];
    manager.responseSerializer = [AFHTTPResponseSerializer serializer];
    manager.requestSerializer.timeoutInterval = 15;
    _task = [manager downloadTaskWithRequest:request progress:^(NSProgress * _Nonnull downloadProgress) {
        //改变进度条
        float f_progress = 1.0 * downloadProgress.completedUnitCount / downloadProgress.totalUnitCount;
        dispatch_async(dispatch_get_main_queue(), ^{
            self.hud.progress = f_progress;
        });
        
    } destination:^NSURL * _Nonnull(NSURL * _Nonnull targetPath, NSURLResponse * _Nonnull response) {
        //设置下载路径
        NSString *filePath = [NSString stringWithFormat:@"/zqdownload/%@",response.suggestedFilename];
        NSString *fullPath = [CachDirectoryePath stringByAppendingPathComponent:filePath];
        return [NSURL fileURLWithPath:fullPath];
    } completionHandler:^(NSURLResponse * _Nonnull response, NSURL * _Nullable filePath, NSError * _Nullable error) {
        dispatch_async(dispatch_get_main_queue(), ^{
            [self.hud hideAnimated:YES];
        });
        if(filePath!=nil){
            NSString *path = [[filePath absoluteString] stringByReplacingOccurrencesOfString:@"file://" withString:@""];
            [self saveToAlbmWithPath:path];
        }
    }];
    [_task resume];
}
                                      
-(void)saveToAlbmWithPath:(NSString *)path
{
    NSData *imgData = [[NSData alloc] initWithContentsOfFile:path];
    UIImage *image = [UIImage imageWithData:imgData];
    
    if(image){
        UIImageWriteToSavedPhotosAlbum(image, self, @selector(image:didFinishSavingWithError:contextInfo:), (__bridge void *)self);
    }
}


- (void)image:(UIImage *)image didFinishSavingWithError:(NSError *)error contextInfo:(void *)contextInfo
{
    if(!error){
        [HDHud showMessageInView:[UIApplication sharedApplication].keyWindow title:@"已保存到相册"];
    }
}
@end

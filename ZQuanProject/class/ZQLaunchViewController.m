//
//  ZQLaunchViewController.m
//  ZQuanProject
//
//  Created by wyy on 2017/12/12.
//  Copyright © 2017年 zquan. All rights reserved.
//

#import "ZQLaunchViewController.h"
#import "Helper+Cache.h"
#import "JZNetTool.h"
#import "GradientProgressView.h"
#import "ZQWebViewController.h"
#import <SSZipArchive/ZipArchive.h>

@interface ZQLaunchViewController ()<SSZipArchiveDelegate>

@property(nonatomic,strong)GradientProgressView *progressView;

@property(nonatomic,assign)CGFloat progress;

@property(nonatomic,copy)NSString *downLoadUrl;

@property(nonatomic,assign)float requestVersion;

@property(nonatomic,assign)BOOL isUnZip;  //已经解压

@property(nonatomic,strong)NSTimer *timer;

@property(nonatomic,assign) int timeout;
@end

@implementation ZQLaunchViewController

- (void)viewDidLoad {
    [super viewDidLoad];
    // Do any additional setup after loading the view.
    self.view.backgroundColor = kLaunchBackColor;
    [self setUpViews];
    [self fadeIn:self.view];
    [self Runtimer];
    [self CheckVersion];

}


#pragma mark - Layout
-(void)setUpViews
{
    UIImageView *backImgView = [[UIImageView alloc] initWithFrame:CGRectMake(0, 40, kMainBoundsWidth, kMainBoundsHeight-0-100-40)];
    backImgView.layer.masksToBounds = YES;
    backImgView.contentMode = UIViewContentModeScaleAspectFit;
    backImgView.image = [UIImage imageNamed:@"main_bg"];
    
    [self.view addSubview:backImgView];
    
    
    UILabel *DomainLable = [[UILabel alloc] initWithFrame:CGRectMake(0, kMainBoundsHeight-60, kMainBoundsWidth, 20)];
    DomainLable.text = LaunchDomain;
    DomainLable.textColor = HexRGBAlpha(0X7EB4CA,1);
    DomainLable.backgroundColor = [UIColor clearColor];
    DomainLable.textAlignment = NSTextAlignmentCenter;
    DomainLable.font = KMainBoldFont(13);
    [self.view addSubview:DomainLable];
    
    
    UILabel *CoptyrightLable = [[UILabel alloc] initWithFrame:CGRectMake(0, kMainBoundsHeight-40, kMainBoundsWidth, 20)];
    CoptyrightLable.text = LaunchCoptyright;
    CoptyrightLable.textColor = HexRGBAlpha(0XA4D2DF,1);
    CoptyrightLable.backgroundColor = [UIColor clearColor];
    CoptyrightLable.textAlignment = NSTextAlignmentCenter;
    CoptyrightLable.font = KMainBoldFont(13);
    [self.view addSubview:CoptyrightLable];
    
    [[self progressView] setProgress:0 animated:YES];
    
    self.view.alpha = 0;
}


- (void)fadeIn:(UIView *)s_view
{
    CGContextRef ctx = UIGraphicsGetCurrentContext();
    [UIView beginAnimations:nil context:ctx];
    [UIView setAnimationCurve:UIViewAnimationCurveEaseInOut];
    [UIView setAnimationDuration:0.2];
    [s_view setAlpha:1.0f];
    [UIView commitAnimations];
}

/**
 @return 渐变进度条
 */
-(GradientProgressView *)progressView
{
    if(!_progressView){
        UIView *backView = [[UIView alloc] initWithFrame:CGRectMake(30, kMainBoundsHeight-80, kMainBoundsWidth-60, 5)];
        backView.backgroundColor = kProgressBackColor;
        backView.layer.masksToBounds = YES;
        backView.layer.cornerRadius = 3;
        [self.view addSubview:backView];
        
        _progressView =[[GradientProgressView alloc] initWithFrame:backView.bounds];
        [backView addSubview:_progressView];
    }
    return _progressView;
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
            [self enterMainVC];
        }else{
            [self achiveDownLoadZipFile:YES];
        }
    } NetFailure:^(id error) {

        if([self achiveIsSuccess]){
            [self enterMainVC];
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
            //主线程刷新Progress
            [weakSelf.progressView setProgress:progressPercent animated:YES];
        });
    } completionBlock:^(NSString * _Nullable ZIPfilePath, NSError * _Nullable error) {
        if(!error){
            [[NSUserDefaults standardUserDefaults] setObject:ZIPfilePath forKey:K_ZIPPath];
            [weakSelf achiveDownLoadZipFile:YES];
        }else{
            //下载失败
            [weakSelf enterMainVC];
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
        [self enterMainVC];
    }else {
        NSLog(@"解压失败：%@",error);
        [self enterMainVC];
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




#pragma mark-
#pragma mark - PushMainVC
-(void)enterMainVC
{
    NSString *cacheH5Path = [[Helper getUnZipFilePah] stringByAppendingString:@"/index.html"];
    //如果本地不存在html 解压项目中的zip
    if(![Helper isExistObjectForfilePath:cacheH5Path]){
        [self achiveDownLoadZipFile:NO];
        return;
    }
    
    [self.progressView setProgress:1 animated:YES];
    if(_timeout >= LaunchWaitTime){
        //超过1S
        [self pushMainVC];
    }else{
        int yuTime = LaunchWaitTime -_timeout;
        if(yuTime<=0){
            yuTime=0;
        }
        WEAKSELF(weakSelf);
        dispatch_time_t delayTime = dispatch_time(DISPATCH_TIME_NOW, (int64_t)(yuTime * NSEC_PER_MSEC));
        dispatch_after(delayTime, dispatch_get_main_queue(), ^{
            [weakSelf pushMainVC];
        });
    }
}

/**
  跳转页面
 */
-(void)pushMainVC
{
    [UIView animateWithDuration:0.2 animations:^{
        self.view.alpha = 0;
    } completion:^(BOOL finished) {
        dispatch_async(dispatch_get_main_queue(), ^{
            ZQWebViewController *webVC = [[ZQWebViewController alloc] init];
            webVC.URLString = [WEBURL stringByAppendingString:@"/index.html"];
            webVC.hideNavBar = YES;
            webVC.showBackButton = NO;
            UINavigationController *nav = [[UINavigationController alloc] initWithRootViewController:webVC];
            [UIApplication sharedApplication].keyWindow.rootViewController = nav;
        });
    }];
}


#pragma mark-
#pragma mark - Timer

//创建定时器
-(void)Runtimer
{
    _timeout = 0;
    _timer = [NSTimer timerWithTimeInterval:0.001 target:self selector:@selector(timerAction) userInfo:nil repeats:YES];
    [[NSRunLoop mainRunLoop] addTimer:_timer forMode:NSDefaultRunLoopMode];
}

-(void)timerAction
{
    _timeout++;
    if(_timeout==LaunchWaitTime){
        [_timer invalidate];
    }
}

- (void)didReceiveMemoryWarning {
    [super didReceiveMemoryWarning];
    // Dispose of any resources that can be recreated.
}

@end

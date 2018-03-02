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
#import "ZQUIWebViewController.h"
#import "UnzipManager.h"

@interface ZQLaunchViewController ()

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
    self.view.backgroundColor = [UIColor whiteColor];
    [self setUpViews];
    [self Runtimer];
    
    [self unzipOperation];
}


-(void)unzipOperation
{
    UnzipManager *manager = [[UnzipManager alloc] init];
    
    WEAKSELF(weakSelf);
    
    [manager loadZip:^(BOOL isneedLoad, float loadProgress) {
        //主线程刷新Progress
        if(isneedLoad==YES){
            [weakSelf.progressView setProgress:loadProgress animated:YES];
        }
    } Unzip:^(BOOL isUnzipedSuccess) {
    } UnzipFinish:^(BOOL isUnziped) {
        //解压等操作完成后跳转
        [weakSelf enterMainVC];
    }];
}



#pragma mark - Layout
-(void)setUpViews
{
    UIImageView *backImgView = [[UIImageView alloc] initWithFrame:self.view.bounds];
    backImgView.image = [UIImage imageNamed:@"lauch_img"];
    [self.view addSubview:backImgView];
    
    UIImageView *logoImg = [[UIImageView alloc] initWithFrame:CGRectMake(kMainBoundsWidth/2-151/2, kMainBoundsHeight-165, 151, 78)];
    logoImg.image = [UIImage imageNamed:@"logo_bg"];
    logoImg.contentMode = UIViewContentModeScaleAspectFit;
    [self.view addSubview:logoImg];
    
    UILabel *DomainLable = [[UILabel alloc] initWithFrame:CGRectMake(0, kMainBoundsHeight-58, kMainBoundsWidth, 20)];
    DomainLable.text = LaunchDomain;
    DomainLable.textColor = kLaunchTextColorOne;
    DomainLable.backgroundColor = [UIColor clearColor];
    DomainLable.textAlignment = NSTextAlignmentCenter;
    DomainLable.font = KMainBoldFont(13);
    [self.view addSubview:DomainLable];
    
    
    UILabel *CoptyrightLable = [[UILabel alloc] initWithFrame:CGRectMake(0, kMainBoundsHeight-38, kMainBoundsWidth, 20)];
    CoptyrightLable.text = LaunchCoptyright;
    CoptyrightLable.textColor = kLaunchTextColorTwo;
    CoptyrightLable.backgroundColor = [UIColor clearColor];
    CoptyrightLable.textAlignment = NSTextAlignmentCenter;
    CoptyrightLable.font = KMainBoldFont(13);
    [self.view addSubview:CoptyrightLable];
    
    [[self progressView] setProgress:0 animated:YES];

}


/**
 @return 渐变进度条
 */
-(GradientProgressView *)progressView
{
    if(!_progressView){
        UIView *backView = [[UIView alloc] initWithFrame:CGRectMake(30, kMainBoundsHeight-78, kMainBoundsWidth-60, 4)];
        backView.backgroundColor = kProgressBackColor;
        backView.layer.masksToBounds = YES;
        backView.layer.cornerRadius = 3;
        [self.view addSubview:backView];
        
        _progressView =[[GradientProgressView alloc] initWithFrame:backView.bounds];
        [backView addSubview:_progressView];
    }
    return _progressView;
}


#pragma mark-
#pragma mark - PushMainVC
-(void)enterMainVC
{
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
            ZQUIWebViewController *webVC = [[ZQUIWebViewController alloc] init];
            webVC.URLString = [WEBURL stringByAppendingString:@"/index.html"];
            webVC.transparentTitle = YES;
            webVC.hideBackButton = YES;
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

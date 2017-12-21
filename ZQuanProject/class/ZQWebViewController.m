//
//  ZQWebViewController.m
//  ZQuanProject
//
//  Created by wyy on 2017/12/12.
//  Copyright © 2017年 zquan. All rights reserved.
//

#import "ZQWebViewController.h"
#import "Helper.h"
#import "NSURLProtocol+WebKitSupport.h"
#import "HDHud.h"
#import "ZQWebVCSingleton.h"

static void *WkwebBrowserContext = &WkwebBrowserContext;

@interface ZQWebViewController ()<WKNavigationDelegate,WKUIDelegate,WKScriptMessageHandler,UINavigationControllerDelegate,UINavigationBarDelegate>

@end

@implementation ZQWebViewController

- (void)viewDidLoad {
    [super viewDidLoad];

    //添加到主控制器
    [self.view addSubview:self.wkWebView];
    
    if (@available(iOS 11.0, *)){
        self.wkWebView.scrollView.contentInsetAdjustmentBehavior = UIScrollViewContentInsetAdjustmentNever;
    }
    
    [self modifyWebViewUserAgent];

    [NSURLProtocol wk_registerScheme:@"http"];
    [NSURLProtocol wk_registerScheme:@"https"];
    [NSURLProtocol wk_registerScheme:@"h5container.message"];
    
    [self LoadWebUrl];
}


- (void)viewWillAppear:(BOOL)animated{
    [super viewWillAppear:animated];
    
    [self setHideNavBar:_hideNavBar];
    
    [ZQWebVCSingleton shareInstance].webVC = self;
}


-(void)viewDidAppear:(BOOL)animated
{
    [super viewDidAppear:animated];
    [self registJS];
    
    //读通知栏消息
    NSString *notifyUrl = [[NSUserDefaults standardUserDefaults] objectForKey:K_ReceiveNotifyURL];
    if(!IsEmptyStr(notifyUrl)){
        ZQWebViewController *webVC = [[ZQWebViewController alloc] init];
        webVC.URLString = notifyUrl;
        webVC.hideNavBar = NO;
        webVC.showBackButton = YES;
        [self.navigationController pushViewController:webVC animated:YES];
        [[NSUserDefaults standardUserDefaults] removeObjectForKey:K_ReceiveNotifyURL];
    }
}

#pragma mark ================ 加载 ================
-(void)LoadWebUrl
{
    NSURLRequest * request = [NSURLRequest requestWithURL:[NSURL URLWithString:self.URLString]];
    [self.wkWebView loadRequest:request];
}



-(void)modifyWebViewUserAgent
{
    [_wkWebView evaluateJavaScript:@"navigator.userAgent" completionHandler:^(id result, NSError *error) {
        
        NSString *userAgent = result;
        NSString *str = [NSString stringWithFormat:@" app/ZhuanQuan/%@",IOSVersion];
        NSString *newUserAgent = [userAgent stringByAppendingString:str];
        NSDictionary *dictionary = [NSDictionary dictionaryWithObjectsAndKeys:newUserAgent, @"UserAgent", nil];
        [[NSUserDefaults standardUserDefaults] registerDefaults:dictionary];
        [[NSUserDefaults standardUserDefaults] synchronize];
        //不加这句代码只是更改了本地的UserAgent，没修改网页的,这个函数是9.0之后才出现的，在这之前
        if (@available(iOS 9.0, *)) {
            [_wkWebView setCustomUserAgent:newUserAgent];
        }
    }];
}


//服务器开始请求的时候调用
- (void)webView:(WKWebView *)webView decidePolicyForNavigationAction:(WKNavigationAction *)navigationAction decisionHandler:(void (^)(WKNavigationActionPolicy))decisionHandler {
    
    decisionHandler(WKNavigationActionPolicyAllow);
}


#pragma mark ================ WKNavigationDelegate ================

//这个是网页加载完成，导航的变化
-(void)webView:(WKWebView *)webView didFinishNavigation:(WKNavigation *)navigation{
    
    [self registJS];
    
    [[UIApplication sharedApplication] setNetworkActivityIndicatorVisible:NO];
    
    if(_readTitle){
        self.navTitle = webView.title;
    }
    [self endRefresh];
}



//开始加载
-(void)webView:(WKWebView *)webView didStartProvisionalNavigation:(WKNavigation *)navigation{
}

//内容返回时调用
-(void)webView:(WKWebView *)webView didCommitNavigation:(WKNavigation *)navigation{
}


//服务器请求跳转的时候调用
-(void)webView:(WKWebView *)webView didReceiveServerRedirectForProvisionalNavigation:(WKNavigation *)navigation{
}


// 内容加载失败时候调用
-(void)webView:(WKWebView *)webView didFailProvisionalNavigation:(WKNavigation *)navigation withError:(NSError *)error{
    NSLog(@"页面加载超时");
    [self endRefresh];
}


#pragma mark ================ WKScriptMessageHandler ================
//拦截执行网页中的JS方法
- (void)userContentController:(WKUserContentController *)userContentController didReceiveScriptMessage:(WKScriptMessage *)message{
    NSLog(@"__userScripts:%@--message:%@",userContentController.userScripts,message);
}


#pragma mark ================ 控件加载 ================

- (WKWebView *)wkWebView{
    if (!_wkWebView) {
        //设置网页的配置文件
        WKWebViewConfiguration *configuration = [[WKWebViewConfiguration alloc]init];
        configuration.selectionGranularity = YES;
        configuration.processPool = [[WKProcessPool alloc] init];
        configuration.suppressesIncrementalRendering = YES;
        configuration.preferences.javaScriptEnabled = YES;
        configuration.preferences.javaScriptCanOpenWindowsAutomatically = NO;
        WKUserContentController * UserContentController = [[WKUserContentController alloc]init];
        configuration.userContentController = UserContentController;
        
        [self registJS];
    
        _wkWebView = [[WKWebView alloc] initWithFrame:CGRectMake(0,64, kMainBoundsWidth,kMainBoundsHeight-64) configuration:configuration];
        if(_hideNavBar){
            _wkWebView.frame = [UIScreen mainScreen].bounds;
        }
        _wkWebView.backgroundColor = [UIColor clearColor];
        // 设置代理
        _wkWebView.navigationDelegate = self;
        _wkWebView.UIDelegate = self;
        _wkWebView.allowsBackForwardNavigationGestures = YES;
        [_wkWebView sizeToFit];
    }
    return _wkWebView;
}


-(void)registJS
{
    NSString *path = [[NSBundle mainBundle] pathForResource:@"h5_bridge" ofType:@"js"];
    NSString *js = [[NSString alloc] initWithContentsOfFile:path encoding:NSUTF8StringEncoding error:nil];
    //注入js
    WKUserScript *script = [[WKUserScript alloc] initWithSource:js injectionTime:WKUserScriptInjectionTimeAtDocumentStart forMainFrameOnly:NO];
    [_wkWebView.configuration.userContentController addUserScript:script];
}


#pragma mark -  左边按钮
-(void)setShowBackButton:(BOOL)showBackButton
{
    //设置是否隐藏返回按钮
    _showBackButton = showBackButton;
    self.leftbarButton.hidden = !showBackButton;
}

//返回按钮
-(void)backEvent{
    NSString *backJS = @"ZhuanQuanJSBridge.trigger('back');";
    [self.wkWebView evaluateJavaScript:backJS completionHandler:^(id _Nullable response, NSError * _Nullable error) {
        NSLog(@"backJS回调——%@——error：%@",response,error);
    }];
}


-(void)emitWithEvenName:(NSString *)event Param:(NSDictionary *)param
{
    _popWindowParma = param;
    NSString *jsonStr = [Helper covertStringWithJson:param];
    NSString *backJS = [NSString stringWithFormat:@"ZhuanQuanJSBridge.emit('resume',%@)",jsonStr];
    [self.wkWebView evaluateJavaScript:backJS completionHandler:^(id _Nullable response, NSError * _Nullable error) {
        NSLog(@"PoP回调——%@-—error：%@",response,error);
    }];
    [self.navigationController popViewControllerAnimated:YES];
}

#pragma mark -  右边按钮
-(void)setShowOptionMenu:(BOOL)showOptionMenu
{
    _showOptionMenu = showOptionMenu;
    self.rightbarButton.hidden = !showOptionMenu;
}

-(void)setOptionMenuTitle:(NSString *)optionMenuTitle
{
    if(!IsEmptyStr(optionMenuTitle)){
        self.showOptionMenu = YES;
        [self.rightbarButton setTitle:optionMenuTitle forState:UIControlStateNormal];
    }
}

-(void)OptionMenuEvent
{
    NSString *JS = @"ZhuanQuanJSBridge.emit('optionMenu');";
    [self.wkWebView evaluateJavaScript:JS completionHandler:^(id _Nullable response, NSError * _Nullable error) {
        NSLog(@"optionMenuJS回调————%@————error：%@",response,error);
    }];
}


-(void)setSubTitle:(NSString *)subTitle
{
    _subTitle = subTitle;
    [self setNavSubTile:_subTitle];
}

#pragma mark -  设置导航
-(void)setNavBarColor:(NSString *)NavBarColor
{
    _NavBarColor = NavBarColor;
    [self setNavColor:NavBarColor];
}

-(void)setNavTitle:(NSString *)navTitle
{
    _navTitle = navTitle;
    [self setNavBarTitle:_navTitle];
}

#pragma mark -  添加刷新
-(void)setIsdoFresh:(BOOL)isdoFresh
{
    if(_refreshControl){
        if(isdoFresh==NO){
            //阻止刷新
            [_refreshControl endRefreshing];
        }else{
            [_wkWebView reload];
        }
    }
  
}

-(void)setRefreshState:(BOOL)refreshState
{
    if(refreshState){
        if(!_refreshControl){
            self.refreshControl = [[UIRefreshControl alloc] init];
            self.refreshControl.attributedTitle = [[NSAttributedString alloc] initWithString:@"努力加载中……"];
            self.refreshControl.tintColor = [UIColor grayColor];
            [self.refreshControl addTarget:self action:@selector(refreshAction) forControlEvents:UIControlEventValueChanged];
        }
        
        if (@available(iOS 10.0, *)) {
            self.wkWebView.scrollView.refreshControl = _refreshControl;
        } else {
            // Fallback on iOS 10 earlier versions
            [self.wkWebView addSubview:_refreshControl];
        }
        
    }else{
        if (@available(iOS 10.0, *)) {
            self.wkWebView.scrollView.refreshControl = nil;
        } else {
            [_refreshControl removeFromSuperview];
        }
    }
}


- (void)refreshAction{
    //下拉转圈 触发fresh
    NSString *backJS = @"ZhuanQuanJSBridge.trigger('refresh');";
    [self.wkWebView evaluateJavaScript:backJS completionHandler:^(id _Nullable response, NSError * _Nullable error) {
        NSLog(@"freshJS回调————%@————error：%@",response,error);
    }];
}

-(void)endRefresh{
    if(_refreshControl.refreshing){
        [_refreshControl endRefreshing];
    }
}

#pragma mark ================ WillDisappear ================
-(void)viewWillDisappear:(BOOL)animated{
    [self.wkWebView.configuration.userContentController removeAllUserScripts];
    [self.wkWebView setNavigationDelegate:nil];
    [self.wkWebView setUIDelegate:nil];
}

//注意，观察的移除
-(void)dealloc{
    
}


- (void)didReceiveMemoryWarning {
    [super didReceiveMemoryWarning];
    // Dispose of any resources that can be recreated.
}



@end




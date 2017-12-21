//
//  ZQWebViewController.h
//  ZQuanProject
//
//  Created by wyy on 2017/12/12.
//  Copyright © 2017年 zquan. All rights reserved.
//

#import <UIKit/UIKit.h>
#import <WebKit/WebKit.h>
#import "BaseViewController.h"

@interface ZQWebViewController : BaseViewController

//网址链接
@property (nonatomic, copy) NSString *URLString;

@property (nonatomic,strong)UIRefreshControl *refreshControl;

//不显示导航
@property (nonatomic, assign) BOOL hideNavBar;

@property (nonatomic, assign) BOOL showBackButton;

@property (nonatomic, assign) BOOL showOptionMenu;

@property (nonatomic, assign) BOOL isdoFresh;

@property (nonatomic, assign) BOOL refreshState;

@property (nonatomic, assign) BOOL readTitle;

@property(nonatomic,strong)NSString *navTitle;

@property(nonatomic,strong)NSString *subTitle;

@property(nonatomic,strong)NSString *optionMenuTitle;

@property(nonatomic,strong)NSString *NavBarColor;

@property (nonatomic, strong) WKWebView *wkWebView;

@property(nonatomic,strong)NSDictionary *popWindowParma;

-(void)emitWithEvenName:(NSString *)event Param:(NSDictionary *)param;
@end

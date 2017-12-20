//
//  H5Plugin.m
//  ZQuanProject
//
//  Created by 王园园 on 2017/12/17.
//  Copyright © 2017年 zquan. All rights reserved.
//

#import "H5Plugin.h"

@implementation H5Plugin

-(void)initMessageJson:(NSDictionary *)message
{
    NSLog(@"======jsLog=======【%@】",message);
}


-(ZQWebViewController *)webVC
{
    if(!_webVC){
        UINavigationController *nav = (UINavigationController *)[UIApplication sharedApplication].keyWindow.rootViewController;
        
        _webVC = (ZQWebViewController *)nav.visibleViewController;
    }
    return _webVC;
}



-(WKWebView *)wkweb
{
    if(!_wkweb){
        _wkweb = self.webVC.wkWebView;
    }
    return _wkweb;
}

@end

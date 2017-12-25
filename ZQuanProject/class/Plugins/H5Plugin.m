//
//  H5Plugin.m
//  ZQuanProject
//
//  Created by 王园园 on 2017/12/17.
//  Copyright © 2017年 zquan. All rights reserved.
//

#import "H5Plugin.h"
#import "ZQWebVCSingleton.h"

@implementation H5Plugin

-(void)initMessageJson:(NSDictionary *)message
{
    NSLog(@"======jsLog=======【%@】",message);
}


-(ZQUIWebViewController *)webVC
{
//    if(!_webVC){
//        UINavigationController *nav = (UINavigationController *)[UIApplication sharedApplication].keyWindow.rootViewController;
//
//        _webVC = (ZQWebViewController *)nav.visibleViewController;
//    }
//    return _webVC;
    return [ZQWebVCSingleton shareInstance].webVC;
}



-(UIWebView *)web
{
    if(!_web){
        _web = self.webVC.webView;
    }
    return _web;
}

@end

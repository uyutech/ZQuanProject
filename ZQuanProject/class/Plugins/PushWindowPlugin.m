//
//  PushWindowPlugin.m
//  ZQuanProject
//
//  Created by 王园园 on 2017/12/18.
//  Copyright © 2017年 zquan. All rights reserved.
//

#import "PushWindowPlugin.h"
#import "ZQUIWebViewController.h"
@implementation PushWindowPlugin

-(void)initMessageJson:(NSDictionary *)message
{
    [super initMessageJson:message];
    
    NSString *JS = [NSString stringWithFormat:@"ZhuanQuanJSBridge.emit('pause');"];
    [self.web stringByEvaluatingJavaScriptFromString:JS];
    
    if(IS_DICTIONARY_CLASS(message[@"param"])){
        
        NSDictionary *param = message[@"param"];
        
        if(!IsEmptyStr(param[@"url"])){
            
            ZQUIWebViewController *containerVC = [[ZQUIWebViewController alloc] init];

            containerVC.URLString = param[@"url"];
            containerVC.transparentTitle = NO;
            if(IS_DICTIONARY_CLASS(param[@"params"])){

                NSDictionary *layoutParams = param[@"params"];
                [containerVC initLayoutWithParam:layoutParams];
            }
            [self.webVC.navigationController pushViewController:containerVC animated:YES];
        }
        
    }
    
}
@end

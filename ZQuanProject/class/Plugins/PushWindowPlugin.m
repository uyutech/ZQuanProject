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
    
    //NSString *clientId = message[@"clientId"];
    
    if(IS_DICTIONARY_CLASS(message[@"param"])){
        
        NSDictionary *param = message[@"param"];
        
        if(!IsEmptyStr(param[@"url"])){
            
            ZQUIWebViewController *containerVC = [[ZQUIWebViewController alloc] init];

            containerVC.URLString = param[@"url"];
            
            if(IS_DICTIONARY_CLASS(param[@"params"])){
                
                NSDictionary *layoutParams = param[@"params"];
                [containerVC initLayoutWithParam:layoutParams];
            }
            containerVC.transparentTitle = NO;
            [self.webVC.navigationController pushViewController:containerVC animated:YES];
        }
        
    }
    
}
@end

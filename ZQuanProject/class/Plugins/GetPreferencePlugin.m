//
//  GetPreferencePlugin.m
//  ZQuanProject
//
//  Created by 王园园 on 2017/12/18.
//  Copyright © 2017年 zquan. All rights reserved.
//

#import "GetPreferencePlugin.h"

@implementation GetPreferencePlugin



-(void)initMessageJson:(NSDictionary *)message
{
    [super initMessageJson:message];
    
    if(!IsEmptyStr(message[@"param"])){
        
        NSString *key = message[@"param"];
        
        NSString *value = [[NSUserDefaults standardUserDefaults] objectForKey:key];
        
        if(IsEmptyStr(value)){
            value = @"";
        }
        
        //回调
        NSString *clientId = message[@"clientId"];
        NSString *jsStr = [NSString stringWithFormat:@"\"%@\",\"%@\"",clientId,value];
        
        [self.wkweb evaluateJavaScript:jsStr completionHandler:^(id _Nullable response, NSError * _Nullable error) {
            NSLog(@"GetPreferencePlugin回调————%@————error：%@",response,error);
        }];
    }
    
}

@end

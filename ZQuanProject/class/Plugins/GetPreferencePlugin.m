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
        
        NSString *clientId = message[@"clientId"];
    
        if(IsEmptyStr(value)){
            value = @"";
        }
            
        NSString *jsStr = [NSString stringWithFormat:@"javascript: ZhuanQuanJSBridge._invokeJS(\"%@\",%@);",clientId,value];
        
        [self.web stringByEvaluatingJavaScriptFromString:jsStr];
    }
}

@end

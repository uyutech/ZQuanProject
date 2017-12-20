//
//  SetPreferencePlugin.m
//  ZQuanProject
//
//  Created by 王园园 on 2017/12/18.
//  Copyright © 2017年 zquan. All rights reserved.
//

#import "SetPreferencePlugin.h"

@implementation SetPreferencePlugin


-(void)initMessageJson:(NSDictionary *)message
{
    [super initMessageJson:message];
    
    if(IS_DICTIONARY_CLASS(message[@"param"])){
        
        NSDictionary *param = message[@"param"];
        
        NSString *key = param[@"key"];
        
        NSString *value = param[@"value"];
        
        NSString *clientId = message[@"clientId"];
        
        if(!IsEmptyStr(value)){
            
            [[NSUserDefaults standardUserDefaults] setObject:value forKey:key];
        }else{
            [[NSUserDefaults standardUserDefaults] removeObjectForKey:key];
        }
        
        [self.wkweb evaluateJavaScript:clientId completionHandler:^(id _Nullable response, NSError * _Nullable error) {
        }];
    }
}


@end

//
//  GetCachePlugin.m
//  ZQuanProject
//
//  Created by 王园园 on 2018/2/5.
//  Copyright © 2018年 zquan. All rights reserved.
//

#import "GetCachePlugin.h"

@implementation GetCachePlugin

-(void)initMessageJson:(NSDictionary *)message
{
    [super initMessageJson:message];
    
    NSString *clientId = message[@"clientId"];
    
    if(IS_DICTIONARY_CLASS(message[@"param"])){
        
        NSDictionary *param = message[@"param"];
        if([param[@"key"] isKindOfClass:[NSArray class]]){
            NSArray *keys = [NSArray arrayWithArray:param[@"key"]];
            
            NSMutableArray *values = [NSMutableArray array];
            [keys enumerateObjectsUsingBlock:^(NSString *obj, NSUInteger idx, BOOL * _Nonnull stop) {
                NSString *key = obj;
                NSString *value = [NSString stringWithFormat:@"%@",[[NSUserDefaults standardUserDefaults] objectForKey:key] ];
                if(IsEmptyStr(value)){
                    value = @"";
                }
                [values addObject:value];
            }];
            NSString *jsStr = [NSString stringWithFormat:@"javascript: ZhuanQuanJSBridge._invokeJS(\"%@\",%@);",clientId,values];
            [self.web stringByEvaluatingJavaScriptFromString:jsStr];
        }else if([param[@"key"] isKindOfClass:[NSString class]]){
            
            NSString *key = param[@"key"];
            
            NSString *value = [[NSUserDefaults standardUserDefaults] objectForKey:key];
            
            NSString *jsStr;
            if(IsEmptyStr(value)){
                value = @"";
            }
            jsStr = [NSString stringWithFormat:@"javascript: ZhuanQuanJSBridge._invokeJS(\"%@\",\"%@\");",clientId,value];
            [self.web stringByEvaluatingJavaScriptFromString:jsStr];
        }
    
    }
}

@end

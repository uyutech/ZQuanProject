//
//  LoginPlugin.m
//  ZQuanProject
//
//  Created by army8735 on 2017/12/29.
//  Copyright © 2017年 zquan. All rights reserved.
//

#import "LoginPlugin.h"
#import "JZNetTool.h"

@implementation LoginPlugin

-(void)initMessageJson:(NSDictionary *)message
{
    [super initMessageJson:message];
    
    NSString *clientId = message[@"clientId"];
    if(IS_DICTIONARY_CLASS(message[@"param"])){
        NSDictionary *param = message[@"param"];
        NSString *url = param[@"url"];
        NSDictionary *data = param[@"data"];
        NSString *loginUrl = [APPURL stringByAppendingString:url];
        [JZNetTool PostDataWithUrl:loginUrl param:data Success:^(id response) {
            NSLog(@"%@",response);
            NSString *dictStr = [Helper covertStringWithJson:response];
            NSString *jsStr = [NSString stringWithFormat:@"javascript: ZhuanQuanJSBridge._invokeJS(\"%@\",%@);",clientId,dictStr];
            [self.web stringByEvaluatingJavaScriptFromString:jsStr];
        } NetFailure:^(id error) {
            NSDictionary *dict = [NSDictionary dictionary];
            NSString *dictStr = [Helper covertStringWithJson:dict];
            NSString *jsStr = [NSString stringWithFormat:@"javascript: ZhuanQuanJSBridge._invokeJS(\"%@\",%@);",clientId,dictStr];
            ;
            [self.web stringByEvaluatingJavaScriptFromString:jsStr];
        }];
    }
}

@end


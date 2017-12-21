
//
//  NetworkInfoPlugin.m
//  ZQuanProject
//
//  Created by 王园园 on 2017/12/18.
//  Copyright © 2017年 zquan. All rights reserved.
//

#import "NetworkInfoPlugin.h"
#import "JZNetTool.h"

@implementation NetworkInfoPlugin

-(void)initMessageJson:(NSDictionary *)message
{
    [super initMessageJson:message];
    
    NSString *clientId = message[@"clientId"];
    
    BOOL hasNet = [JZNetTool sharedNetTool].isEnableNet;
    
    NSString *netName = [JZNetTool sharedNetTool].netName;
    
    BOOL isWifi = [netName isEqualToString:@"wifi"];
    
    NSDictionary *dict = @{@"available":@(hasNet),@"wifi":@(isWifi)};
    NSString *jsonStr = [Helper covertStringWithJson:dict];
    
    NSString *jsStr = [NSString stringWithFormat:@"\"%@\",%@",clientId,jsonStr];
    [self.wkweb evaluateJavaScript:jsStr completionHandler:^(id _Nullable response, NSError * _Nullable error) {
        NSLog(@"PromptPlugin回调————%@————error：%@",response,error);
    }];
}


-(void)jsHandlerText:(NSString *)text Click:(BOOL)sure ClientId:(NSString *)clientId
{
    NSDictionary *dict = @{@"value":text,@"success":@(sure)};
    NSString *jsonStr = [Helper covertStringWithJson:dict];
    
    NSString *jsStr = [NSString stringWithFormat:@"\"%@\",%@",clientId,jsonStr];
    
    [self.wkweb evaluateJavaScript:jsStr completionHandler:^(id _Nullable response, NSError * _Nullable error) {
        NSLog(@"PromptPlugin回调————%@————error：%@",response,error);
    }];
}

@end

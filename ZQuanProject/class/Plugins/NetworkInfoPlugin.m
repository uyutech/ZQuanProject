
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
    
    BOOL isWifi = [netName isEqualToString:@"WIFI"];
    
    NSDictionary *dict = @{@"available":@(hasNet),@"wifi":@(isWifi)};
    NSString *jsonStr = [Helper covertStringWithJson:dict];

    NSString *jsStr = [NSString stringWithFormat:@"javascript: ZhuanQuanJSBridge._invokeJS(\"%@\",%@);",clientId,jsonStr];
    [self.web stringByEvaluatingJavaScriptFromString:jsStr];
}



@end

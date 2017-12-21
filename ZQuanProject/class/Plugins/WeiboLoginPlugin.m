//
//  WeiboLoginPlugin.m
//  ZQuanProject
//
//  Created by 王园园 on 2017/12/18.
//  Copyright © 2017年 zquan. All rights reserved.
//

#import "WeiboLoginPlugin.h"
#import "JZNetTool.h"

@implementation WeiboLoginPlugin

-(void)initMessageJson:(NSDictionary *)message
{
    [super initMessageJson:message];
    
    NSString *clientId = message[@"clientId"];
    if(IS_DICTIONARY_CLASS(message[@"param"])){
        NSDictionary *param = message[@"param"];
        NSString *url = [APPURL stringByAppendingString:@"/h5/oauth/weibo"];
        [JZNetTool PostDataWithUrl:url param:param Success:^(id response) {
            NSLog(@"%@",response);
            if([response[@"success"] boolValue]==YES){
                NSString *dictStr = [Helper covertStringWithJson:response];
                NSString *jsStr = [NSString stringWithFormat:@"\"%@\",%@",clientId,dictStr];
                [self.wkweb evaluateJavaScript:jsStr completionHandler:^(id _Nullable response, NSError * _Nullable error) {
                    NSLog(@"WeiboLoginPlugin回调————%@————error：%@",response,error);
                }];
            }
        } NetFailure:^(id error) {
            NSDictionary *dict = [NSDictionary dictionary];
            NSString *dictStr = [Helper covertStringWithJson:dict];
            NSString *jsStr = [NSString stringWithFormat:@"\"%@\",%@",clientId,dictStr];
            [self.wkweb evaluateJavaScript:jsStr completionHandler:^(id _Nullable response, NSError * _Nullable error) {
                NSLog(@"WeiboLoginPlugin回调————%@————error：%@",response,error);
            }];
        }];
    }
}

@end

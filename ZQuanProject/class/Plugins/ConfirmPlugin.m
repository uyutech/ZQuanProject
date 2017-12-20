//
//  ConfirmPlugin.m
//  ZQuanProject
//
//  Created by 王园园 on 2017/12/18.
//  Copyright © 2017年 zquan. All rights reserved.
//

#import "ConfirmPlugin.h"

@implementation ConfirmPlugin

-(void)initMessageJson:(NSDictionary *)message
{
    [super initMessageJson:message];
    
    if([message[@"param"] isKindOfClass:[NSDictionary class]]){
        
        NSDictionary *param = message[@"param"];
        
        NSString *clientId = message[@"clientId"];
        
        NSString *title = param[@"title"];
        NSString *msg = param[@"message"];
        if([Helper isBlankString:title]){
            title = nil;
        }
        
        UIAlertController *alert = [UIAlertController alertControllerWithTitle:title message:msg preferredStyle:UIAlertControllerStyleAlert];
        [alert addAction:[UIAlertAction actionWithTitle:@"取消" style:UIAlertActionStyleDefault handler:^(UIAlertAction * _Nonnull action) {
            [self jsHandlerClick:false ClientId:clientId];
        }]];
        
        [alert addAction:[UIAlertAction actionWithTitle:@"确定" style:UIAlertActionStyleDefault handler:^(UIAlertAction * _Nonnull action) {
            [self jsHandlerClick:true ClientId:clientId];
        }]];
    }
}


-(void)jsHandlerClick:(BOOL)sure ClientId:(NSString *)clientId
{
    NSString *jsStr = [NSString stringWithFormat:@"\"%@\",\"%@\"",clientId,@(sure)];
    
    [self.wkweb evaluateJavaScript:jsStr completionHandler:^(id _Nullable response, NSError * _Nullable error) {
        NSLog(@"PromptPlugin回调————%@————error：%@",response,error);
    }];
}
@end

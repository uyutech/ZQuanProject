//
//  LoginOutPlugin.m
//  ZQuanProject
//
//  Created by 王园园 on 2017/12/18.
//  Copyright © 2017年 zquan. All rights reserved.
//

#import "LoginOutPlugin.h"
#import "WeiboSDK.h"
#import "CookieManager.h"

@interface LoginOutPlugin()<WBHttpRequestDelegate>
@property(nonatomic,strong)NSString *clientId;
@end

@implementation LoginOutPlugin

-(void)initMessageJson:(NSDictionary *)message
{
    [super initMessageJson:message];
    
    _clientId = message[@"clientId"];
    NSString *token = [[[NSUserDefaults standardUserDefaults] objectForKey:K_sinaWBLoginData] objectForKey:@"token"];
     [WeiboSDK logOutWithToken:token delegate:self withTag:nil];
}

- (void)request:(WBHttpRequest *)request didFinishLoadingWithResult:(NSString *)result
{
    NSLog(@"登出成功：%@",result);
    [CookieManager removeCookieOfSession];
    
    NSString *jsStr = [NSString stringWithFormat:@"\"%@\"",_clientId];
    
    [self.wkweb evaluateJavaScript:jsStr completionHandler:^(id _Nullable response, NSError * _Nullable error) {
        NSLog(@"LoginOutPlugin回调————%@————error：%@",response,error);
    }];
}


- (void)request:(WBHttpRequest *)request didFailWithError:(NSError *)error;
{
    NSLog(@"登出异常：%@",error);
}

@end

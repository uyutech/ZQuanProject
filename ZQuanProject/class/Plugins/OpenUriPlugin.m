//
//  OpenUriPlugin.m
//  ZQuanProject
//
//  Created by 王园园 on 2017/12/18.
//  Copyright © 2017年 zquan. All rights reserved.
//

#import "OpenUriPlugin.h"

@implementation OpenUriPlugin

-(void)initMessageJson:(NSDictionary *)message
{
    [super initMessageJson:message];
    
    if(!IsEmptyStr(message[@"param"])){
        NSString *openUrl = message[@"param"];
        [[UIApplication sharedApplication] openURL:[NSURL URLWithString:openUrl]];
    }
    
}

@end

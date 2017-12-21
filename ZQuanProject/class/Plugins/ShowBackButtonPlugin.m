//
//  ShowBackButtonPlugin.m
//  ZQuanProject
//
//  Created by 王园园 on 2017/12/18.
//  Copyright © 2017年 zquan. All rights reserved.
//

#import "ShowBackButtonPlugin.h"

@implementation ShowBackButtonPlugin

-(void)initMessageJson:(NSDictionary *)message
{
    [super initMessageJson:message];
    
    self.webVC.showBackButton = YES;
}

@end

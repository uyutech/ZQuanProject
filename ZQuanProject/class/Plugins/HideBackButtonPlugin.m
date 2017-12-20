//
//  HideBackButtonPlugin.m
//  ZQuanProject
//
//  Created by 王园园 on 2017/12/18.
//  Copyright © 2017年 zquan. All rights reserved.
//

#import "HideBackButtonPlugin.h"

@implementation HideBackButtonPlugin

-(void)initMessageJson:(NSDictionary *)message
{
    self.webVC.showBackButton = NO;
}

@end

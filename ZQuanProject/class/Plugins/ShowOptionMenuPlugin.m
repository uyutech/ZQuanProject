//
//  ShowOptionMenuPlugin.m
//  ZQuanProject
//
//  Created by 王园园 on 2017/12/18.
//  Copyright © 2017年 zquan. All rights reserved.
//

#import "ShowOptionMenuPlugin.h"

@implementation ShowOptionMenuPlugin

-(void)initMessageJson:(NSDictionary *)message
{
    [super initMessageJson:message];
    
    self.webVC.showOptionMenu = YES;
}


@end
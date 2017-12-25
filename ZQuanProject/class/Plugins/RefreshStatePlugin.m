//
//  RefreshStatePlugin.m
//  ZQuanProject
//
//  Created by 王园园 on 2017/12/18.
//  Copyright © 2017年 zquan. All rights reserved.
//

#import "RefreshStatePlugin.h"

@implementation RefreshStatePlugin

-(void)initMessageJson:(NSDictionary *)message
{
    [super initMessageJson:message];
    
    BOOL state = [message[@"param"] boolValue];
        
    self.webVC.refreshState = state;
}

@end

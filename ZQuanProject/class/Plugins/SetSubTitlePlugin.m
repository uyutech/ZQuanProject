//
//  SetSubTitlePlugin.m
//  ZQuanProject
//
//  Created by 王园园 on 2017/12/18.
//  Copyright © 2017年 zquan. All rights reserved.
//

#import "SetSubTitlePlugin.h"

@implementation SetSubTitlePlugin

-(void)initMessageJson:(NSDictionary *)message
{
    [super initMessageJson:message];
    
    if(!IsEmptyStr(message[@"param"])){
        self.webVC.subTitle = message[@"param"];
    }else{
        self.webVC.subTitle = @"";
    }
}

@end

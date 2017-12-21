//
//  SetTitleBgColorPlugin.m
//  ZQuanProject
//
//  Created by 王园园 on 2017/12/18.
//  Copyright © 2017年 zquan. All rights reserved.
//

#import "SetTitleBgColorPlugin.h"

@implementation SetTitleBgColorPlugin

-(void)initMessageJson:(NSDictionary *)message
{
    [super initMessageJson:message];
    
    if(IS_DICTIONARY_CLASS(message)){
        if(!IsEmptyStr(message[@"param"])){
            self.webVC.NavBarColor = message[@"param"];
        }else{
            self.webVC.NavBarColor = @"";
        }
    }
}

@end

//
//  SetTitlePlugin.m
//  ZQuanProject
//
//  Created by 王园园 on 2017/12/18.
//  Copyright © 2017年 zquan. All rights reserved.
//

#import "SetTitlePlugin.h"

@implementation SetTitlePlugin

-(void)initMessageJson:(NSDictionary *)message
{
    if(IS_DICTIONARY_CLASS(message)){
        if(!IsEmptyStr(message[@"param"])){
            self.webVC.NavTitle = message[@"param"];
        }else{
            self.webVC.NavTitle = @"";
        }
    }
}
@end

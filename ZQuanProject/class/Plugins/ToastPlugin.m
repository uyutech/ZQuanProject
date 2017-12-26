//
//  ToastPlugin.m
//  ZQuanProject
//
//  Created by 王园园 on 2017/12/18.
//  Copyright © 2017年 zquan. All rights reserved.
//

#import "ToastPlugin.h"

@implementation ToastPlugin

-(void)initMessageJson:(NSDictionary *)message
{
    [super initMessageJson:message];
    
    if(!IsEmptyStr(message[@"param"])){
        
        [HDHud showMessageInView:[UIApplication sharedApplication].keyWindow title:message[@"param"]];
    }
    
}

@end

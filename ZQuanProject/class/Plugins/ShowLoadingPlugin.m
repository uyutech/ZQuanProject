//
//  ShowLoadingPlugin.m
//  ZQuanProject
//
//  Created by 王园园 on 2017/12/18.
//  Copyright © 2017年 zquan. All rights reserved.
//

#import "ShowLoadingPlugin.h"

@implementation ShowLoadingPlugin

-(void)initMessageJson:(NSDictionary *)message
{
    [super initMessageJson:message];
    
    if(![Helper isBlankString:message[@"param"]]){
        
        [HDHud showHUDInView:[UIApplication sharedApplication].keyWindow title:message[@"param"]];
    }else{
        [HDHud showHUDInView:[UIApplication sharedApplication].keyWindow title:nil];
    }
    
}
@end

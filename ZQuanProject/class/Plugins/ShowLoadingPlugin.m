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
    
    if(IS_DICTIONARY_CLASS(message[@"param"])){
        NSDictionary *param = message[@"param"];
        //Boolean cancelable = [param[@"cancelable"] boolValue];
        if(!IsEmptyStr(param[@"message"]))
        [HDHud showHUDInView:[UIApplication sharedApplication].keyWindow title:param[@"message"]];
    }else{
        [HDHud showHUDInView:[UIApplication sharedApplication].keyWindow title:nil];
    }
    
}
@end

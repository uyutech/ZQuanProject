//
//  RefreshPlugin.m
//  ZQuanProject
//
//  Created by 王园园 on 2017/12/18.
//  Copyright © 2017年 zquan. All rights reserved.
//

#import "RefreshPlugin.h"

@implementation RefreshPlugin

-(void)initMessageJson:(NSDictionary *)message
{
    [super initMessageJson:message];
    
    if(IS_DICTIONARY_CLASS(message[@"param"])){
        
        NSDictionary *param = message[@"param"];
        
        BOOL prevent = [param[@"prevent"] boolValue];
        
        if(prevent){
            self.webVC.isdoFresh = NO;
        }else{
            self.webVC.isdoFresh = YES;
        }
    }
}

@end

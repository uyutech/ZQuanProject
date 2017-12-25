//
//  BackPlugin.m
//  ZQuanProject
//
//  Created by 王园园 on 2017/12/17.
//  Copyright © 2017年 zquan. All rights reserved.
//

#import "BackPlugin.h"

@implementation BackPlugin


-(void)initMessageJson:(NSDictionary *)message
{
    [super initMessageJson:message];
    
    if(IS_DICTIONARY_CLASS(message[@"param"])){
        
        NSDictionary *param = message[@"param"];
        BOOL prevent = [param[@"prevent"] boolValue];
        
        if(!prevent){
            if([self.web canGoBack]){
                [self.web goBack];
            }else{
                [self.webVC.navigationController popViewControllerAnimated:YES];
            }
        }
    }
}

@end

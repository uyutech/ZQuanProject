//
//  PopWindowPlugin.m
//  ZQuanProject
//
//  Created by 王园园 on 2017/12/18.
//  Copyright © 2017年 zquan. All rights reserved.
//

#import "PopWindowPlugin.h"

@implementation PopWindowPlugin

-(void)initMessageJson:(NSDictionary *)message
{
    [super initMessageJson:message];
    
    //NSString *clientId = message[@"clientId"];
    
    if(!IsEmptyStr(message[@"param"])){
        
        NSString *param = message[@"param"];
        
        [self.webVC emitWithEvenName:POP_WINDOW Param:param];
    }
    [self.webVC.navigationController popViewControllerAnimated:YES];
    
}

@end

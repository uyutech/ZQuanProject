//
//  AlertPlugin.m
//  ZQuanProject
//
//  Created by 王园园 on 2017/12/18.
//  Copyright © 2017年 zquan. All rights reserved.
//

#import "AlertPlugin.h"

@implementation AlertPlugin



-(void)initMessageJson:(NSDictionary *)message
{
    [super initMessageJson:message];
    
    if(IS_DICTIONARY_CLASS(message[@"param"])){
        
        NSDictionary *param = message[@"param"];
        NSString *title = param[@"title"];
        NSString *message = param[@"message"];
        if(IsEmptyStr(title)){
            title = nil;
        }
        UIAlertController *alert = [UIAlertController alertControllerWithTitle:title message:message preferredStyle:UIAlertControllerStyleAlert];
        [alert addAction:[UIAlertAction actionWithTitle:@"确定" style:UIAlertActionStyleDefault handler:^(UIAlertAction * _Nonnull action) {
            
        }]];
        [self.webVC presentViewController:alert animated:YES completion:NULL];
    }
}


@end

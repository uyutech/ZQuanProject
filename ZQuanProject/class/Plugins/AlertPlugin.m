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
    
    if(![Helper isBlankString:message[@"param"]]){
        
        NSString *msg = message[@"param"];
        
        UIAlertController *alert = [UIAlertController alertControllerWithTitle:nil message:msg preferredStyle:UIAlertControllerStyleAlert];
        [alert addAction:[UIAlertAction actionWithTitle:@"确定" style:UIAlertActionStyleDefault handler:^(UIAlertAction * _Nonnull action) {
            
        }]];
        
        [self.webVC presentViewController:alert animated:YES completion:NULL];
    }
}


@end

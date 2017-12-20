//
//  H5EventDispatcher.m
//  ZQuanProject
//
//  Created by 王园园 on 2017/12/18.
//  Copyright © 2017年 zquan. All rights reserved.
//

#import "H5EventDispatcher.h"
#import "H5Plugin.h"
#import "Helper.h"
#import "GetPreferencePlugin.h"

@implementation H5EventDispatcher

+(void)initLogMessage:(NSString *)messageStr;
{
    NSData *jsonData = [messageStr dataUsingEncoding:NSUTF8StringEncoding];
    NSError *err;
    NSDictionary *params = [NSJSONSerialization JSONObjectWithData:jsonData options:NSJSONReadingMutableContainers error:&err];
    
    
    if(![Helper isBlankString:params[@"fn"]]){
        NSString *className = [params[@"fn"] stringByAppendingString:@"Plugin"];
        NSString *fistChar = [[className substringToIndex:1] capitalizedString];
        className = [NSString stringWithFormat:@"%@%@",fistChar,[className substringFromIndex:1]];
        
        dispatch_async(dispatch_get_main_queue(), ^{
            Class pluginClass = NSClassFromString(className);
            id classInstance = [[pluginClass alloc] init];
            [classInstance performSelector:@selector(initMessageJson:) withObject:params];
        });
    }
    
}
@end

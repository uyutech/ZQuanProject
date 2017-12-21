//
//  CookieManager.h
//  ZQuanProject
//
//  Created by 王园园 on 2017/12/21.
//  Copyright © 2017年 zquan. All rights reserved.
//

#import <Foundation/Foundation.h>

@interface CookieManager : NSObject

+(void)removeCookieOfSession; //登出删除session

+(void)removeCookieForKey:(NSString *)key;

+(void)setCookieWithValue:(NSString *)value Key:(NSString *)key;
@end

//
//  ZQWebSingleton.m
//  ZQuanProject
//
//  Created by 王园园 on 2017/12/21.
//  Copyright © 2017年 zquan. All rights reserved.
//

#import "ZQWebVCSingleton.h"

@implementation ZQWebVCSingleton

static ZQWebVCSingleton *webVC;

+(instancetype)shareInstance
{
    static dispatch_once_t onceToken;
    dispatch_once(&onceToken, ^{
        webVC = [[ZQWebVCSingleton alloc] init];
        
    });
    return webVC;
}

@end

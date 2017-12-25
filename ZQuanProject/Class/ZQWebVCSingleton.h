//
//  ZQWebSingleton.h
//  ZQuanProject
//
//  Created by 王园园 on 2017/12/21.
//  Copyright © 2017年 zquan. All rights reserved.
//

#import <Foundation/Foundation.h>
#import "ZQUIWebViewController.h"

@interface ZQWebVCSingleton : NSObject

+(instancetype)shareInstance;

@property(nonatomic,strong)ZQUIWebViewController *webVC;

@end

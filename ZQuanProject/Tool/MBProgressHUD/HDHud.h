//
//  HDHud.h
//  ZQuanProject
//
//  Created by 王园园 on 2017/12/18.
//  Copyright © 2017年 zquan. All rights reserved.
//

#import <Foundation/Foundation.h>
#import "MBProgressHUD.h"
@interface HDHud : NSObject

//显示HUD提示（需要手动关闭）
+(MBProgressHUD *)showHUDInView:(UIView *)view title:(NSString *)title;

//关闭HUD提示
+(void)hideHUDInView:(UIView *)view;

//显示信息
+(MBProgressHUD *)showMessageInView:(UIView *)view title:(NSString *)title;

//显示下载进度
+(MBProgressHUD *)showprogressInView:(UIView *)view title:(NSString *)title;

//显示信息和图片
+(MBProgressHUD *)showMessageInView:(UIView *)view title:(NSString *)title Image:(UIImage *)img;

@end

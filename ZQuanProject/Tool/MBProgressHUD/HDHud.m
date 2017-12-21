//
//  HDHud.m
//  ZQuanProject
//
//  Created by 王园园 on 2017/12/18.
//  Copyright © 2017年 zquan. All rights reserved.
//

#import "HDHud.h"

@implementation HDHud

+(MBProgressHUD *)showHUDInView:(UIView *)view title:(NSString *)title{
    MBProgressHUD *HUDInView = [MBProgressHUD showHUDAddedTo:view animated:YES];
    if(title!=nil||title.length>0){
        HUDInView.detailsLabel.text = title;
    }
    return HUDInView;
}


+(void)hideHUDInView:(UIView *)view{
    [MBProgressHUD hideHUDForView:view animated:YES];
}


+(MBProgressHUD *)showMessageInView:(UIView *)view title:(NSString *)title{

    [MBProgressHUD hideHUDForView:view animated:YES];
    MBProgressHUD *HUDInView = [MBProgressHUD showHUDAddedTo:view animated:NO];
    HUDInView.removeFromSuperViewOnHide = YES;
    HUDInView.mode = MBProgressHUDModeText;
    HUDInView.label.text = title;
    [HUDInView hideAnimated:YES afterDelay:1.5];
    return HUDInView;
}


+(MBProgressHUD *)showMessageInView:(UIView *)view title:(NSString *)title Image:(UIImage *)img;
{
    if ([view respondsToSelector:@selector(setScrollEnabled:)]) {
        [(UIScrollView*)view setScrollEnabled:YES];
    }
    [MBProgressHUD hideHUDForView:view animated:YES];;
    MBProgressHUD *HUDInView = [MBProgressHUD showHUDAddedTo:view animated:NO];
    HUDInView.removeFromSuperViewOnHide = YES;
    HUDInView.mode = MBProgressHUDModeCustomView;
    HUDInView.detailsLabel.text = title;
    HUDInView.customView = [[UIImageView alloc] initWithImage:img];
    [HUDInView hideAnimated:YES afterDelay:1.5];
    return HUDInView;
}


//显示下载进度
+(MBProgressHUD *)showprogressInView:(UIView *)view title:(NSString *)title;
{
    MBProgressHUD *hud = [MBProgressHUD showHUDAddedTo:view animated:YES];
    // Set the bar determinate mode to show task progress.
    hud.mode = MBProgressHUDModeDeterminateHorizontalBar;
    hud.label.text =title;
    
    [hud.button setTitle:@"取消" forState:UIControlStateNormal];
    [hud.button addTarget:self action:@selector(cancelWork) forControlEvents:UIControlEventTouchUpInside];
    
    dispatch_async(dispatch_get_global_queue(QOS_CLASS_USER_INITIATED, 0), ^{

        float progress = 0.0f;
        while (progress < 1.0f) {
            progress += 0.01f;
            dispatch_async(dispatch_get_main_queue(), ^{
                // Instead we could have also passed a reference to the HUD
                // to the HUD to myProgressTask as a method parameter.
                [MBProgressHUD HUDForView:view].progress = progress;
            });
            usleep(50000);
        }
        dispatch_async(dispatch_get_main_queue(), ^{
            [hud hideAnimated:YES];
        });
    });
    return hud;
}

-(void)cancelWork
{
    //self.canceled = YES;
}
@end

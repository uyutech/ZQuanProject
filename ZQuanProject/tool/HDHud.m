//
//  HDHud.m
//  CreditGroup
//
//  Created by ang on 14/8/27.
//  Copyright (c) 2014年 JPlay. All rights reserved.
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


@end

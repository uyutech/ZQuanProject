//
//  WPhotoViewController.h
//  ZQuanProject
//
//  Created by 王园园 on 2017/12/18.
//  Copyright © 2017年 zquan. All rights reserved.
//

#import <UIKit/UIKit.h>
#import "myPhotoCell.h"
#import "UIImage+fixOrientation.h"
#import "WPMacros.h"
#import "WPFunctionView.h"
#import "NavView.h"

@interface WPhotoViewController : UIViewController

@property (assign, nonatomic) NSInteger selectPhotoOfMax;/**< 选择照片的最多张数 */

/** 回调方法 */
@property (nonatomic, copy) void(^selectPhotosBack)(NSMutableArray *photosArr);

@end

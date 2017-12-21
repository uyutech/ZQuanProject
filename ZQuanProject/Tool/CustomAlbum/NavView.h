//
//  NavView.h
//  ZQuanProject
//
//  Created by 王园园 on 2017/12/18.
//  Copyright © 2017年 zquan. All rights reserved.
//

#import <UIKit/UIKit.h>
#import "WPMacros.h"


@interface NavView : UIView

@property (nonatomic, copy) void(^navViewBack)();
@property (nonatomic, copy) void(^quitChooseBack)();

// 创建nav
-(void)createNavViewTitle:(NSString *)title;

@end

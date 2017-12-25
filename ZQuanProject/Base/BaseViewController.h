//
//  BaseViewController.h
//  ZQuanProject
//
//  Created by wyy on 2017/12/12.
//  Copyright © 2017年 zquan. All rights reserved.
//

#import <UIKit/UIKit.h>

@interface BaseViewController : UIViewController


@property(nonatomic,strong)UIButton* leftbarButton;

@property(nonatomic,strong)UIButton* rightbarButton ;

@property (nonatomic, assign) BOOL hideNavBar;

@property(nonatomic,strong)NSString *NavBarColor;

@property(nonatomic,strong)NSString *navTitle;

@property(nonatomic,strong)NSString *subTitle;

@property (nonatomic, assign) BOOL showBackButton;

@property (nonatomic, assign) BOOL showOptionMenu;

@property(nonatomic,strong)NSString *optionMenuTitle;
@end

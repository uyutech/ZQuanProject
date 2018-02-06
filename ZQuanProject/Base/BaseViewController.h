//
//  BaseViewController.h
//  ZQuanProject
//
//  Created by wyy on 2017/12/12.
//  Copyright © 2017年 zquan. All rights reserved.
//

#import <UIKit/UIKit.h>

@interface BaseViewController : UIViewController

@property(nonatomic,strong)UIView* navBarview;

@property(nonatomic,assign) BOOL transparentTitle;

@property (nonatomic, assign) BOOL hideBackButton;

@property(nonatomic,strong)NSString *titleBgColor;

@property(nonatomic,strong)NSString *viewBackgroundColor;

@property(nonatomic,strong)NSString *navTitle; //title字段不可用

@property(nonatomic,strong)NSString *subTitle;

@property(nonatomic,strong)NSString *optionMenu;

@property (nonatomic, assign) BOOL readTitle;
@property (nonatomic, assign) BOOL showOptionMenu;

//
@property(nonatomic,copy)NSString *titleColor;

@property(nonatomic,copy)NSString *backIcon;

@property(nonatomic,copy)NSString *optionMenuColor;

@property(nonatomic,copy)NSString *optionMenuIcon1;

@property(nonatomic,copy)NSString *optionMenuIcon2;

/**
 映射
 */
-(void)initLayoutWithParam:(NSDictionary *)param;

/**
 setOptinMenu
 */
-(void)initOptinMenuLayoutWithParam:(NSDictionary *)param;
@end

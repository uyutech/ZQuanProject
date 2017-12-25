//
//  BaseViewController.h
//  ZQuanProject
//
//  Created by wyy on 2017/12/12.
//  Copyright © 2017年 zquan. All rights reserved.
//

#import <UIKit/UIKit.h>

@interface BaseViewController : UIViewController


@property(nonatomic,assign) BOOL transparentTitle;

@property (nonatomic, assign) BOOL hideBackButton;

@property (nonatomic, assign) BOOL showOptionMenu;

@property(nonatomic,strong)NSString *titleBgColor;

@property(nonatomic,strong)NSString *navTitle; //title字段不可用

@property(nonatomic,strong)NSString *subTitle;

@property(nonatomic,strong)NSString *optionMenu;

@property (nonatomic, assign) BOOL readTitle;

-(void)initLayoutWithParam:(NSDictionary *)param;
@end

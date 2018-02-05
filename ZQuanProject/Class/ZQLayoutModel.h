//
//  ZQLayoutModel.h
//  ZQuanProject
//
//  Created by 王园园 on 2018/2/1.
//  Copyright © 2018年 zquan. All rights reserved.
//

#import <Foundation/Foundation.h>

@interface ZQLayoutModel : NSObject

@property(nonatomic,assign) BOOL transparentTitle;

@property(nonatomic,assign) BOOL hideBackButton;

@property(nonatomic,assign) BOOL showOptionMenu;

@property(nonatomic,assign) BOOL readTitle;

@property(nonatomic,copy)NSString *title;

@property(nonatomic,copy)NSString *subTitle;

@property(nonatomic,copy)NSString *optionMenu;

@property(nonatomic,copy)NSString *titleBgColor;

@property(nonatomic,copy)NSString *backgroundColor;

//
@property(nonatomic,copy)NSString *titleColor;

@property(nonatomic,copy)NSString *backIcon;

@property(nonatomic,copy)NSString *optionMenuColor;

@property(nonatomic,copy)NSString *optionMenuIcon1;

@property(nonatomic,copy)NSString *optionMenuIcon2;
@end

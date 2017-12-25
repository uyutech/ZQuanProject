//
//  ZQLayoutModel.h
//  ZQuanProject
//
//  Created by 王园园 on 2017/12/25.
//  Copyright © 2017年 zquan. All rights reserved.
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
@end

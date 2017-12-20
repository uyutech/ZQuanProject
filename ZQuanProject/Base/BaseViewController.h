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

@property(nonatomic,strong)UILabel* titleLabel;

@property(nonatomic,strong)UILabel* subTitleLabel;

@property(nonatomic,strong)UIButton* leftbarButton;

@property(nonatomic,strong)UIButton* rightbarButton ;

@property(nonatomic,strong)UIImageView* backImageView;

-(void)setNavColor:(NSString *)colorStr;

-(void)setNavBarTitle:(NSString *)navTitleStr;

-(void)setNavSubTile:(NSString *)subTileStr;
@end

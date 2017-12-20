//
//  BaseViewController.m
//  ZQuanProject
//
//  Created by wyy on 2017/12/12.
//  Copyright © 2017年 zquan. All rights reserved.
//

#import "BaseViewController.h"

@interface BaseViewController()

@end

@implementation BaseViewController

-(instancetype)initWithNibName:(NSString *)nibNameOrNil bundle:(NSBundle *)nibBundleOrNil
{
    if(self = [super initWithNibName:nibNameOrNil bundle:nibBundleOrNil]) {
        
    }
    return self;
}


-(void)viewWillAppear:(BOOL)animated
{
    [super viewWillAppear:YES];
    //self.navigationController.interactivePopGestureRecognizer.delegate = (id)self;
}

-(void)viewWillDisappear:(BOOL)animated
{
    [super viewWillDisappear:animated];

}

-(void)viewDidAppear:(BOOL)animated
{
    [super viewDidAppear:animated];
}

-(void)viewDidLoad
{
    [super viewDidLoad];
    
    [[UIApplication sharedApplication] setStatusBarStyle:UIStatusBarStyleLightContent animated:YES];
    
    self.automaticallyAdjustsScrollViewInsets = NO;
    self.extendedLayoutIncludesOpaqueBars = YES;
    
    
    self.navigationController.navigationBarHidden = YES;
    self.view.backgroundColor = [UIColor whiteColor];
    

    
    self.navBarview.frame = CGRectMake(0, 0, kMainBoundsWidth,64);
    [self.leftbarButton setFrame:CGRectMake(8,20, 64, 44)];
    [self.rightbarButton setFrame:CGRectMake(kMainBoundsWidth - 70, 20, 64, 44)];
    
    [self.view addSubview:self.navBarview];
    [_navBarview addSubview:self.rightbarButton];
    [_navBarview addSubview:self.leftbarButton];
    [_navBarview addSubview:self.titleLabel];
    [_navBarview addSubview:self.subTitleLabel];
    [_navBarview bringSubviewToFront:self.view];
}


-(UIView *)navBarview
{
    if(!_navBarview){
        _navBarview = [[UIView alloc]initWithFrame:CGRectMake(0, [UIApplication sharedApplication].statusBarFrame.size.height, kMainBoundsWidth,self.navigationController.navigationBar.frame.size.height)];
        _navBarview.backgroundColor =kDefaultNavBackColorTwo;
    }
    return _navBarview;
}


-(UIButton *)leftbarButton
{
    if(!_leftbarButton){
        _leftbarButton = [UIButton buttonWithType:UIButtonTypeCustom];
        [_leftbarButton setImage:[UIImage imageNamed:@"left_arrow"] forState:UIControlStateNormal];
        _leftbarButton.imageEdgeInsets = UIEdgeInsetsMake(0, 0, 0, 30);
        _leftbarButton.contentHorizontalAlignment = UIControlContentHorizontalAlignmentCenter;
        [self.leftbarButton addTarget:self action:@selector(backEvent) forControlEvents:UIControlEventTouchUpInside];
    }
    return _leftbarButton;
}

-(UIButton *)rightbarButton
{
    if(!_rightbarButton)
    {
        _rightbarButton = [UIButton buttonWithType:UIButtonTypeCustom];
        _rightbarButton.titleLabel.font = [UIFont fontWithName:@"Helvetica" size:16];
        [_rightbarButton setTitleColor:[UIColor whiteColor] forState:UIControlStateNormal];
        _rightbarButton.contentHorizontalAlignment = UIControlContentHorizontalAlignmentCenter;
        [_rightbarButton setTitleEdgeInsets:UIEdgeInsetsMake(0, 10, 0, 0)];
        [self.rightbarButton addTarget:self action:@selector(OptionMenuEvent) forControlEvents:UIControlEventTouchUpInside];
    }
    return _rightbarButton;
}

-(UILabel *)titleLabel
{
    if(!_titleLabel){
        _titleLabel = [[UILabel alloc]initWithFrame:CGRectMake(70, 20,kMainBoundsWidth-140, 44)];
        _titleLabel.textColor = [UIColor whiteColor];
        _titleLabel.textAlignment = NSTextAlignmentCenter;
        _titleLabel.font = [UIFont fontWithName:@"Helvetica-Bold" size:18];
        _titleLabel.adjustsFontSizeToFitWidth =YES;
        _titleLabel.minimumScaleFactor = 0.5;
    }
    return _titleLabel;
}

-(UILabel *)subTitleLabel
{
    if(!_subTitleLabel){
        _subTitleLabel = [[UILabel alloc]initWithFrame:CGRectMake(70, 42,kMainBoundsWidth-140, 22)];
        _subTitleLabel.textColor = [UIColor whiteColor];
        _subTitleLabel.textAlignment = NSTextAlignmentCenter;
        _subTitleLabel.font = [UIFont fontWithName:@"Helvetica" size:12];
        _subTitleLabel.adjustsFontSizeToFitWidth =YES;
        _subTitleLabel.minimumScaleFactor = 0.5;
    }
    return _subTitleLabel;
}


-(void)setNavBarTitle:(NSString *)navTitleStr;
{
    self.titleLabel.text = navTitleStr;
    if(IsEmptyStr(self.subTitleLabel.text))
    {
        self.titleLabel.top = 20;
        self.titleLabel.height = 44;
    }
}


-(void)setNavSubTile:(NSString *)subTileStr;
{
    self.subTitleLabel.text = subTileStr;
    
    if(IsEmptyStr(subTileStr)){
        self.titleLabel.top = 20;
        self.titleLabel.height = 44;
    }else{
        self.titleLabel.top = 20;
        self.titleLabel.height = 28;
    }
}




-(void)backEvent{
    
}
-(void)OptionMenuEvent
{
    
}
-(void)setNavColor:(NSString *)colorStr
{
    if([Helper reverseColorString:colorStr]!=0){
        UIColor *color = HexRGBAlpha([Helper reverseColorString:colorStr],1);
        self.navBarview.backgroundColor = color;
    }
}

- (void)didReceiveMemoryWarning {
    [super didReceiveMemoryWarning];
    // Dispose of any resources that can be recreated.
}


@end

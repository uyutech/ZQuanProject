//
//  BaseViewController.m
//  ZQuanProject
//
//  Created by wyy on 2017/12/12.
//  Copyright © 2017年 zquan. All rights reserved.
//

#import "BaseViewController.h"
#import <objc/runtime.h>
@interface BaseViewController()
@property(nonatomic,strong)UIView* navBarview;

@property(nonatomic,strong)UILabel* titleLabel;

@property(nonatomic,strong)UILabel* subTitleLabel;

@property(nonatomic,strong)UIButton* leftbarButton;

@property(nonatomic,strong)UIButton* rightbarButton;

@property(nonatomic,strong) CAGradientLayer *gradientLayer;
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

#pragma mark - LayOut
-(UIView *)navBarview
{
    if(!_navBarview){
        _navBarview = [[UIView alloc]initWithFrame:CGRectMake(0, [UIApplication sharedApplication].statusBarFrame.size.height, kMainBoundsWidth,self.navigationController.navigationBar.frame.size.height)];
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



-(void)initLayoutWithParam:(NSDictionary *)param
{
    if(IS_DICTIONARY_CLASS(param)){
        
        for(NSString *propertyKey in param.allKeys){
            
            if([propertyKey isEqualToString:@"title"]){ //title特殊处理
                [self setValue:param[@"title"] forKey:@"navTitle"];
            }else{
                [self setValue:param[propertyKey] forKey:propertyKey];
            }
        }
    }
}


#pragma mark - set

-(void)setTransparentTitle:(BOOL)transparentTitle
{
    _transparentTitle = transparentTitle;
    if(transparentTitle){
        if(_gradientLayer){
            [_gradientLayer removeFromSuperlayer];
        }
    }else{
        if(IsEmptyStr(_titleBgColor)){ //没设置颜色
            [self.navBarview.layer addSublayer:self.gradientLayer];
        }
    }
    self.navBarview.hidden = transparentTitle;
}


-(void)setHideBackButton:(BOOL)hideBackButton
{
    //设置是否隐藏返回按钮
    _hideBackButton = hideBackButton;
    self.leftbarButton.hidden = hideBackButton;
}


-(void)setShowOptionMenu:(BOOL)showOptionMenu
{
    _showOptionMenu = showOptionMenu;
    self.rightbarButton.hidden = !showOptionMenu;
}


-(void)setNavTitle:(NSString *)navTitle
{
    self.titleLabel.text = navTitle;
    if(IsEmptyStr(self.subTitleLabel.text))
    {
        self.titleLabel.top = 20;
        self.titleLabel.height = 44;
    }
}


-(void)setSubTitle:(NSString *)subTitle
{
    self.subTitleLabel.text = subTitle;
    
    if(IsEmptyStr(subTitle)){
        self.titleLabel.top = 20;
        self.titleLabel.height = 44;
    }else{
        self.titleLabel.top = 20;
        self.titleLabel.height = 28;
    }
}




-(void)setTitleBgColor:(NSString *)titleBgColor
{
    _titleBgColor = titleBgColor;
    if([Helper reverseColorString:titleBgColor]!=0){
        UIColor *color = HexRGBAlpha([Helper reverseColorString:titleBgColor],1);
        self.navBarview.backgroundColor = color;
        if(_gradientLayer){
            [_gradientLayer removeFromSuperlayer];
        }
    }
}


-(void)setOptionMenu:(NSString *)optionMenu
{
    if(!IsEmptyStr(optionMenu)){
        self.showOptionMenu = YES;
        [self.rightbarButton setTitle:optionMenu forState:UIControlStateNormal];
    }
}


-(void)backEvent
{}

-(void)OptionMenuEvent
{}


-(CAGradientLayer *)gradientLayer
{
    if(!_gradientLayer){
        _gradientLayer = [CAGradientLayer layer];
        _gradientLayer.frame = CGRectMake(0, 0, kMainBoundsWidth, 64);
        //设置颜色数组
        _gradientLayer.colors = @[(__bridge id)kDefaultNavBackColorOne.CGColor,
                                 (__bridge id)kDefaultNavBackColorTwo.CGColor];
        //设置颜色分割点（范围：0-1）
        _gradientLayer.locations = @[@(0.0f), @(1.0f)];
    }
    return _gradientLayer;
}


- (void)didReceiveMemoryWarning {
    [super didReceiveMemoryWarning];
    // Dispose of any resources that can be recreated.
}


@end

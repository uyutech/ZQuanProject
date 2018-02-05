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

@property(nonatomic,strong)UILabel* titleLabel;

@property(nonatomic,strong)UILabel* subTitleLabel;

@property(nonatomic,strong)UIButton* leftbarButton;

@property(nonatomic,strong)UIButton* rightbarButton;

@property(nonatomic,strong)UIButton* rightbarButton1;

@property(nonatomic,strong)UIButton* rightbarButton2;

@property(nonatomic,strong) UIView *line;

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
    [self.view bringSubviewToFront:self.navBarview];
    [self.view bringSubviewToFront:self.leftbarButton];
    [self.view bringSubviewToFront:self.rightbarButton];
    [self.view bringSubviewToFront:self.rightbarButton1];
    [self.view bringSubviewToFront:self.rightbarButton2];
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
    
    [[UIApplication sharedApplication] setStatusBarStyle:UIStatusBarStyleDefault animated:YES];
    
    self.automaticallyAdjustsScrollViewInsets = NO;
    self.extendedLayoutIncludesOpaqueBars = YES;
    
    
    self.navigationController.navigationBarHidden = YES;
    
    [self.view addSubview:self.navBarview];
    [self.view addSubview:self.rightbarButton];
    [self.view addSubview:self.rightbarButton1];
    [self.view addSubview:self.rightbarButton2];
    [self.view addSubview:self.leftbarButton];
    [_navBarview addSubview:self.titleLabel];
    [_navBarview addSubview:self.subTitleLabel];
    
    [self resetOptionMenueLayout];
}


/**
 映射
 */
-(void)initLayoutWithParam:(NSDictionary *)param
{
    if(IS_DICTIONARY_CLASS(param)){
        
        for(NSString *propertyKey in param.allKeys){
            if([propertyKey isEqualToString:@"title"]){ //title特殊处理
                
                [self setValue:param[@"title"] forKey:@"navTitle"];
            
            }else if([propertyKey isEqualToString:@"backgroundColor"]){
                
                [self setValue:param[@"backgroundColor"] forKey:@"viewBackgroundColor"];
            }else{
                [self setValue:param[propertyKey] forKey:propertyKey];
            }
        }
    }
}


/**
 setOptinMenu
 */
-(void)initOptinMenuLayoutWithParam:(NSDictionary *)param;
{
    if(!IsEmptyStr(param[@"text"])){
        self.optionMenu = param[@"text"];
    }
    if(!IsEmptyStr(param[@"textColor"])){
        self.optionMenuColor = param[@"textColor"];
    }
    if(!IsEmptyStr(param[@"img1"])){
        self.optionMenuIcon1 = param[@"img1"];
    }
    if(!IsEmptyStr(param[@"img2"])){
        self.optionMenuIcon2 = param[@"img2"];
    }
    [self resetOptionMenueLayout];
}


#pragma mark - LayOut
-(UIView *)navBarview
{
    if(!_navBarview){
        _navBarview = [[UIView alloc]initWithFrame:CGRectMake(0, 0, kMainBoundsWidth,64)];
        _navBarview.userInteractionEnabled = NO;
        
        _line = [[UIView alloc] initWithFrame:CGRectMake(0, 63.5, kMainBoundsWidth, 0.5)];
        _line.backgroundColor = HexRGBAlpha(0Xeeeeee,1);
        [_navBarview addSubview:_line];
    }
    return _navBarview;
}



-(UIButton *)leftbarButton
{
    if(!_leftbarButton){
        _leftbarButton = [UIButton buttonWithType:UIButtonTypeCustom];
        [_leftbarButton setFrame:CGRectMake(0,20, 64, 44)];
        NSString *backName =  _transparentTitle?@"back_transparent":@"back";
        [_leftbarButton setImage:[UIImage imageNamed:backName] forState:UIControlStateNormal];
        _leftbarButton.imageEdgeInsets = UIEdgeInsetsMake(0, 0, 0, 20);
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
        [_rightbarButton setTitleColor:HexRGBAlpha(0X636365, 1) forState:UIControlStateNormal];
        _rightbarButton.contentHorizontalAlignment = UIControlContentHorizontalAlignmentCenter;
        [self.rightbarButton addTarget:self action:@selector(OptionMenuEvent) forControlEvents:UIControlEventTouchUpInside];
    }
    return _rightbarButton;
}



-(UIButton *)rightbarButton1
{
    if(!_rightbarButton1)
    {
        _rightbarButton1 = [UIButton buttonWithType:UIButtonTypeCustom];
        [self.rightbarButton1 addTarget:self action:@selector(OptionMenuEvent1) forControlEvents:UIControlEventTouchUpInside];
    }
    return _rightbarButton1;
}


-(UIButton *)rightbarButton2
{
    if(!_rightbarButton2)
    {
        _rightbarButton2 = [UIButton buttonWithType:UIButtonTypeCustom];
        [self.rightbarButton2 addTarget:self action:@selector(OptionMenuEvent2) forControlEvents:UIControlEventTouchUpInside];
    }
    return _rightbarButton2;
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


#pragma mark - set

-(void)setTransparentTitle:(BOOL)transparentTitle
{
    _transparentTitle = transparentTitle;
    if(_transparentTitle){
        
        self.navBarview.backgroundColor = [UIColor clearColor];
        _line.hidden = YES;
        //default
        if(!_titleColor){
            self.titleColor = @"#FFFFFF";
        }
        if(!_backIcon){
            [_leftbarButton setImage:[UIImage imageNamed:@"back_transparent"] forState:UIControlStateNormal];
        }
    }else{
        _line.hidden = NO;
        if(!_titleBgColor){
            self.titleBgColor = @"#FFFFFF";
        }
        if(!_titleColor){
            self.titleColor = @"#636365";
        }
        if(!_backIcon){
            [_leftbarButton setImage:[UIImage imageNamed:@"back"] forState:UIControlStateNormal];
        }
    }
}


-(void)setHideBackButton:(BOOL)hideBackButton
{
    //设置是否隐藏返回按钮
    _hideBackButton = hideBackButton;
    self.leftbarButton.hidden = hideBackButton;
}



-(void)setNavTitle:(NSString *)navTitle
{
    _navTitle = navTitle;
    if(_transparentTitle){
        NSShadow *shadow = [[NSShadow alloc] init];
        shadow.shadowBlurRadius = 4;
        shadow.shadowColor = HexRGBAlpha(0X33000000, 1);
        shadow.shadowOffset = CGSizeMake(2,2);
        NSAttributedString *attributedText = [[NSAttributedString alloc] initWithString:_navTitle attributes:@{NSShadowAttributeName:shadow}];
        _titleLabel.text = nil;
        _titleLabel.attributedText = attributedText;
    }else{
        _titleLabel.text = navTitle;
    }
    
    if(IsEmptyStr(self.subTitleLabel.text))
    {
        self.titleLabel.top = 20;
        self.titleLabel.height = 44;
    }
}


-(void)setSubTitle:(NSString *)subTitle
{
    _subTitle = subTitle;
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
    }
}


-(void)setTitleColor:(NSString *)titleColor
{
    _titleColor = titleColor;
    if([Helper reverseColorString:titleColor]!=0){
        UIColor *color = HexRGBAlpha([Helper reverseColorString:titleColor],1);
        self.titleLabel.textColor = color;
    }
}


-(void)setViewBackgroundColor:(NSString *)viewBackgroundColor
{
    _viewBackgroundColor = viewBackgroundColor;
    if([Helper reverseColorString:viewBackgroundColor]!=0){
        UIColor *color = HexRGBAlpha([Helper reverseColorString:viewBackgroundColor],1);
        self.view.backgroundColor = color;
    }
}

-(void)setBackIcon:(NSString *)backIcon
{
    if(![Helper isBlankString:backIcon]){
        _backIcon = backIcon;
        self.hideBackButton = NO;
        UIImage *backImg = [Helper base64stringToImage:backIcon];
        UIImage *newImg = [Helper imageWithImage:backImg scaledToSize:CGSizeMake(32, 32)];
        [_leftbarButton setImage:newImg forState:UIControlStateNormal];
    }
}


/**
 optionMenu
 */
-(void)setOptionMenu:(NSString *)optionMenu
{
    _optionMenu = optionMenu;
    if(!IsEmptyStr(optionMenu)){
        [self.rightbarButton setTitle:optionMenu forState:UIControlStateNormal];
    }
}


-(void)setOptionMenuIcon1:(NSString *)optionMenuIcon1
{
    if(![Helper isBlankString:optionMenuIcon1]){
        _optionMenuIcon1 = optionMenuIcon1;
        UIImage *backImg = [Helper base64stringToImage:optionMenuIcon1];
        UIImage *newImg = [Helper imageWithImage:backImg scaledToSize:CGSizeMake(32, 32)];
        [self.rightbarButton1 setImage:newImg forState:UIControlStateNormal];
    }
}

-(void)setOptionMenuIcon2:(NSString *)optionMenuIcon2
{
    if(![Helper isBlankString:optionMenuIcon2]){
        _optionMenuIcon2 = optionMenuIcon2;
        UIImage *Img = [Helper base64stringToImage:optionMenuIcon2];
        UIImage *newImg = [Helper imageWithImage:Img scaledToSize:CGSizeMake(32, 32)];
        [self.rightbarButton2 setImage:newImg forState:UIControlStateNormal];
    }
}

-(void)setOptionMenuColor:(NSString *)optionMenuColor
{
    _optionMenuColor = optionMenuColor;
    if([Helper reverseColorString:optionMenuColor]!=0){
        UIColor *color = HexRGBAlpha([Helper reverseColorString:optionMenuColor],1);
        [self.rightbarButton setTitleColor:color forState:UIControlStateNormal];
    }
}




-(void)backEvent
{}

-(void)OptionMenuEvent
{}

-(void)OptionMenuEvent1
{}

-(void)OptionMenuEvent2
{}



//optionMenu position
-(void)resetOptionMenueLayout
{
    if(![Helper isBlankString:_optionMenu]){
        float s_width = [Helper widthForLabelWithString:_optionMenu withFontSize:16 withWidth:120 withHeight:30];
        s_width = (s_width<=32) ? 32 : s_width;
        s_width = (s_width>=120) ? 120 : s_width;
        _rightbarButton.frame = CGRectMake(kMainBoundsWidth-s_width-12, 20, s_width, 44);
    }else{
        _rightbarButton.frame = CGRectMake(kMainBoundsWidth-12, 20, 0, 44);
    }
    
    if(![Helper isBlankString:_optionMenuIcon1]){
        _rightbarButton1.frame = CGRectMake(_rightbarButton.left-32, 20, 32, 44);
    }else{
        _rightbarButton1.frame = CGRectMake(_rightbarButton.left, 20, 0, 44);
    }
    
    if(![Helper isBlankString:_optionMenuIcon2]){
        _rightbarButton2.frame = CGRectMake(_rightbarButton1.left-32, 20, 32, 44);
    }else{
        _rightbarButton2.frame = CGRectMake(_rightbarButton1.left, 20, 0, 44);
    }
}

- (void)didReceiveMemoryWarning {
    [super didReceiveMemoryWarning];
    // Dispose of any resources that can be recreated.
}


@end

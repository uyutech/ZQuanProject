//
//  myPhotoCell.h
//  ZQuanProject
//
//  Created by 王园园 on 2017/12/18.
//  Copyright © 2017年 zquan. All rights reserved.
//

#import <UIKit/UIKit.h>
#import "WPMacros.h"

@interface myPhotoCell : UICollectionViewCell

@property(nonatomic, strong)UIImageView *photoView;

@property(nonatomic, assign)BOOL chooseStatus;

@property (nonatomic, copy) NSString *representedAssetIdentifier;

@property (nonatomic, strong) UIProgressView *progressView;

@property (nonatomic, assign) CGFloat progressFloat;

@property (nonatomic, strong) UIImageView *signImage;

@end

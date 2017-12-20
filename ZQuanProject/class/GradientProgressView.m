//
//  ProgressGradientView.m
//  win7loading
//
//  Created by PowerAuras on 13-11-11.
//  Copyright (c) 2013年 PowerAuras. All rights reserved.
//

#import "GradientProgressView.h"

#define fsw self.frame.size.width
#define fsh self.frame.size.height
#define BarInset              0


static const int animationFramesPerSec = 30;

@interface GradientProgressView ()<CAAnimationDelegate>
{
    CGRect innerRect;
}
@end
@implementation GradientProgressView

- (id)initWithFrame:(CGRect)frame
{
    self = [super initWithFrame:frame];
    self.backgroundColor=kProgressBackColor;
    innerRect = CGRectMake(BarInset,
                           BarInset,
                           frame.size.width  - 2 * BarInset,
                           frame.size.height - 2 * BarInset);
    float k_cornerRadius = frame.size.height/2;
    if (self) {
        // Initialization code
        self.layer.cornerRadius=k_cornerRadius;
        self.layer.masksToBounds=YES;
        NSMutableArray *colors = [NSMutableArray arrayWithObjects:(id)kProgressColorOne.CGColor,(id)kProgressColorTwo.CGColor, nil];
        CAGradientLayer *gradient = [CAGradientLayer layer];
        gradient.frame     =innerRect;
        gradient.cornerRadius = innerRect.size.height/2;
        gradient.masksToBounds = YES;
        gradient.colors    = colors;
        gradient.locations = [NSArray arrayWithObjects:
                              [NSNumber numberWithFloat:0.f],
                              [NSNumber numberWithFloat:0.5f],
                              nil];
        gradient.masksToBounds=YES;
        gradient.startPoint=CGPointMake(0., 0.5);
        gradient.endPoint=CGPointMake(1, .5);
        [self.layer addSublayer:gradient];
        
        //添加shape
        {
            mask = [CAShapeLayer layer];
            [mask setFillRule:kCAFillRuleEvenOdd];
            [mask setFillColor:[UIColor colorWithRed:238./255 green:238./255 blue:238./255 alpha:1.].CGColor];
            [gradient addSublayer:mask];
            UIBezierPath *maskPath = [UIBezierPath bezierPathWithRoundedRect:
                                      CGRectMake(0, 0, innerRect.size.width, innerRect.size.height)
                                                                cornerRadius:k_cornerRadius];
            UIBezierPath *cutoutPath =[UIBezierPath bezierPathWithRoundedRect:CGRectMake(0, 0, 0, innerRect.size.height) byRoundingCorners:UIRectCornerTopLeft|UIRectCornerBottomLeft cornerRadii:CGSizeMake(k_cornerRadius, k_cornerRadius)];
            [maskPath appendPath:cutoutPath];
            mask.path = maskPath.CGPath;
            
            //启动shape定时器
            if (animationTimer == nil)
            {
                animationTimer = [NSTimer scheduledTimerWithTimeInterval:1.0/30
                                                                  target:self
                                                                selector:@selector(setNeedsDisplay)
                                                                userInfo:nil
                                                                 repeats:YES];
            }
        }
    }
    return self;
}

- (void)drawRect:(CGRect)rect
{
    if (++animationTimerCount == (2. * animationFramesPerSec)) {
        animationTimerCount = 0;
    }
    [self setGradientLocations:((CGFloat)animationTimerCount/(CGFloat)animationFramesPerSec)];
}
- (void) setGradientLocations:(CGFloat) leftEdge {
    //设置冲击波
    //    leftEdge -= gradientWidth;
    //    gradientLocations[0] = leftEdge < 0.0 ? 0.0 : (leftEdge > 1.0 ? 1.0 : leftEdge);
    //    gradientLocations[1] = MIN(leftEdge + gradientWidth, 1.0);
    //    gradientLocations[2] = MIN(gradientLocations[1] + gradientWidth, 1.0);
    //    //尽量保证 [0][1][2]相差0.2
    //
    //    CAGradientLayer *layer=[[self.layer sublayers] objectAtIndex:0];
    //    [CATransaction begin];
    //    [CATransaction setDisableActions:YES];
    //    layer.locations = [NSArray arrayWithObjects:
    //
    //                       [NSNumber numberWithFloat:gradientLocations[0]],
    //                       [NSNumber numberWithFloat:gradientLocations[1]],
    //                       [NSNumber numberWithFloat:gradientLocations[2]],
    //
    //                       nil];
    //    [CATransaction commit];
}
- (void)setProgress:(float)progress animated:(BOOL)animated{
    progress=progress<0.0?0.0:progress;
    progress=progress>1.0?1.0:progress;
    //0~9
    UIBezierPath *maskPath = [UIBezierPath bezierPathWithRoundedRect:
                              CGRectMake(0, 0, innerRect.size.width, innerRect.size.height)
                                                        cornerRadius:self.frame.size.height/2];
    CGFloat width=(fsw-2*BarInset)*progress;
    
    UIBezierPath *cutoutPath =[UIBezierPath bezierPathWithRect:CGRectMake(0, 0, width, innerRect.size.height)];
    
    [maskPath appendPath:cutoutPath];
    if (animated) {
        CABasicAnimation *anim = [CABasicAnimation animationWithKeyPath:@"path"];
        anim.delegate = self;
        anim.timingFunction = [CAMediaTimingFunction functionWithName:kCAMediaTimingFunctionEaseOut];
        anim.duration = .3;
        anim.removedOnCompletion = NO;
        anim.fillMode = kCAFillModeForwards;
        anim.fromValue = (__bridge id)(mask.path);
        anim.toValue = (__bridge id)(maskPath.CGPath);
        [mask addAnimation:anim forKey:@"path"];
        mask.path = maskPath.CGPath;
    }else{
        mask.path = maskPath.CGPath;
    }
    if (animationTimer && [animationTimer isValid])
    {
        [animationTimer invalidate];
    }
}
- (void)setProgress:(float)progress{
    
    [self setProgress:progress animated:YES];
}


-(void)dealloc{
    if (animationTimer && [animationTimer isValid])
    {
        [animationTimer invalidate];
    }
    //    [animationTimer release];
    //    [super dealloc];
}
@end


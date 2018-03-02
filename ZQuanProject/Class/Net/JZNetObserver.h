//
//  JZNetObserver.h
//  ZQuanProject
//
//  Created by wyy on 2018/2/28.
//  Copyright © 2018年 zquan. All rights reserved.
//

#import <Foundation/Foundation.h>

//网络检测标志
typedef NS_ENUM(NSInteger, NetState)
{
    NetWorkUnknowState = 0,  //默认
    NetWorkDisableState = 1,  //无网
    NetWorkEnableState = 2,   //有网
    NetWorkChangeEnableState = 3, //无网切换为有网
};


@interface JZNetObserver : NSObject

+ (instancetype)shared;

-(void)observeNetStatus;

@property(nonatomic,assign)BOOL isEnableNet;

@property(nonatomic,assign)NSString *netName;

//app run， first net tag(disable-enable) -> run check version
@property(nonatomic,assign) NetState  netState;

@end

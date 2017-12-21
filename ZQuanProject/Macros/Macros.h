//
//  Macros.h
//  JZPokerUser
//
//  Created by User on 16/3/22.
//  Copyright © 2016年 jzhd. All rights reserved.
//

#ifndef Macros_h
#define Macros_h

#import "APPConfig.h"


//字体
#define KTitleFont @"PingFang SC"
#define KTitleBoldFont @"PingFang-SC-Medium"
#define KMainFont(ksize) ([UIFont fontWithName:KTitleFont size:ksize]==nil)?[UIFont fontWithName:@"Helvetica" size:ksize]:[UIFont fontWithName:KTitleFont size:ksize]

//粗体
#define KMainBoldFont(ksize) ([UIFont fontWithName:KTitleBoldFont size:ksize]==nil)?[UIFont fontWithName:@"Helvetica-Bold" size:ksize]:[UIFont fontWithName:KTitleBoldFont size:ksize]


//16进制颜色
#define HexRGBAlpha(rgbValue,a) [UIColor colorWithRed:((float)((rgbValue & 0xFF0000) >> 16))/255.0 green:((float)((rgbValue & 0xFF00) >> 8))/255.0 blue:((float)(rgbValue & 0xFF))/255.0 alpha:(a)]

//宏定义
//FORMAT
#define FORMAT(f, ...) [NSString stringWithFormat:f, ## __VA_ARGS__]

//weakself
#define WEAKSELF(weakSelf)  __weak __typeof(&*self)weakSelf = self;

#define kMainBoundsHeight   ([UIScreen mainScreen].bounds).size.height //屏幕的高度
#define kMainBoundsWidth    ([UIScreen mainScreen].bounds).size.width //屏幕的宽度



//是不是NULL类型
#define IS_NIL(variable)    (variable == nil)

//字符串是否为空
#define IsEmptyStr(_ref)    (((_ref) == nil) || ((_ref) == NULL) || ([(_ref) isEqual:[NSNull null]]) || ([(_ref)isEqualToString:@"(null)"]) || ([[(_ref) stringByTrimmingCharactersInSet:[NSCharacterSet whitespaceCharacterSet]] length]==0))

//是不是NULL类型
#define IS_NULL_CLASS(variable)    ((!IS_NIL(variable))&&([variable  isKindOfClass:[NSNull class]])

//字典数据是否有效
#define IS_DICTIONARY_CLASS(variable) ((!IS_NIL(variable))&&([variable  isKindOfClass:[NSDictionary class]])&&([((NSDictionary *)variable) count]>0))

//数组数据是否有效
#define IS_ARRAY_CLASS(variable) ((!IS_NIL(variable))&&([variable  isKindOfClass:[NSArray class]])&&([((NSArray *)variable) count]>0))

#pragma mark -
#pragma mark 打印日志
//DEBUG  模式下打印日志,当前行
#ifdef DEBUG
#define NSLog(fmt, ...) NSLog((@"%s [Line %d] " fmt), __PRETTY_FUNCTION__, __LINE__, ##__VA_ARGS__)
#else
#define NSLog(...)
#endif


#define CachDirectoryePath [NSSearchPathForDirectoriesInDomains(NSCachesDirectory, NSUserDomainMask, YES) lastObject]

#define CachPathForFileName(fileName) [CachDirectoryePath stringByAppendingPathComponent:fileName]

#define AppendBslash(s) [s stringByAppendingString:@"/"]

//宏定义
#define DownLoadFileName @"h5" //解压的文件名


//本地化
#define K_CurrentVersion @"K_CurrentVersion"

#define K_ZIPPath @"K_ZIPPath"

#define K_isArchived @"K_isArchived"

#define K_sinaWBLoginData @"K_sinaWBLoginData"

#define K_ReceiveNotifyURL @"K_ReceiveNotifyURL"

//通知
#define KObserveNetStatusNotify @"KObserveNetStatusNotify"


#endif /* Macros_h */

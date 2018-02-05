//
//  Helper.h
//  ZQuanProject
//
//  Created by 王园园 on 2017/12/12.
//  Copyright © 2017年 zquan. All rights reserved.
//

#import <Foundation/Foundation.h>

@interface Helper : NSObject

/**
 获取当前H5版本
 */
+(float)getCurrentH5Version;

/**
 设置当前H5版本
 */
+(void)setCurrentH5Version:(float)version;

/**
 获取下载ziplujing
 */
+(NSString *)getdownzipPath;

/**
 获取解压文件路径
 */
+(NSString *)getUnZipFilePah;


/**
 判断是否是空字符
 */
+ (BOOL) isBlankString:(NSString *)string;


/**
 字符串转json
 */
+(NSDictionary *)covertJsonWithString:(NSString *)jsonStr;

/**
 json转字符串
 */
+(NSString *)covertStringWithJson:(id)jsonDit;
/**
  去掉UITextField前后空格
 */
+(NSString *)RemoveStringWhiteSpace:(NSString *)string;


/**
 处理颜色

 @param color 颜色字符串#--
 @return 十六进制颜色0X--
 */
+(unsigned long)reverseColorString:(NSString *)color;


/**
 生成渐变色图片
 
 @param colors 颜色数组
 @param frame 尺寸
 @return 图片
 */
- (UIImage*) gradientImageFromColors:(NSArray*)colors withFrame: (CGRect)frame;

/**
 生成颜色图片
 
 @param color 颜色字符串#--
 @return 十六进制颜色0X--
 */
+(UIImage *)imageWithColor:(UIColor *)color;

/**
 生成图片
 
 @param str base64Str
 @return image
 */
+ (UIImage *)base64stringToImage:(NSString *)str;

/**
 * 缩放图片
 */
+(UIImage*)imageWithImage:(UIImage*)image scaledToSize:(CGSize)newSize;

+ (CGFloat)widthForLabelWithString:(NSString *)labelString withFontSize:(CGFloat)fontsize withWidth:(CGFloat)width withHeight:(CGFloat)height;
@end

//
//  Helper.m
//  ZQuanProject
//
//  Created by 王园园 on 2017/12/12.
//  Copyright © 2017年 zquan. All rights reserved.
//

#import "Helper.h"
#import "Helper+Cache.h"
@implementation Helper


/**
 获取当前H5版本
 */
+(float)getCurrentH5Version
{
    if([[NSUserDefaults standardUserDefaults] objectForKey:K_CurrentVersion]==nil){
        //保存默认版本号
        [[NSUserDefaults standardUserDefaults] setObject:DefaultH5Version forKey:K_CurrentVersion];
    }
    float c_Version = [[[NSUserDefaults standardUserDefaults] objectForKey:K_CurrentVersion] floatValue];
    return c_Version;
}

/**
 设置当前H5版本
 */
+(void)setCurrentH5Version:(float)version;
{
    [[NSUserDefaults standardUserDefaults] setObject:[NSString stringWithFormat:@"%f",version] forKey:K_CurrentVersion];
}


/**
 获取下载ZIP路径
 */
+(NSString *)getdownzipPath;
{
    if([[NSUserDefaults standardUserDefaults] objectForKey:K_ZIPPath]==nil){
        //没有下载
        return @"";
    }else {
        NSString *ZIPPath = [[NSUserDefaults standardUserDefaults] objectForKey:K_ZIPPath];
        return ZIPPath;
    }
}

/**
 获取下载解压文件路径
 */
+(NSString *)getUnZipFilePah;
{
    //创建解压文件夹
    [Helper creatFileWithFileName:DownLoadFileName];
    
    return CachPathForFileName(DownLoadFileName);
}



//判断是否空字符
+ (BOOL) isBlankString:(NSString *)string {
    if (![string isKindOfClass:[NSString class]]) {
        return YES;
    }
    if (string == nil || string == NULL) {
        return YES;
    }
    if ([string isKindOfClass:[NSNull class]]) {
        return YES;
    }
    if ([string isEqualToString:@"(null)"]) {
        return YES;
    }
    if ([[string stringByTrimmingCharactersInSet:[NSCharacterSet whitespaceCharacterSet]] length]==0) {
        return YES;
    }
    return NO;
}


+(NSDictionary *)covertJsonWithString:(NSString *)jsonStr
{
    NSError * error = nil;
    NSData * getJsonData = [jsonStr dataUsingEncoding:NSUTF8StringEncoding];
    NSDictionary * jsonDict = [NSJSONSerialization JSONObjectWithData:getJsonData options:NSJSONReadingMutableContainers error:&error];
    return jsonDict;
}


+(NSString *)covertStringWithJson:(NSDictionary *)jsonDit
{
    NSError * error = nil;
    NSData * jsonData = [NSJSONSerialization dataWithJSONObject:jsonDit options:NSJSONWritingPrettyPrinted error:&error];
    NSString * jsonStr = [[NSString alloc] initWithData:jsonData encoding:NSUTF8StringEncoding];
    return jsonStr;
    
}

+(NSString *)RemoveStringWhiteSpace:(NSString *)string;
{
    NSString *trimmedString = [string stringByTrimmingCharactersInSet:[NSCharacterSet whitespaceAndNewlineCharacterSet]];
    return trimmedString;
}



+(UIImage *)imageWithColor:(UIColor *)color {
    CGRect rect = CGRectMake(0.f, 0.f, 1.f, 1.f);
    // 开启位图上下文
    UIGraphicsBeginImageContext(rect.size);
    // 获取位图上下文
    CGContextRef context = UIGraphicsGetCurrentContext();
    // 用颜色填充上下文
    CGContextSetFillColorWithColor(context, [color CGColor]);
    // 渲染上下文
    CGContextFillRect(context, rect);
    // 从上下文获取图片
    UIImage *image = UIGraphicsGetImageFromCurrentImageContext();
    // 结束上下文
    UIGraphicsEndImageContext();
    return  image;
}


/**
 生成渐变色图片

 @param colors 颜色数组
 @param frame 尺寸
 @return 图片
 */
- (UIImage*) gradientImageFromColors:(NSArray*)colors withFrame: (CGRect)frame
{
    NSMutableArray *ar = [NSMutableArray array];
    
    for(UIColor *c in colors) {
        [ar addObject:(id)c.CGColor];
    }
    UIGraphicsBeginImageContextWithOptions(frame.size, YES, 1);
    
    CGContextRef context = UIGraphicsGetCurrentContext();
    
    CGContextSaveGState(context);
    
    CGColorSpaceRef colorSpace = CGColorGetColorSpace([[colors lastObject] CGColor]);
    CGGradientRef gradient = CGGradientCreateWithColors(colorSpace, (CFArrayRef)ar, NULL);
    
    CGPoint start;
    CGPoint end;
    
    start = CGPointMake(0.0, frame.size.height);
    
    end = CGPointMake(frame.size.width, 0.0);
    CGContextDrawLinearGradient(context, gradient, start, end,kCGGradientDrawsBeforeStartLocation | kCGGradientDrawsAfterEndLocation);
    
    UIImage *image = UIGraphicsGetImageFromCurrentImageContext();
    
    CGGradientRelease(gradient);
    
    CGContextRestoreGState(context);
    
    CGColorSpaceRelease(colorSpace);
    
    UIGraphicsEndImageContext();
    
    return image;
}



+(unsigned long)reverseColorString:(NSString *)color
{
    if([color hasPrefix:@"#"]){
        NSString *colorStr = [color stringByReplacingOccurrencesOfString:@"#" withString:@"0X"];
        unsigned long Hcolor = strtoul([colorStr UTF8String],0,16);
        return Hcolor;
    }
    return 0;
}


@end

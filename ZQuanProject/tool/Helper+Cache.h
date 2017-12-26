//
//  Helper+Cache.h
//  RobTreasure
//
//  Created by User on 16/3/22.
//  Copyright © 2016年 jzhd. All rights reserved.
//

#import "Helper.h"

@interface Helper (Cache)


//+ (NSString *)pathAtDocumentFileName:(NSString *)fileName;

+(BOOL )creatFileWithFileName:(NSString *)fileName;

/**
 判断是否存在文件

 @param fileName 文件名
 @return BOOL
 */
+(BOOL)isExistObjectForfileName:(NSString *)fileName;
/**
 判断是否存在文件
 */
+(BOOL)isExistObjectForfilePath:(NSString *)filePath;
/**
 *  缓存一个对象
 *
 *  @param object   缓存对象
 *  @param fileName 文件名
 */
+ (BOOL)cacheObject:(id)object fileName:(NSString *)fileName;

/**
 *  取出缓存数据对象
 *
 *  @param fileName 文件名
 *
 */
+ (id)readCacheWithFileName:(NSString *)fileName;

/**
 *  删除缓存文件
 *
 *  @param fileName 文件名
 */
+ (void)removeCacheWithFileName:(NSString *)fileName;

/**
 *  删除缓存文件
 *
 *  @param filePath 文件路径
 */
+ (void)removeCacheWithFilePath:(NSString *)filePath;
@end

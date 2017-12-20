//
//  Helper+Cache.m
//  RobTreasure
//
//  Created by User on 16/3/22.
//  Copyright © 2016年 jzhd. All rights reserved.
//

#import "Helper+Cache.h"

@implementation Helper (Cache)


/**
 *@brief 获取Documents下的路径
 */
//+ (NSString *)pathAtDocumentFileName:(NSString *)fileName{
//    return [CachDirectoryePath stringByAppendingPathComponent:fileName];
//}


+(BOOL)isExistObjectForfileName:(NSString *)fileName;
{
    //创建文件夹
    NSString *floderPath = CachPathForFileName(fileName);
    if(![[NSFileManager defaultManager] fileExistsAtPath:floderPath isDirectory:nil]){
        return NO;
    }
    return YES;
}


+(BOOL)isExistObjectForfilePath:(NSString *)filePath;
{
    if(![[NSFileManager defaultManager] fileExistsAtPath:filePath isDirectory:nil]){
        return NO;
    }
    return YES;
}

+(BOOL )creatFileWithFileName:(NSString *)fileName;
{
    if(fileName == nil){
        return NO;
    }
    
    NSString *floderPath = CachPathForFileName(fileName);
    if(![Helper isExistObjectForfileName:fileName]){
        BOOL isSuccess = [[NSFileManager defaultManager] createDirectoryAtPath:floderPath withIntermediateDirectories:YES attributes:nil error:nil];
        if(!isSuccess){
            //创建文件夹失败
            return NO;
        }
    }
    return YES;
}

+ (BOOL)cacheObject:(id)object fileName:(NSString *)fileName{
    if(![Helper creatFileWithFileName:fileName]){
        return NO;
    }
    NSString *floderPath = CachPathForFileName(fileName);
    //写入文件
    NSString *filePath = [floderPath stringByAppendingPathComponent:fileName];
    if(![NSKeyedArchiver archiveRootObject:object toFile:filePath]){
        return NO;
    }
    return YES;
}

+ (id)readCacheWithFileName:(NSString *)fileName{
    if(fileName == nil){
        return nil;
    }
    NSString *floderPath = CachPathForFileName(fileName);
    NSString *filePath = [floderPath stringByAppendingPathComponent:fileName];
    return [NSKeyedUnarchiver unarchiveObjectWithFile:filePath];
}


+ (void)removeCacheWithFileName:(NSString *)fileName{
    if(fileName == nil){
        return;
    }
    NSString *floderPath = CachPathForFileName(fileName);
    NSString *filePath = [floderPath stringByAppendingPathComponent:fileName];
    [[NSFileManager defaultManager] removeItemAtPath:filePath error:nil];
}


+ (void)removeCacheWithFilePath:(NSString *)filePath{
    if(filePath == nil){
        return;
    }
    if([[NSFileManager defaultManager] fileExistsAtPath:filePath isDirectory:nil]){
        [[NSFileManager defaultManager] removeItemAtPath:filePath error:nil];
    }
}
@end

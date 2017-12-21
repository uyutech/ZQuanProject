//
//  JZNetTool.h
//  JZPokerUser
//
//  Created by wyy on 2017/7/26.
//  Copyright © 2017年 adjuz. All rights reserved.
//

#import <Foundation/Foundation.h>

typedef void(^successGetData)(id response);
typedef void(^failureGetData)(id error);

@interface JZNetTool : NSObject

+ (instancetype)sharedNetTool;

@property(nonatomic,copy,readwrite) successGetData successBlock;
@property(nonatomic,copy,readwrite)  failureGetData failureBlock;

@property(nonatomic,assign)BOOL isEnableNet;

@property(nonatomic,assign)NSString *netName;

-(void)observeNetStatus;

//GET
+(void)GetDataWithUrl:(NSString*)url
              Success:(successGetData)success
           NetFailure:(failureGetData)Netfailure;

//Post
+(void)PostDataWithUrl:(NSString*)url param:(NSDictionary *)param
              Success:(successGetData)success
           NetFailure:(failureGetData)Netfailure;

//downLoad
+(void)downloadTaskWithURl:(NSString *)url
                  progress:(nullable void (^)(float progressPercent)) downloadProgressBlock
         completionBlock:(nullable void (^)(NSString * _Nullable ZIPfilePath, NSError * _Nullable error))completionBlock;


@end

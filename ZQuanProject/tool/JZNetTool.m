//
//  JZNetTool.m
//  JZPokerUser
//
//  Created by wyy on 2017/7/26.
//  Copyright © 2017年 adjuz. All rights reserved.
//

#import "JZNetTool.h"
#import <AFNetworking/AFHTTPSessionManager.h>
#import <AFNetworking/AFNetworkReachabilityManager.h>
#import "Helper+Cache.h"
@implementation JZNetTool

static JZNetTool *netTool;
static AFHTTPSessionManager *manager ;
static AFURLSessionManager *urlsession ;

+ (instancetype)sharedNetTool
{
    static dispatch_once_t onceToken;
    dispatch_once(&onceToken,^{
        netTool = [[JZNetTool alloc] init];
    });
    return netTool;
}

-(AFHTTPSessionManager *)sharedHTTPSession{
    static dispatch_once_t onceToken;
    dispatch_once(&onceToken, ^{
        manager = [AFHTTPSessionManager manager];
        // AFN默认是不支持解析text/plain的，需要自己添加
        manager.responseSerializer.acceptableContentTypes = [NSSet setWithObjects:@"text/plain", @"application/json", @"text/json", @"text/javascript",@"application/x-www-form-urlencoded", nil];
        manager.requestSerializer = [AFHTTPRequestSerializer serializer];
        manager.responseSerializer = [AFHTTPResponseSerializer serializer];
        manager.requestSerializer.timeoutInterval = 15;
    });
    return manager;
}

//将urlstr UTF8编码
-(NSString *)getEncodeurlStr:(NSString *)urlstr;
{
    NSString *encodeurlstr =  [urlstr stringByAddingPercentEscapesUsingEncoding:NSUTF8StringEncoding];
    return encodeurlstr;
}


//GET
+(void)GetDataWithUrl:(NSString*)url Success:(successGetData)success NetFailure:(failureGetData)Netfailure
{
    [UIApplication sharedApplication].networkActivityIndicatorVisible = YES;
    AFHTTPSessionManager *manager = [[JZNetTool sharedNetTool] sharedHTTPSession];
    NSString * requestUrl = [netTool getEncodeurlStr:url];
    [manager GET:requestUrl parameters:nil progress:^(NSProgress * _Nonnull downloadProgress) {
        
    } success:^(NSURLSessionDataTask * _Nonnull task, id  _Nullable responseObject) {
        
        [UIApplication sharedApplication].networkActivityIndicatorVisible = NO;
        NSDictionary *jsonDict = [NSJSONSerialization JSONObjectWithData:responseObject options:NSJSONReadingMutableContainers error:nil];
        success(jsonDict);
 
    } failure:^(NSURLSessionDataTask * _Nullable task, NSError * _Nonnull error) {
        
        Netfailure(error);
        [UIApplication sharedApplication].networkActivityIndicatorVisible = NO;
    }];
}

//Post
+(void)PostDataWithUrl:(NSString*)url param:(NSDictionary *)param
               Success:(successGetData)success
            NetFailure:(failureGetData)Netfailure;
{
    [UIApplication sharedApplication].networkActivityIndicatorVisible = YES;
    AFHTTPSessionManager *manager = [[JZNetTool sharedNetTool] sharedHTTPSession];
    NSString * requestUrl = [netTool getEncodeurlStr:url];
    [manager POST:requestUrl parameters:param progress:^(NSProgress * _Nonnull uploadProgress) {
    } success:^(NSURLSessionDataTask * _Nonnull task, id  _Nullable responseObject) {
        
        [UIApplication sharedApplication].networkActivityIndicatorVisible = NO;
        NSDictionary *jsonDict = [NSJSONSerialization JSONObjectWithData:responseObject options:NSJSONReadingMutableContainers error:nil];
        success(jsonDict);
    } failure:^(NSURLSessionDataTask * _Nullable task, NSError * _Nonnull error) {
        Netfailure(error);
        [UIApplication sharedApplication].networkActivityIndicatorVisible = NO;
    }];
}

//downLoad
+(void)downloadTaskWithURl:(NSString *)url
                  progress:(nullable void (^)(float progressPercent)) downloadProgressBlock
           completionBlock:(nullable void (^)(NSString * _Nullable ZIPfilePath, NSError * _Nullable error))completionBlock;
{
    //3.创建请求对象
    NSURLRequest *request = [NSURLRequest requestWithURL:[NSURL URLWithString:[netTool getEncodeurlStr:url]]];
    
    //4.下载任务
    NSURLSessionDownloadTask *task = [[[JZNetTool sharedNetTool] sharedHTTPSession] downloadTaskWithRequest:request progress:^(NSProgress * _Nonnull downloadProgress) {

        float f_progress = 1.0 * downloadProgress.completedUnitCount / downloadProgress.totalUnitCount;
        downloadProgressBlock(f_progress);
        
    } destination:^NSURL * _Nonnull(NSURL * _Nonnull targetPath, NSURLResponse * _Nonnull response) {

        //设置下载路径，并将文件写入沙盒，最后返回NSURL对象
        NSString *fullPath = [CachDirectoryePath stringByAppendingPathComponent:response.suggestedFilename];
        
        return [NSURL fileURLWithPath:fullPath];
        
    } completionHandler:^(NSURLResponse * _Nonnull response, NSURL * _Nullable filePath, NSError * _Nullable error) {
 
        NSString *path = [[filePath absoluteString] stringByReplacingOccurrencesOfString:@"file://" withString:@""];
        completionBlock(path,error);
        
        NSHTTPURLResponse *response1 = (NSHTTPURLResponse *)response;
        NSInteger statusCode = [response1 statusCode];
        if (statusCode == 200) {
            //
        }else{
            //
        }
        
    }];
    
    //5.开始启动下载任务
    [task resume];  
}





//Cancle
+(void)cancleAllRequest
{
    [[[JZNetTool sharedNetTool] sharedHTTPSession].operationQueue cancelAllOperations];
}



/**
 监听网络
 */
-(void)observeNetStatus
{
    [[AFNetworkReachabilityManager sharedManager] startMonitoring];
    [[AFNetworkReachabilityManager sharedManager ] setReachabilityStatusChangeBlock:^(AFNetworkReachabilityStatus status)
    {
        if(status ==AFNetworkReachabilityStatusReachableViaWWAN || status == AFNetworkReachabilityStatusReachableViaWiFi)
        {
            NSLog(@"有网");
            [[NSNotificationCenter defaultCenter] postNotificationName:KObserveNetStatusNotify object:@"YES"];
            [JZNetTool sharedNetTool].isEnableNet = YES;
            if(status ==AFNetworkReachabilityStatusReachableViaWWAN){
                [JZNetTool sharedNetTool].netName = @"WWAN";
            }else if (status == AFNetworkReachabilityStatusReachableViaWiFi){
                [JZNetTool sharedNetTool].netName = @"WIFI";
            }
        
        }else
        {
            NSLog(@"没有网");
            [JZNetTool sharedNetTool].isEnableNet = NO;
            [JZNetTool sharedNetTool].netName = @"NONET";
            [[NSNotificationCenter defaultCenter] postNotificationName:KObserveNetStatusNotify object:@"NO"];
            
        }
    }];
}


@end


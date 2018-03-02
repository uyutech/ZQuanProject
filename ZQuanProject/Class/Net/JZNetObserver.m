//
//  JZNetObserver.m
//  ZQuanProject
//
//  Created by wyy on 2018/2/28.
//  Copyright © 2018年 zquan. All rights reserved.
//

#import "JZNetObserver.h"
#import <AFNetworking/AFNetworkReachabilityManager.h>
#import "UnzipManager.h"

@implementation JZNetObserver


static JZNetObserver *netObserver;
+ (instancetype)shared
{
    static dispatch_once_t onceToken;
    dispatch_once(&onceToken,^{
        netObserver = [[JZNetObserver alloc] init];
        netObserver.netState = NetWorkUnknowState;
    });
    return netObserver;
}


/**
 监听网络
 */
-(void)observeNetStatus
{
    [[AFNetworkReachabilityManager sharedManager] startMonitoring];
    [[AFNetworkReachabilityManager sharedManager ] setReachabilityStatusChangeBlock:^(AFNetworkReachabilityStatus status)
     {
         if(status ==AFNetworkReachabilityStatusReachableViaWWAN || status == AFNetworkReachabilityStatusReachableViaWiFi || status == AFNetworkReachabilityStatusUnknown)
         {
             NSLog(@"有网");
             [JZNetObserver shared].isEnableNet = YES;
             if(status ==AFNetworkReachabilityStatusReachableViaWWAN){
                 netObserver.netName = @"WWAN";
             }else if (status == AFNetworkReachabilityStatusReachableViaWiFi){
                 netObserver.netName = @"WIFI";
             }else if (status == AFNetworkReachabilityStatusUnknown){
                 netObserver.netName = @"UNKNOWN";
             }
             if(netObserver.netState == NetWorkUnknowState){
                 netObserver.netState = NetWorkEnableState; //打开app检测有网
             }else if(netObserver.netState == NetWorkDisableState){
                 netObserver.netState = NetWorkChangeEnableState; //第一次检测无网切换有网
                 [netObserver unzipOperation]; //检查版本
             }
             [[NSNotificationCenter defaultCenter] postNotificationName:KObserveNetStatusNotify object:@"YES"];
             
         }else
         {
             NSLog(@"没有网");
             netObserver.isEnableNet = NO;
             netObserver.netName = @"NONET";
             [[NSNotificationCenter defaultCenter] postNotificationName:KObserveNetStatusNotify object:@"NO"];
             if(netObserver.netState == NetWorkUnknowState){
                 netObserver.netState = NetWorkDisableState;//打开app检测无网
             }
         }
     }];
}


//解决第一次下载app 同意连接网络后，检查版本下载zip
-(void)unzipOperation
{
    UnzipManager *manager = [[UnzipManager alloc] init];
    [manager loadZip:nil Unzip:^(BOOL isUnzipedSuccess) {
        //下载zip并完成解压 通知主页面刷新
        NSLog(@"下载zip解压并刷新web");
        [[NSNotificationCenter defaultCenter] postNotificationName:KWebReloadNotify object:nil];
    } UnzipFinish:nil];
}

@end

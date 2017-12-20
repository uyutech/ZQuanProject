//
//  AppDelegate.m
//  ZQuanProject
//
//  Created by wyy on 2017/12/12.
//  Copyright © 2017年 zquan. All rights reserved.
//

#import "AppDelegate.h"
#import "ZQLaunchViewController.h"
#import "ZQWebViewController.h"
#import "JZNetTool.h"
#import "WebNSURLProtocol.h"
#import <AVFoundation/AVFoundation.h>
#import <UserNotifications/UserNotifications.h>

@interface AppDelegate ()

@end

@implementation AppDelegate


- (BOOL)application:(UIApplication *)application didFinishLaunchingWithOptions:(NSDictionary *)launchOptions {
    // Override point for customization after application launch.
    
    [NSURLProtocol registerClass:[WebNSURLProtocol class]];
    
    [[UIApplication sharedApplication] setStatusBarStyle:UIStatusBarStyleLightContent];
    _window = [[UIWindow alloc]initWithFrame:[UIScreen mainScreen].bounds];
    _window.backgroundColor = [UIColor whiteColor];
    _window.rootViewController = [[ZQLaunchViewController alloc] init];
    [_window makeKeyAndVisible];
    
    //监测网络
    [[JZNetTool sharedNetTool] observeNetStatus];
    
    //添加通知
    if (@available(iOS 10.0, *)) {
        UNUserNotificationCenter *center = [UNUserNotificationCenter currentNotificationCenter];
        //请求获取通知权限（角标，声音，弹框）
        [center requestAuthorizationWithOptions:(UNAuthorizationOptionBadge | UNAuthorizationOptionSound | UNAuthorizationOptionAlert) completionHandler:^(BOOL granted, NSError * _Nullable error) {
            if (granted) {
                NSLog(@"同意开启通知");
            }
        }];
    } else {
        // Fallback on earlier versions
        if ([[UIApplication sharedApplication] currentUserNotificationSettings].types!= UIUserNotificationTypeNone) {
           NSLog(@"同意开启通知");
        }else{
            [[UIApplication sharedApplication]registerUserNotificationSettings:[UIUserNotificationSettings settingsForTypes:UIUserNotificationTypeAlert|UIUserNotificationTypeBadge|UIUserNotificationTypeSound  categories:nil]];
        }
    }
    return YES;
}


- (void)applicationWillResignActive:(UIApplication *)application {
    // Sent when the application is about to move from active to inactive state. This can occur for certain types of temporary interruptions (such as an incoming phone call or SMS message) or when the user quits the application and it begins the transition to the background state.
    // Use this method to pause ongoing tasks, disable timers, and invalidate graphics rendering callbacks. Games should use this method to pause the game.
    [[AVAudioSession sharedInstance] setCategory:AVAudioSessionCategoryPlayback error:nil];
}


- (void)applicationDidEnterBackground:(UIApplication *)application {
    // Use this method to release shared resources, save user data, invalidate timers, and store enough application state information to restore your application to its current state in case it is terminated later.
    // If your application supports background execution, this method is called instead of applicationWillTerminate: when the user quits.
}


- (void)applicationWillEnterForeground:(UIApplication *)application {
    // Called as part of the transition from the background to the active state; here you can undo many of the changes made on entering the background.
    [[AVAudioSession sharedInstance] setActive:YES error:nil];
    [[UIApplication sharedApplication] setApplicationIconBadgeNumber:0];//进入前台取消应用消息图标
}


- (void)applicationDidBecomeActive:(UIApplication *)application {
    // Restart any tasks that were paused (or not yet started) while the application was inactive. If the application was previously in the background, optionally refresh the user interface.
}



#pragma mark 调用过用户注册通知方法之后执行（也就是调用完registerUserNotificationSettings:方法之后执行）
-(void)application:(UIApplication *)application didRegisterUserNotificationSettings:(UIUserNotificationSettings *)notificationSettings{
}



/**
 * 当用户点击本地通知进入app的时候调用（app当时并没有被关闭）
 * 若app已关闭不会被调用此方法
 */
- (void)application:(UIApplication *)application didReceiveLocalNotification:(UILocalNotification *)notification
{
    NSDictionary *userInfo = [notification userInfo];
    NSString *url =userInfo[@"url"];
    [self receiveNotifyPushWebURL:url];
    NSLog(@"通知URL：%@",url);
    NSLog(@"点通知激活");
}

-(void)receiveNotifyPushWebURL:(NSString *)url
{
    ZQWebViewController *webVC = [[ZQWebViewController alloc] init];
    webVC.URLString = url;
    UINavigationController *nav = (UINavigationController *)[UIApplication sharedApplication].keyWindow.rootViewController;
    [nav.visibleViewController.navigationController pushViewController:webVC animated:YES];
}
@end

//
//  NotificationPlugin.m
//  ZQuanProject
//
//  Created by 王园园 on 2017/12/18.
//  Copyright © 2017年 zquan. All rights reserved.
//

#import "NotifyPlugin.h"
#import <UserNotifications/UserNotifications.h>
#import "EBBannerView.h"

@implementation NotifyPlugin

-(void)initMessageJson:(NSDictionary *)message
{
    [super initMessageJson:message];
    
    NSDictionary *param = message[@"param"];
    if(param!=nil){
        NSDictionary *data = param[@"data"];
        NSString *title = data[@"title"];
        NSString *content = data[@"content"];
        NSString *url = data[@"url"];
        
        NSDictionary *params = param[@"params"];
        if(IsEmptyStr(title)){
            title = @"转圈";
        }
        
        UIApplicationState state = [UIApplication sharedApplication].applicationState;
        if(state == UIApplicationStateActive){
            //如果在前台  模拟系统弹框
            [[EBBannerView bannerWithBlock:^(EBBannerViewMaker *make) {
                make.title = title;
                make.content = content;
                make.object = param;
            }] show];
            return;
        }
        
        //本地系统通知
        if (@available(iOS 10.0, *)) {
            UNMutableNotificationContent *notifyContent = [[UNMutableNotificationContent alloc] init];
            notifyContent.title = title;
            notifyContent.body =content;
            notifyContent.badge = @1;
            notifyContent.userInfo = param;
            UNNotificationSound *sound = [UNNotificationSound soundNamed:UILocalNotificationDefaultSoundName];
            notifyContent.sound = sound;
            UNTimeIntervalNotificationTrigger *trigger1 = [UNTimeIntervalNotificationTrigger triggerWithTimeInterval:0 repeats:NO];
            
            NSString *requertIdentifier = @"RequestIdentifier";
            UNNotificationRequest *request = [UNNotificationRequest requestWithIdentifier:requertIdentifier content:notifyContent trigger:trigger1];
            
            [[UNUserNotificationCenter currentNotificationCenter] addNotificationRequest:request withCompletionHandler:^(NSError * _Nullable error) {
                NSLog(@"Error:%@",error);
            }];
            
        } else {
            
            //ios10以下版本本地通知
            UILocalNotification *notification=[[UILocalNotification alloc]init];
            notification.fireDate=[NSDate dateWithTimeIntervalSinceNow:0];
            notification.repeatInterval=1;
            if (@available(iOS 8.2, *)) {
                notification.alertTitle = title;
            }
            notification.alertBody= content;
            notification.applicationIconBadgeNumber=1;
            notification.alertAction=@"打开应用";
            notification.alertLaunchImage=@"Default";
            notification.soundName=UILocalNotificationDefaultSoundName;
            //设置用户信息
            notification.userInfo=param;
            [[UIApplication sharedApplication] scheduleLocalNotification:notification];
        }
    }
    
}

@end

//
//  NotificationPlugin.m
//  ZQuanProject
//
//  Created by 王园园 on 2017/12/18.
//  Copyright © 2017年 zquan. All rights reserved.
//

#import "NotificationPlugin.h"
#import <UserNotifications/UserNotifications.h>

@implementation NotificationPlugin

-(void)initMessageJson:(NSDictionary *)message
{
    NSString *clientid = message[@"clientId"];
    if(IS_DICTIONARY_CLASS(message[@"param"])){
        NSDictionary *param = message[@"param"];
        if(param!=nil){
            NSDictionary *data = param[@"data"];
            NSString *ticker = data[@"ticker"];
            NSString *title = data[@"title"];
            NSString *content = data[@"content"];
            NSString *url = data[@"url"];
            if(IsEmptyStr(title)){
                title = @"";
            }
            if(IsEmptyStr(ticker)){
                ticker = title;
            }
            
            //通知
            if (@available(iOS 10.0, *)) {
                UNMutableNotificationContent *notifyContent = [[UNMutableNotificationContent alloc] init];
                notifyContent.title = ticker;
                notifyContent.subtitle = (IsEmptyStr(title))?nil:title;
                notifyContent.body =content;
                notifyContent.badge = @1;
                notifyContent.userInfo = @{@"url":url};
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
                    notification.alertTitle = ticker;
                }
                notification.alertBody= content;
                notification.applicationIconBadgeNumber=1;
                notification.alertAction=@"打开应用";
                notification.alertLaunchImage=@"Default";
                notification.soundName=UILocalNotificationDefaultSoundName;
                //设置用户信息
                notification.userInfo=@{@"url":url};
                [[UIApplication sharedApplication] scheduleLocalNotification:notification];
            }
        }
    }
}

@end

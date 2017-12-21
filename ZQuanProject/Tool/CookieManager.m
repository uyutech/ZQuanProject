//
//  CookieManager.m
//  ZQuanProject
//
//  Created by 王园园 on 2017/12/21.
//  Copyright © 2017年 zquan. All rights reserved.
//

#import "CookieManager.h"

@implementation CookieManager

+(void)removeCookieOfSession
{
    if (@available(iOS 9.0, *)) {
        NSSet *websiteDataTypes = [NSSet setWithObject: WKWebsiteDataTypeSessionStorage];
        NSDate *dateFrom = [NSDate dateWithTimeIntervalSince1970:0];
        [[WKWebsiteDataStore defaultDataStore] removeDataOfTypes:websiteDataTypes modifiedSince:dateFrom completionHandler:^{
            
        }];
    } else {
        // Fallback on earlier versions
    }
}

+(void)removeCookieForKey:(NSString *)key{
    
}

+(void)setCookieWithValue:(NSString *)value Key:(NSString *)key
{
//    NSMutableDictionary *cookieDic = [NSMutableDictionary dictionary];
//    NSMutableString *cookieValue = [NSMutableString stringWithFormat:@""];
//    NSHTTPCookieStorage *cookieJar = [NSHTTPCookieStorage sharedHTTPCookieStorage];
//    for (NSHTTPCookie *cookie in [cookieJar cookies]) {
//        [cookieDic setObject:cookie.value forKey:cookie.name];
//    }
    
}



+(void)removeCookieWithKey:(NSString *)key
{
    //清除Cookie
    if (@available(iOS 9.0, *)) {
        
        [[WKWebsiteDataStore defaultDataStore] fetchDataRecordsOfTypes:[WKWebsiteDataStore allWebsiteDataTypes] completionHandler:^(NSArray<WKWebsiteDataRecord *> * __nonnull records)
         {
             for (WKWebsiteDataRecord *record  in records)
             {
                 if ( [record.displayName containsString:key]) {
                     [[WKWebsiteDataStore defaultDataStore] removeDataOfTypes:record.dataTypes forDataRecords:@[record] completionHandler:^{
                         NSLog(@"Cookies for %@ deleted successfully",record.displayName);
                     }];
                 }
             }
             
         }];
    } else {
        NSString *libraryPath = [NSSearchPathForDirectoriesInDomains(NSLibraryDirectory, NSUserDomainMask, YES) objectAtIndex:0];
        NSString *cookiesFolderPath = [libraryPath stringByAppendingString:@"/Cookies"];
        NSError *errors;
        [[NSFileManager defaultManager] removeItemAtPath:cookiesFolderPath error:&errors];
    }
}
@end

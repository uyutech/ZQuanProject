//
//  SetCookiePlugin.m
//  ZQuanProject
//
//  Created by 王园园 on 2017/12/18.
//  Copyright © 2017年 zquan. All rights reserved.
//

#import "SetCookiePlugin.h"

@implementation SetCookiePlugin

-(void)initMessageJson:(NSDictionary *)message
{
    [super initMessageJson:message];

    NSString *clientId = message[@"clientId"];
    if(IS_DICTIONARY_CLASS(message[@"param"])){
        NSDictionary *param = message[@"param"];
        NSString *key = param[@"key"];
        NSString *value = param[@"value"];
        if(IsEmptyStr(value)){
            //清除Cookie
            if (@available(iOS 9.0, *)) {
                WKWebsiteDataStore *dateStore = [WKWebsiteDataStore defaultDataStore];
                [dateStore fetchDataRecordsOfTypes:[WKWebsiteDataStore allWebsiteDataTypes] completionHandler:^(NSArray<WKWebsiteDataRecord *> * __nonnull records)
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
            
            
        }else{
            
        }
//        
//        NSString *jsStr = [NSString stringWithFormat:@"\"%@\",%@",clientId,@(YES)];
//        
//        [self.wkweb evaluateJavaScript:jsStr completionHandler:^(id _Nullable response, NSError * _Nullable error) {
//            NSLog(@"PromptPlugin回调————%@————error：%@",response,error);
//        }];
    }
}

@end

//
//  PromptPlugin.m
//  ZQuanProject
//
//  Created by 王园园 on 2017/12/18.
//  Copyright © 2017年 zquan. All rights reserved.
//

#import "PromptPlugin.h"

@implementation PromptPlugin

-(void)initMessageJson:(NSDictionary *)message
{
    [super initMessageJson:message];
    
    NSString *clientId = message[@"clientId"];
    
    
    UIAlertController *alert = [UIAlertController alertControllerWithTitle:nil message:nil preferredStyle:UIAlertControllerStyleAlert];
    [alert addTextFieldWithConfigurationHandler:^(UITextField * _Nonnull textField) {
        textField.textColor = [UIColor blackColor];
    }];
    
    
    [alert addAction:[UIAlertAction actionWithTitle:@"取消" style:UIAlertActionStyleDefault handler:^(UIAlertAction * _Nonnull action) {
        
        NSString *inputText = [[alert.textFields lastObject] text];
        [self jsHandlerText:inputText Click:false ClientId:clientId];
        
    }]];
    
    
    [alert addAction:[UIAlertAction actionWithTitle:@"确定" style:UIAlertActionStyleDefault handler:^(UIAlertAction * _Nonnull action) {
        
        NSString *inputText = [[alert.textFields lastObject] text];
        [self jsHandlerText:inputText Click:true ClientId:clientId];
        
    }]];
    
    [self.webVC presentViewController:alert animated:YES completion:NULL];
    
}


-(void)jsHandlerText:(NSString *)text Click:(BOOL)sure ClientId:(NSString *)clientId
{
    NSDictionary *dict = @{@"value":text,@"success":@(sure)};
    NSString *jsonStr = [Helper covertStringWithJson:dict];
    
    NSString *jsStr = [NSString stringWithFormat:@"javascript: ZhuanQuanJSBridge._invokeJS(\"%@\",%@);",clientId,jsonStr];
    [self.web stringByEvaluatingJavaScriptFromString:jsStr];
}

@end

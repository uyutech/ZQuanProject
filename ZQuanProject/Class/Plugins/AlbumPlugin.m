//
//  AlbumPlugin.m
//  ZQuanProject
//
//  Created by 王园园 on 2017/12/18.
//  Copyright © 2017年 zquan. All rights reserved.
//

#import "AlbumPlugin.h"
#import "WPhotoViewController.h"
@implementation AlbumPlugin

-(void)initMessageJson:(NSDictionary *)message
{
    [super initMessageJson:message];
    NSString *clientId = message[@"clientId"];
    int num = 1;
    if(IS_DICTIONARY_CLASS(message[@"param"]))
    {
        NSDictionary *param = message[@"param"];
        int max =  [param[@"num"] intValue];
        if(max>0){
            num = max;
        }
    }
    
    //选择相册
    WPhotoViewController *WphotoVC = [[WPhotoViewController alloc] init];
    //选择图片的最大数
    WphotoVC.selectPhotoOfMax = num;
    [WphotoVC setSelectPhotosBack:^(NSMutableArray *phostsArr) {
        if(phostsArr.count==0){
            //取消
            NSDictionary *dict = @{@"cancel":@(true),@"success":@(false)};
            NSString *jsonStr = [Helper covertStringWithJson:dict];
             NSString *jsStr = [NSString stringWithFormat:@"\"%@\",%@",clientId,jsonStr];
            [self.wkweb evaluateJavaScript:jsStr completionHandler:^(id _Nullable response, NSError * _Nullable error) {
                NSLog(@"AlbumPlugin回调————%@————error：%@",response,error);
            }];
        }else{
            NSMutableArray *base64Arr = [NSMutableArray array];
            [phostsArr enumerateObjectsUsingBlock:^(id  _Nonnull obj, NSUInteger idx, BOOL * _Nonnull stop) {
                UIImage *originImage = obj[@"image"];
            
                
                float scaleSize = 1;
                float height =  [obj[@"height"] floatValue];
                float width =  [obj[@"width"] floatValue];
                if(height>500||width>500){
                    scaleSize = (height>=width)?500/height : 500/width;
                    originImage = [self OriginImage:originImage WithScale:scaleSize];
                }
            
                NSData *data = UIImageJPEGRepresentation(originImage, 0.5f);
                NSString *encodedImageStr = [data base64EncodedStringWithOptions:NSDataBase64Encoding64CharacterLineLength];
                encodedImageStr = [encodedImageStr stringByReplacingOccurrencesOfString:@"\r\n" withString:@""];
                encodedImageStr = [encodedImageStr stringByReplacingOccurrencesOfString:@"\n" withString:@""];
                [base64Arr addObject:encodedImageStr];
            }];
            
            NSDictionary *dict = @{@"base64":base64Arr,@"success":@(true)};
            NSString *jsonStr = [Helper covertStringWithJson:dict];
            NSString *jsStr = [NSString stringWithFormat:@"\"%@\",%@",clientId,jsonStr];
            [self.wkweb evaluateJavaScript:jsStr completionHandler:^(id _Nullable response, NSError * _Nullable error) {
                //NSLog(@"AlbumPlugin回调————%@————error：%@",response,error);
            }];
        }
    }];
    
    [self.webVC.navigationController presentViewController:WphotoVC animated:YES completion:nil];
}



-(UIImage*) OriginImage:(UIImage *)image WithScale:(float)scale
{
    CGSize size = CGSizeMake(image.size.width*scale, image.size.height*scale);
    UIGraphicsBeginImageContext(size);  //size 为CGSize类型，即你所需要的图片尺寸
    
    [image drawInRect:CGRectMake(0, 0, size.width, size.height)];
    
    UIImage* scaledImage = UIGraphicsGetImageFromCurrentImageContext();
    
    UIGraphicsEndImageContext();
    
    return scaledImage;   //返回的就是已经改变的图片
}

@end

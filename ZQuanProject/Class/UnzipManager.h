//
//  UnzipManager.h
//  ZQuanProject
//
//  Created by wyy on 2018/2/28.
//  Copyright © 2018年 zquan. All rights reserved.
//

#import <Foundation/Foundation.h>

typedef void(^LoadZipBlock)(BOOL isneedLoad,float loadProgress);
typedef void(^UnzipSuccessBlock)(BOOL isUnzipedSuccess);
typedef void(^UnzipFinishBlock)(BOOL isUnziped);

@interface UnzipManager : NSObject

@property(nonatomic,strong)LoadZipBlock loadZipBlock;
@property(nonatomic,strong)UnzipSuccessBlock unzipSuccessBlock;
@property(nonatomic,strong)UnzipFinishBlock unzipFinishBlock;


/**
 检查版本

 @param loadZipBlock 下载zip进度回调
 @param unzipSuccessBlock 解压成功回调
 @param unzipFinishBlock 操作完成回调
 */
-(void)loadZip:(LoadZipBlock)loadZipBlock
         Unzip:(UnzipSuccessBlock)unzipSuccessBlock
   UnzipFinish:(UnzipFinishBlock)unzipFinishBlock;

@end

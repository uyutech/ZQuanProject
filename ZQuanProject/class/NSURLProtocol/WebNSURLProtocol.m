//
//  WebNSURLProtocol.m
//  ZQuanProject
//
//  Created by 王园园 on 2017/12/16.
//  Copyright © 2017年 zquan. All rights reserved.
//

#import "WebNSURLProtocol.h"
#import <UIKit/UIKit.h>
#import "Helper.h"
#import "Helper+Cache.h"
#import "H5EventDispatcher.h"


static NSString* const ZQNSURLProtocolHKey = @"ZQNSURLProtocol";
@interface WebNSURLProtocol ()<NSURLSessionDelegate>

@property(nonatomic,strong)NSMutableArray *urlArr;

@end


@implementation WebNSURLProtocol

static WebNSURLProtocol * prototol;
+ (void)initialize
{
    if (self == [WebNSURLProtocol class]) {
        prototol = [[WebNSURLProtocol alloc] init];
        prototol.urlArr = [NSMutableArray array];
    }
}


+ (BOOL)canInitWithRequest:(NSURLRequest *)request {
    //拦截log
    if([[[request URL] scheme] isEqualToString:@"h5container.message"]){
        
        NSString *urlStr = [NSString stringWithFormat:@"%@",[[request URL] absoluteString]];
    
        urlStr = [urlStr stringByReplacingOccurrencesOfString:@"h5container.message:" withString:@""];
        
        if(![prototol.urlArr containsObject:urlStr]){
            [prototol.urlArr addObject:urlStr];
            [H5EventDispatcher initLogMessage:[urlStr stringByRemovingPercentEncoding]];
        }
        return NO;
    }
    
    //拦截URL
    NSString* extension = request.URL.pathExtension;
    
    BOOL isImage =  [@[@"html",@"htm",@"css",@"js",@"ico",@"png",@"gif",@"jpg",@"jpeg"] indexOfObjectPassingTest:^BOOL(id  _Nonnull obj, NSUInteger idx, BOOL * _Nonnull stop) {
        return [extension compare:obj options:NSCaseInsensitiveSearch] == NSOrderedSame;
    }] != NSNotFound;
    
    return [NSURLProtocol propertyForKey:ZQNSURLProtocolHKey inRequest:request] == nil && isImage &&[request.URL.host isEqualToString:@"h5.circling.cc"];
}


+ (NSURLRequest *)canonicalRequestForRequest:(NSURLRequest *)request {
    return request;
}

- (void)startLoading {
    //NSMutableURLRequest* request = self.request.mutableCopy;
    
    NSMutableURLRequest *mrequest;
    NSArray *arr = [self.request.URL.absoluteString componentsSeparatedByString:@"?"];
    if(arr.count>=1){
        NSString *PreURL = arr[0];
        NSString *path = [NSString stringWithFormat:@"%@/%@",[Helper getUnZipFilePah],[PreURL lastPathComponent]];
        NSURL* url1 = [NSURL URLWithString:path];
        mrequest = [NSMutableURLRequest requestWithURL:url1];
        
        [NSURLProtocol setProperty:@YES forKey:ZQNSURLProtocolHKey inRequest:mrequest];
        
        NSData* data = [NSData dataWithContentsOfFile:path];
        
        NSURLResponse* response = [[NSURLResponse alloc] initWithURL:mrequest.URL MIMEType:@"text/html" expectedContentLength:data.length textEncodingName:nil];
        
        [self.client URLProtocol:self didReceiveResponse:response cacheStoragePolicy:NSURLCacheStorageAllowed];
        [self.client URLProtocol:self didLoadData:data];
        [self.client URLProtocolDidFinishLoading:self];
    }
}


- (void)stopLoading {
}

-(NSString *)type:(NSString *)pathExtension
{
    if([pathExtension isEqualToString:@"html"]){
        return @"text/html";
    }else if([pathExtension isEqualToString:@"htm"]){
        return @"text/html";
    }else if([pathExtension isEqualToString:@"css"]){
        return @"text/css";
    }else if([pathExtension isEqualToString:@"js"]){
        return @"application/javascript";
    }else if([pathExtension isEqualToString:@".png"]){
        return @"image/png";
    }else if([pathExtension isEqualToString:@"gif"]){
        return @"image/gif";
    }else if([pathExtension isEqualToString:@"jpg"]){
        return @"image/jpg";
    }else if([pathExtension isEqualToString:@"jpeg"]){
        return @"image/jpeg";
    }else return @"text/html";
}



@end


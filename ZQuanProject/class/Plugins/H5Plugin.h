//
//  H5Plugin.h
//  ZQuanProject
//
//  Created by 王园园 on 2017/12/17.
//  Copyright © 2017年 zquan. All rights reserved.
//

#import <Foundation/Foundation.h>
#import "ZQUIWebViewController.h"
#import <WebKit/WebKit.h>
#import "Helper.h"

static  NSString * SET_TITLE = @ "setTitle";
static  NSString * SET_SUB_TITLE = @ "setSubTitle";
static  NSString * PUSH_WINDOW = @ "pushWindow";
static  NSString * POP_WINDOW = @ "popWindow";
static  NSString * BACK = @ "back";
static  NSString * TOAST = @ "toast";
static  NSString * SHOW_LOADING = @ "showLoading";
static  NSString * HIDE_LOADING = @ "hideLoading";
static  NSString * ALERT = @ "alert";
static  NSString * CONFIRM = @ "confirm";
static  NSString * HIDE_BACKBUTTON = @ "hideBackButton";
static  NSString * SHOW_BACKBUTTON = @ "showBackButton";
static  NSString * REFRESH = @ "refresh";
static  NSString * REFRESH_STATE = @ "refreshState";
static  NSString * LOGIN_WEIBO = @ "loginWeibo";
static  NSString * GET_PRE_FERENCE = @ "getPreference";
static  NSString * SET_PRE_FERENCE = @ "setPreference";
static  NSString * SHOW_OPTIONMENU = @ "showOptionMenu";
static  NSString * HIDE_OPTIONMENU = @ "hideOptionMenu";
static  NSString * SET_OPTIONMENU = @ "setOptionMenu";
static  NSString * SET_TITLE_BG_COLOR = @ "setTitleBgColor";
static  NSString * MOVE_TASK_TO_BACK = @ "moveTaskToBack";
static  NSString * OPEN_URI = @ "openUri";
static  NSString * SET_COOKIE = @ "setCookie";
static  NSString * WEIBO_LOGIN = @ "weiboLogin";
static  NSString * LOGIN_OUT = @ "loginOut";
static  NSString * NOTIFY = @ "notify";
static  NSString * ALBUM = @ "album";
static  NSString * PROMPT = @ "prompt";
static  NSString * DOWNLOAD = @ "download";
static  NSString * NETWORK_INFO = @ "networkInfo";

@interface H5Plugin : NSObject

@property(nonatomic,strong)ZQUIWebViewController *webVC;
@property(nonatomic,strong)UIWebView *web;

-(void)initMessageJson:(NSDictionary *)message;

@end

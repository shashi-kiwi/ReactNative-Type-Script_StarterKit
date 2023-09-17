// WhiteLabelConfig.m
#import "WhiteLabelConfig.h"
@implementation WhiteLabelConfig
  
  RCT_EXPORT_MODULE(WhiteLabelConfig);
  
  RCT_EXPORT_BLOCKING_SYNCHRONOUS_METHOD(getAppName) {
    return [[NSBundle mainBundle] objectForInfoDictionaryKey:@"CFBundleDisplayName"];
  }
  
  RCT_EXPORT_BLOCKING_SYNCHRONOUS_METHOD(getPrimaryColor) {
    return @"#7a76e5";
  }
  
  RCT_EXPORT_BLOCKING_SYNCHRONOUS_METHOD(getPrimaryTextColor) {
    return @"#7a76e5";
  }
  
  RCT_EXPORT_BLOCKING_SYNCHRONOUS_METHOD(getWelcomeText) {
    return @"Welcome to My Team App";
  }

@end

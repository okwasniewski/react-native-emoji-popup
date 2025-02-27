#import <React/RCTViewManager.h>
#import <React/RCTUIManager.h>
#import "RCTBridge.h"

@interface EmojiPopupViewManager : RCTViewManager
@end

@implementation EmojiPopupViewManager

RCT_EXPORT_MODULE(EmojiPopupView)

- (UIView *)view
{
  return [[UIView alloc] init];
}

RCT_EXPORT_VIEW_PROPERTY(color, NSString)

@end

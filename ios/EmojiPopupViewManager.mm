#import <React/RCTViewManager.h>
#import <React/RCTUIManager.h>
#import "RCTBridge.h"

#if __has_include("EmojiPopup/EmojiPopup-Swift.h")
#import "EmojiPopup/EmojiPopup-Swift.h"
#else
#import "EmojiPopup-Swift.h"
#endif


@interface EmojiPopupViewManager : RCTViewManager<EmojiPopupDelegate>
@end

@implementation EmojiPopupViewManager

RCT_EXPORT_MODULE(EmojiPopupView)

RCT_EXPORT_VIEW_PROPERTY(onEmojiSelected, RCTDirectEventBlock)

- (UIView *)view
{
  return [[EmojiPopupViewImpl alloc] initWithDelegate:self];
}

- (void)didGetEmojiWithEmoji:(NSString *)emoji reactTag:(NSNumber *)reactTag {
  auto event = [[OnEmojiSelectedEvent alloc] initWithReactTag:reactTag emoji:emoji];
  [self.bridge.eventDispatcher sendEvent:event];
}

@end

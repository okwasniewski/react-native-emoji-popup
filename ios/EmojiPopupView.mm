#import "EmojiPopupView.h"

#import <react/renderer/components/RNEmojiPopupViewSpec/ComponentDescriptors.h>
#import <react/renderer/components/RNEmojiPopupViewSpec/EventEmitters.h>
#import <react/renderer/components/RNEmojiPopupViewSpec/Props.h>
#import <react/renderer/components/RNEmojiPopupViewSpec/RCTComponentViewHelpers.h>

#import "RCTFabricComponentsPlugins.h"

#if __has_include("EmojiPopup/EmojiPopup-Swift.h")
#import "EmojiPopup/EmojiPopup-Swift.h"
#else
#import "EmojiPopup-Swift.h"
#endif

using namespace facebook::react;

@interface EmojiPopupView () <RCTEmojiPopupViewViewProtocol, EmojiPopupDelegate>

@end

@implementation EmojiPopupView {
  EmojiPopupViewImpl * _view;
}

+ (ComponentDescriptorProvider)componentDescriptorProvider
{
  return concreteComponentDescriptorProvider<EmojiPopupViewComponentDescriptor>();
}

- (instancetype)initWithFrame:(CGRect)frame
{
  if (self = [super initWithFrame:frame]) {
    static const auto defaultProps = std::make_shared<const EmojiPopupViewProps>();
    _props = defaultProps;
    
    _view = [[EmojiPopupViewImpl alloc] initWithDelegate:self];
    
    self.contentView = _view;
  }
  
  return self;
}

- (void)didGetEmojiWithEmoji:(NSString *)emoji reactTag:(NSNumber *)reactTag {
  auto eventEmitter = std::static_pointer_cast<const EmojiPopupViewEventEmitter>(_eventEmitter);
  const char* utf8String = [emoji UTF8String];
  if (eventEmitter) {
    eventEmitter->onEmojiSelected(EmojiPopupViewEventEmitter::OnEmojiSelected {
      .emoji = std::string { utf8String }
    });
  }
}

Class<RCTComponentViewProtocol> EmojiPopupViewCls(void)
{
  return EmojiPopupView.class;
}

@end

#import "EmojiPopupView.h"

#import "generated/RNEmojiPopupViewSpec/ComponentDescriptors.h"
#import "generated/RNEmojiPopupViewSpec/EventEmitters.h"
#import "generated/RNEmojiPopupViewSpec/Props.h"
#import "generated/RNEmojiPopupViewSpec/RCTComponentViewHelpers.h"

#import "RCTFabricComponentsPlugins.h"

#import "EmojiPopup-Swift.h"

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

- (void)updateProps:(Props::Shared const &)props oldProps:(Props::Shared const &)oldProps
{
  const auto &oldViewProps = *std::static_pointer_cast<EmojiPopupViewProps const>(_props);
  const auto &newViewProps = *std::static_pointer_cast<EmojiPopupViewProps const>(props);
  
  [super updateProps:props oldProps:oldProps];
}

- (void)didGetEmojiWithEmoji:(NSString *)emoji {
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

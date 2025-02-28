import React

// RCTEvent is not defined for new arch.
protocol RCTEvent {}

@objcMembers
public class OnEmojiSelectedEvent: NSObject, RCTEvent {
  private var emoji: NSString
  public var viewTag: NSNumber

  public var eventName: String {
    return "onEmojiSelected"
  }

  public init(reactTag: NSNumber, emoji: NSString) {
    self.viewTag = reactTag
    self.emoji = emoji
    super.init()
  }

  public class func moduleDotMethod() -> String {
    return "RCTEventEmitter.receiveEvent"
  }

  public func canCoalesce() -> Bool {
      return false
  }

  public func arguments() -> [Any] {
    return [
      viewTag,
      RCTNormalizeInputEventName(eventName) ?? eventName,
      [
        "emoji": emoji
      ]
    ]
  }
}

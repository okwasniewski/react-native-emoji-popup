import UIKit
import MCEmojiPicker
import React

@objc public protocol EmojiPopupDelegate {
  func didGetEmoji(emoji: String)
}

@objc
public class EmojiPopupViewImpl: UIView, MCEmojiPickerDelegate {
  private var delegate: EmojiPopupDelegate?
  
  public override func layoutSubviews() {
    let tapGesture = UITapGestureRecognizer(target: self, action: #selector(handleTap(_:)))
    self.addGestureRecognizer(tapGesture)
  }
  
  @objc func handleTap(_ gesture: UITapGestureRecognizer) {
    presentEmojiPicker()
  }
  
  @objc public convenience init(delegate: EmojiPopupDelegate) {
    self.init()
    self.delegate = delegate
  }
  
  @objc public func presentEmojiPicker() {
    let emojiPicker = MCEmojiPickerViewController()
    let reactRootVC = reactViewController()
    emojiPicker.sourceView = self
    emojiPicker.delegate = self
    reactRootVC?.present(emojiPicker, animated: true)
  }
  
  // MARK: MCEmojiPickerDelegate
  
  public func didGetEmoji(emoji: String) {
    delegate?.didGetEmoji(emoji: emoji)
  }
}


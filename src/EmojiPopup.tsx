import EmojiPopupView from './EmojiPopupViewNativeComponent';
import type { EmojiPopupProps } from './types';

const EmojiPopup = ({ children, onEmojiSelected }: EmojiPopupProps) => {
  return (
    <>
      <EmojiPopupView
        onEmojiSelected={({ nativeEvent: { emoji } }) => {
          onEmojiSelected(emoji);
        }}
      >
        {children}
      </EmojiPopupView>
    </>
  );
};

export default EmojiPopup;

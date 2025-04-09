type CloseButtonProps = {
  close: () => void;
};

export interface EmojiPopupProps {
  /*
   * A React node that will be rendered as the trigger of the EmojiPopup.
   */
  children: React.ReactNode;
  /*
   * A function that will be called when an emoji is selected.
   */
  onEmojiSelected: (emoji: string) => void;
  /*
   * A function that returns a React node to be rendered as the close button.
   * @platform android
   */
  closeButton?: (props: CloseButtonProps) => React.ReactNode;
}

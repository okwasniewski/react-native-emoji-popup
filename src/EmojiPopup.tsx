import { StyleSheet, View } from 'react-native';
import EmojiPopupView from './EmojiPopupViewNativeComponent';
import type { EmojiPopupProps } from './types';

const EmojiPopup = ({ children, onEmojiSelected }: EmojiPopupProps) => {
  return (
    <View style={styles.container}>
      <EmojiPopupView
        onEmojiSelected={({ nativeEvent: { emoji } }) => {
          onEmojiSelected(emoji);
        }}
      >
        {children}
      </EmojiPopupView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  emoji: {
    flex: 1,
    width: '100%',
  },
  modalView: {
    flex: 1,
    backgroundColor: 'white',
    paddingTop: 50,
  },
  button: {
    backgroundColor: '#2196F3',
    padding: 10,
    borderRadius: 5,
    marginTop: 10,
  },
  closeButton: {
    backgroundColor: '#ff4444',
    padding: 10,
    borderRadius: 5,
    marginHorizontal: 10,
    marginBottom: 10,
  },
  buttonText: {
    color: 'white',
    textAlign: 'center',
  },
});

export default EmojiPopup;

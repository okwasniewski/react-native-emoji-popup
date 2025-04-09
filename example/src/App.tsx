import { useState } from 'react';
import {
  View,
  StyleSheet,
  TextInput,
  Text,
  Platform,
  Pressable,
} from 'react-native';
import { EmojiPopup } from 'react-native-emoji-popup';

const CloseButton = ({ close }: { close: () => void }) => (
  <Pressable onPress={close}>
    <Text style={styles.buttonText}>Close ❌</Text>
  </Pressable>
);

export default function App() {
  const [emoji, setEmoji] = useState('🫡');

  return (
    <View style={styles.container}>
      <Text style={{ fontSize: 30, marginBottom: 20 }}>
        React Native Emoji Popup ✨
      </Text>
      <TextInput value={emoji} style={{ fontSize: 50 }} />
      <EmojiPopup onEmojiSelected={setEmoji}>
        <Text style={styles.buttonText}>Open Emoji Picker</Text>
      </EmojiPopup>
      {Platform.OS === 'android' && (
        <EmojiPopup onEmojiSelected={setEmoji} closeButton={CloseButton}>
          <Text style={styles.buttonText}>
            Open Emoji Picker With Custom Close button
          </Text>
        </EmojiPopup>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  modalView: {
    flex: 1,
    backgroundColor: 'white',
    paddingTop: 50,
  },
  buttonText: {
    color: 'white',
    textAlign: 'center',
    backgroundColor: '#2196F3',
    padding: 10,
    borderRadius: 5,
  },
});

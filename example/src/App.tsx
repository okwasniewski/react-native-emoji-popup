import { useState } from 'react';
import { View, StyleSheet, TextInput, Text } from 'react-native';
import { EmojiPopup } from 'react-native-emoji-popup';

export default function App() {
  const [emoji, setEmoji] = useState('');

  return (
    <View style={styles.container}>
      <Text style={{ fontSize: 30 }}>React Native Emoji Picker</Text>
      <TextInput value={emoji} style={{ fontSize: 50 }} />
      <EmojiPopup onEmojiSelected={setEmoji}>
        <Text style={styles.buttonText}>Open Emoji Picker</Text>
      </EmojiPopup>
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

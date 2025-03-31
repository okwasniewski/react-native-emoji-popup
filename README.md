# `react-native-emoji-popup` 🌈

Emoji Popup for React Native, using native primitives. [MCEmojiPicker](https://github.com/izyumkin/MCEmojiPicker) on iOS and [Emoji2](https://developer.android.com/jetpack/androidx/releases/emoji2) on Android.

https://github.com/user-attachments/assets/a6f94dc5-6175-419c-a6e4-04ef48aaf913

## Installation

```sh
npm install react-native-emoji-popup
```

## Usage

The API is simple, just wrap your component with the `EmojiPopup` component and pass a callback to the `onEmojiSelected` prop.

```js
import { EmojiPopup } from 'react-native-emoji-popup';

export default function EmojiExample() {
  const [emoji, setEmoji] = useState('🫡');

  return (
    <View>
      <TextInput value={emoji} />
      <EmojiPopup onEmojiSelected={setEmoji}>
        <Text style={styles.buttonText}>Open Emoji Picker</Text>
      </EmojiPopup>
    </View>
  );
}
```

On Android, you can also pass a custom close button component to the `closeButton` prop.

```js
import { EmojiPopup } from 'react-native-emoji-popup';

export default function EmojiExample() {
  const [emoji, setEmoji] = useState('🫡');

  return (
    <View>
      <TextInput value={emoji} />
      <EmojiPopup
        onEmojiSelected={setEmoji}
        closeButton={(close) => <Pressable onPress={close} style={styles.buttonText}>Close</Pressable>}
      >
        <Text style={styles.buttonText}>Open Emoji Picker</Text>
      </EmojiPopup>
    </View>
  );
}
```


## Contributing

See the [contributing guide](CONTRIBUTING.md) to learn how to contribute to the repository and the development workflow.

## License

MIT

## Acknowledgements

- [MCEmojiPicker](https://github.com/izyumkin/MCEmojiPicker)

---

Made with [create-react-native-library](https://github.com/callstack/react-native-builder-bob)

<h1 align="center">
  react-native-emoji-popup 🌈
</h1>

<p align="center">
  <strong>Emoji Popup for React Native, using native primitives.
</strong><br>
</p>

<div align="center">

[![mit licence](https://img.shields.io/dub/l/vibe-d.svg?style=for-the-badge)](https://github.com/okwasniewski/react-native-emoji-popup/blob/main/LICENSE)
[![npm version](https://img.shields.io/npm/v/react-native-emoji-popup?style=for-the-badge)](https://www.npmjs.org/package/react-native-emoji-popup)
[![npm downloads](https://img.shields.io/npm/dt/react-native-emoji-popup.svg?style=for-the-badge)](https://www.npmjs.org/package/react-native-emoji-popup)
[![npm downloads](https://img.shields.io/npm/dm/react-native-emoji-popup.svg?style=for-the-badge)](https://www.npmjs.org/package/react-native-emoji-popup)
</div>

https://github.com/user-attachments/assets/a6f94dc5-6175-419c-a6e4-04ef48aaf913

## Installation

```sh
npm i react-native-emoji-popup
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

const CloseButton = ({ close }: { close: () => void }) => (
  <Pressable onPress={close}>
    <Text style={styles.buttonText}>Close ❌</Text>
  </Pressable>
);

export default function EmojiExample() {
  const [emoji, setEmoji] = useState('🫡');

  return (
    <View>
      <TextInput value={emoji} />
      <EmojiPopup
        onEmojiSelected={setEmoji}
        closeButton={CloseButton}
        style={styles.buttonText}
      >
        <Text style={styles.buttonText}>Open Emoji Picker</Text>
      </EmojiPopup>
    </View>
  );
}
```


## Props

| Prop | Type | Platform | Description | Default |
|------|------|----------|-------------|---------|
| `children` | `React.ReactNode` | iOS, Android | The component that will trigger the emoji picker when pressed | - |
| `onEmojiSelected` | `(emoji: string) => void` | iOS, Android | Callback function that receives the selected emoji as a parameter | - |
| `closeButton` | `(props: { close: () => void }) => React.ReactNode` | Android | Custom close button component that receives a close function | Default close button |
| `contentContainerStyle` | `StyleProp<ViewStyle>` | Android | Style object for customizing the emoji picker container appearance | - |
| `style` | `StyleProp<ViewStyle>` | iOS, Android | Style object for the trigger component container | - |

## Features

### Dark Mode Support

The emoji picker automatically adapts to the device's color scheme on both platforms. On Android, you can customize the color scheme by passing a `contentContainerStyle` prop to the `EmojiPopup` component and specifying the `backgroundColor` property.

## Contributing

See the [contributing guide](CONTRIBUTING.md) to learn how to contribute to the repository and the development workflow.

## License

MIT

## Acknowledgements

- [MCEmojiPicker](https://github.com/izyumkin/MCEmojiPicker) - underlying iOS library.
- [Emoji2](https://developer.android.com/jetpack/androidx/releases/emoji2) - underlying Android library.

---

Made with [create-react-native-library](https://github.com/callstack/react-native-builder-bob)

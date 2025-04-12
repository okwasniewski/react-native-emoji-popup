import {
  Modal,
  Pressable,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import EmojiPopupView from './EmojiPopupViewNativeComponent';
import { useState } from 'react';
import type { EmojiPopupProps } from './types';

const EmojiModal = ({
  children,
  onEmojiSelected,
  closeButton,
  contentContainerStyle,
}: EmojiPopupProps) => {
  const [modalVisible, setModalVisible] = useState(false);
  const colorScheme = useColorScheme();

  const close = () => setModalVisible(false);

  const backgroundColor = colorScheme === 'dark' ? '#000' : '#fff';

  return (
    <>
      <Pressable onPress={() => setModalVisible(true)}>{children}</Pressable>

      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}
      >
        <View
          style={[
            {
              backgroundColor,
            },
            styles.modalView,
            contentContainerStyle,
          ]}
        >
          {closeButton ? (
            closeButton({ close })
          ) : (
            <Pressable style={styles.closeButton} onPress={close}>
              <Text style={styles.buttonText}>Close</Text>
            </Pressable>
          )}
          <EmojiPopupView
            onEmojiSelected={({ nativeEvent: { emoji } }) => {
              setModalVisible(false);
              onEmojiSelected(emoji);
            }}
            style={styles.emoji}
          />
        </View>
      </Modal>
    </>
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
    paddingTop: 50,
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

export default EmojiModal;

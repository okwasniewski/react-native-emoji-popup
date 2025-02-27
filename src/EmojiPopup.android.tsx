import { Modal, Pressable, StyleSheet, Text, View } from 'react-native';
import EmojiPopupView from './EmojiPopupViewNativeComponent';
import { useState } from 'react';
import type { EmojiPopupProps } from './types';

const EmojiModal = ({ children, onEmojiSelected }: EmojiPopupProps) => {
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <>
      <Pressable onPress={() => setModalVisible(true)}>{children}</Pressable>

      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={styles.modalView}>
          <Pressable
            style={styles.closeButton}
            onPress={() => setModalVisible(false)}
          >
            <Text style={styles.buttonText}>Close</Text>
          </Pressable>
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
    backgroundColor: 'white',
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

import React, { useState } from 'react';
import { View, Text, Button, Modal, StyleSheet } from 'react-native';
import QRCode from 'react-native-qrcode-svg';
import Modal from 'react-native-modal';

const QRCodeGenerator = () => {
  const [isModalVisible, setModalVisible] = useState(false);

  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };

  const generateQRCode = () => {
    // Your QR code content here
    const qrCodeContent = 'https://example.com';
    return (
      <QRCode value={qrCodeContent} size={200} />
    );
  };

  return (
    <View style={styles.container}>
      <Button title="Generate QR Code" onPress={toggleModal} />
      <Modal isVisible={isModalVisible}>
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            {generateQRCode()}
            <Button title="Close" onPress={toggleModal} />
          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContent: {
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 10,
    alignItems: 'center',
  },
});

export default QRCodeGenerator;

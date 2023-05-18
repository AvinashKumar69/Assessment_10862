import React from 'react';
import {Modal, Pressable, StyleSheet, Text, View} from 'react-native';
import ImagePicker from 'react-native-image-crop-picker';
import {IconButton} from 'react-native-paper';

const CustomModal = props => {
  const {showModal, setShowModal, setLocalUri} = props;

  const pickFromGallery = () => {
    setShowModal(false);
    ImagePicker.openPicker({
      width: 300,
      height: 400,
      cropping: true,
    })
      .then(image => {
        setLocalUri(image?.path);
      })
      .catch(err => console.error(err));
  };

  const pickFromCamera = () => {
    setShowModal(false);
    ImagePicker.openCamera({
      width: 300,
      height: 400,
      cropping: true,
      useFrontCamera: true,
    })
      .then(image => {
        setLocalUri(image?.path);
      })
      .catch(err => console.error(err));
  };

  return (
    <Modal animationType="slide" transparent={true} visible={showModal}>
      <View style={styles.centeredView}>
        <View style={styles.modalView}>
          <View style={styles.iconsContainer}>
            <View style={styles.iconTextContainer}>
              <IconButton
                icon="camera"
                iconColor={'#fafafa'}
                size={30}
                onPress={pickFromCamera}
              />
              <Text style={styles.iconText}>Open Camera</Text>
            </View>

            <View style={styles.iconTextContainer}>
              <IconButton
                icon="folder"
                iconColor={'#fafafa'}
                size={30}
                onPress={pickFromGallery}
              />
              <Text style={styles.iconText}>Open Gallery</Text>
            </View>
          </View>
          <Pressable
            style={[styles.button, styles.buttonClose]}
            onPress={() => setShowModal(false)}>
            <Text style={styles.textStyle}>Cancel Image Selection</Text>
          </Pressable>
        </View>
      </View>
    </Modal>
  );
};

export default CustomModal;

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalView: {
    backgroundColor: '#293264',
    width: '100%',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    padding: 10,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
    position: 'absolute',
    bottom: 0,
  },
  button: {
    borderRadius: 10,
    padding: 5,
    elevation: 2,
  },
  buttonClose: {
    backgroundColor: '#182252',
  },
  textStyle: {
    color: '#fafafa',
    fontWeight: 'bold',
    textAlign: 'center',
    padding: 10,
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
  },
  iconsContainer: {
    flexDirection: 'row',
  },
  iconTextContainer: {
    alignItems: 'center',
    marginHorizontal: 30,
    marginVertical: 10,
  },
  iconText: {
    fontSize: 12,
    fontWeight: '600',
    color: '#fafafa',
  },
});

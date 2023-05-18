import React from 'react';
import {Image, StyleSheet, View} from 'react-native';
import {IconButton} from 'react-native-paper';

const UserProfileImage = props => {
  const {setShowModal, localUri} = props;

  return (
    <View style={styles.avatarContainer}>
      <View>
        <Image
          style={styles.avatarImage}
          source={
            localUri?.length !== 0
              ? {uri: localUri}
              : require('../assets/images/default-user.png')
          }
        />
        <IconButton
          style={styles.editIcon}
          icon="pencil-outline"
          iconColor={'#000'}
          size={20}
          onPress={() => setShowModal(true)}
        />
      </View>
    </View>
  );
};

export default UserProfileImage;

const styles = StyleSheet.create({
  avatarContainer: {
    backgroundColor: '#fafafa',
    alignItems: 'center',
  },
  avatarImage: {
    height: 150,
    width: 150,
    // resizeMode: 'contain',
    borderRadius: 500,
    borderWidth: 1,
    borderColor: 'gray',
  },
  editIcon: {
    position: 'absolute',
    right: -20,
    top: 60,
    backgroundColor: '#fafafa',
    borderWidth: 1,
    borderColor: 'gray',
  },
});

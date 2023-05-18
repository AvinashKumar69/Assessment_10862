import {PermissionsAndroid} from 'react-native';

export const requestPermission = async () => {
  try {
    // console.log('asking for permission');
    const granted = await PermissionsAndroid.requestMultiple([
      PermissionsAndroid.PERMISSIONS.CAMERA,
      PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE,
      PermissionsAndroid.PERMISSIONS.READ_EXTERNAL_STORAGE,
      PermissionsAndroid.PERMISSIONS.READ_MEDIA_IMAGES,
    ]);
    if (
      granted['android.permission.CAMERA'] &&
      granted['android.permission.WRITE_EXTERNAL_STORAGE'] &&
      granted['android.permission.READ_EXTERNAL_STORAGE'] &&
      granted['android.permission.READ_MEDIA_IMAGES']
    ) {
      // console.log('Permission granted');
    } else {
      // console.log('Permission denied');
    }
  } catch (error) {
    console.error('permission error', error);
  }
};

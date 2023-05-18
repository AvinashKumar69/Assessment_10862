import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {StyleSheet} from 'react-native';
import {Appbar} from 'react-native-paper';

const Header = props => {
  const {title, showBackButton} = props;
  const navigation = useNavigation();

  const handleBackAction = () => {
    navigation.goBack();
  };

  return (
    <Appbar.Header
      mode="center-aligned"
      style={styles.wrapperContainer}
      elevated={0}>
      {showBackButton && <Appbar.BackAction onPress={handleBackAction} />}
      <Appbar.Content title={title} titleStyle={styles.titleStyle} />
    </Appbar.Header>
  );
};

export default Header;

const styles = StyleSheet.create({
  wrapperContainer: {
    backgroundColor: '#fafafa',
  },
  titleStyle: {
    fontSize: 24,
    fontWeight: '700',
    color: '#000',
  },
});

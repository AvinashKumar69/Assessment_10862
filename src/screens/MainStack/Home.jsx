import React from 'react';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';

const Home = () => {
  return (
    <SafeAreaView style={styles.homeContainer}>
      {/* <StatusBar
        animated={true}
        backgroundColor="#273a94"
      /> */}
      <View>
        {/* <Image
          style={styles.homeImage}
          source={require('../../assets/images/hip-hip-hooray.png')}
        /> */}
        <Text style={styles.homeText}>
          Woohooo! You have successfully completed the registration process.
        </Text>
        <Text style={styles.homeText}>
          Sit back and relax, we will get back to you soon. Thank you.
        </Text>
      </View>
    </SafeAreaView>
  );
};

export default Home;

const styles = StyleSheet.create({
  homeContainer: {
    backgroundColor: '#273a94',
    minHeight: '100%',
    justifyContent: 'center',
  },
  homeImage: {
    width: 250,
    height: 250,
    borderWidth: 1,
    borderColor: 'red',
    borderRadius: 1000,
    paddingVertical: '10%',
    resizeMode: 'contain',
    marginVertical: '10%',
  },
  homeText: {
    fontSize: 20,
    color: '#000',
    textAlign: 'center',
    paddingHorizontal: '10%',
    paddingVertical: '5%',
  },
});

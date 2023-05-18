/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import {NavigationContainer} from '@react-navigation/native';
import React, {useEffect} from 'react';
import {Platform} from 'react-native';
import {Provider as PaperProvider} from 'react-native-paper';
import {SafeAreaProvider} from 'react-native-safe-area-context';

import {RootNavigation} from './src/navigation/index';
import {requestPermission} from './src/services/Permissions';

function App() {
  useEffect(() => {
    if (Platform.OS !== 'ios') {
      requestPermission();
    }
  }, []);

  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <PaperProvider>
          <RootNavigation />
        </PaperProvider>
      </NavigationContainer>
    </SafeAreaProvider>
  );
}

export default App;

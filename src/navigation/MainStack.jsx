import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';

import Home from '../screens/MainStack/Home';

const MainStack = () => {
  const MStack = createNativeStackNavigator();

  return (
    <MStack.Navigator
      initialRouteName="Signup"
      screenOptions={{headerShown: false}}>
      <MStack.Screen name="Home" component={Home} />
    </MStack.Navigator>
  );
};

export default MainStack;

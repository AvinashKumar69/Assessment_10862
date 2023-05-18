import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';

import AddressInfo from '../screens/AuthStack/AddressInfo';
import BasicInfo from '../screens/AuthStack/BasicInfo';
import ProfessionalInfo from '../screens/AuthStack/ProfessionalInfo';

const AuthStack = () => {
  const AStack = createNativeStackNavigator();

  return (
    <AStack.Navigator
      initialRouteName="BasicInfo"
      screenOptions={{headerShown: false}}>
      <AStack.Screen name="BasicInfo" component={BasicInfo} />
      <AStack.Screen name="ProfessionalInfo" component={ProfessionalInfo} />
      <AStack.Screen name="AddressInfo" component={AddressInfo} />
    </AStack.Navigator>
  );
};

export default AuthStack;

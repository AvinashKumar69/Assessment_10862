import React from 'react';

import AuthStack from './AuthStack';
import MainStack from './MainStack';

export const RootNavigation = () => {
  const userAuthenticated = false;

  return userAuthenticated ? <MainStack /> : <AuthStack />;
};

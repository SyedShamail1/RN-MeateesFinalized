import React from 'react';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';

import BottomTabNavigator from './BottomTabNavigator';
import Login from '../../../Forms/Login'


export default createAppContainer(
  createSwitchNavigator({
    Main: BottomTabNavigator,
    Auth: Login,
  })
);
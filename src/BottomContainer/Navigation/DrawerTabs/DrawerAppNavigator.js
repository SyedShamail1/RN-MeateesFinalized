import React from 'react';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';

import drawerAppNavigator from './DrawerNavigator'


export default createAppContainer(
  createSwitchNavigator({
    Main: drawerAppNavigator,
  })
);
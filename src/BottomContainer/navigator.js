import React, {Component} from 'react';
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Image,
  Dimensions,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import {createStackNavigator, HeaderTitle} from 'react-navigation-stack';
import Chicken from '../ProductComponents/Chicken';
import Lamb from '../ProductComponents/Lamb';
import Mutton from '../ProductComponents/Mutton';
import oChicken from '../ProductComponents/organic_chicken';
import Veal from '../ProductComponents/Veal';
import Beef from '../ProductComponents/beef';


export default createStackNavigator({
  
  Chicken: {
    screen: Chicken,
    navigationOptions: ({navigation}) => {
      return {
        HeaderTitle: 'Chicken Items',
      };
    },
  },
  Veal: {
    screen: Veal,
  },
  Beef: {
    screen: Beef,
  },
  Mutton: {
    screen: Mutton,
  },
  Lamb: {
    screen: Lamb,
  },
  oChicken: {
    screen: oChicken,
  },
});

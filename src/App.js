/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {Component} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';

import AppNavigator from './BottomContainer/Navigation/BottomTabs/BottomAppNavigator'


export default class App extends Component{
render() {
  return (
   

    
    <AppNavigator />
    
  )
}
}

const styles = StyleSheet.create({
  
});


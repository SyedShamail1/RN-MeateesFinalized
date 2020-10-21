import React, {Component} from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
} from 'react-native';

import SignIn from './SignIn';
import SignUp from './Signup';

import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';

const AppNavigator = createStackNavigator(
  {
    LogInn: SignIn,
    LogOut: SignUp,
  },
  {
    initialRouteName: 'LogInn',
  },
);

const AppContainer = createAppContainer(AppNavigator);
console.log(AppNavigator);

export default class Login extends Component {
  render() {
    return <AppContainer />;
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  form: {
    alignItems: 'center',
    borderWidth: 1,
    margin: 4,
    padding: 10,
  },
  heading: {
    fontSize: 22,
    fontWeight: 'bold',
  },
  fline: {
    margin: 20,
    fontSize: 14,
  },
  inputTags: {
    fontSize: 18,
  },
  input: {
    margin: 15,
    backgroundColor: '#fff',
    width: '95%',
    borderWidth: StyleSheet.hairlineWidth,
  },
  btnContainer: {
    width: '90%',
    justifyContent: 'space-between',
    margin: 20,
    flexDirection: 'row',
  },
  btn: {
    padding: 20,
    backgroundColor: '#FFD700',
    width: '45%',
  },
  btnText: {
    textAlign: 'center',
    fontSize: 15,
    fontWeight: 'bold',
  },
});

import React, {Component} from 'react';
import {
  
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Image,
  Dimensions,
  ScrollView,
} from 'react-native';
import Header from '../Header'

export default class HomeScreen extends Component {
    render() {
      return (
       <View >
         <ScrollView>
         
       <Header />
       </ScrollView>
        </View>
      );
    }
  }
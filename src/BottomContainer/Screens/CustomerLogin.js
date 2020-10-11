import React, {Component} from 'react';
import {
  StyleSheet,
  View,
  ScrollView,
} from 'react-native';
import Header from '../Header'
import Footer from '../Footer'
import Login from '../../Forms/Login'

export default class CustomerLogin extends Component {
    render() {
      return (
       <View style={styles.container}>
         <ScrollView>
         <View style={{flex: 1}}>
         <Header />
         </View>

         <View style={{flex: 0.8}}>
        <Login />
         </View>

         <View style={{flex: 0.20}}>
          <Footer />
          </View>
         </ScrollView>
       
        </View>
      );
    }
  }

  const styles = StyleSheet.create({
    container: {
      flex: 1,
    }
  })
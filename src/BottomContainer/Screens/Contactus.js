import React, {Component} from 'react';
import {
  View,
  ScrollView,
} from 'react-native';

import Header from '../Header'
import Footer from '../Footer'
import ContactusForm from '../../Forms/ContactUsForm'

export default class ContactUs extends Component {
    render() {
      return (
       <View style={{flex: 1}}>
         <ScrollView>
         <View style={{flex: 1}}>
         <Header/>
         </View>

         <View style={{flex: 0.8}}>
        <ContactusForm />
         </View>

         <View style={{flex: 0.20}}>
          <Footer />
          </View>
         </ScrollView>
       
        </View>
      );
    }
  }
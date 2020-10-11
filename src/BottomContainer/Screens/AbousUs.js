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
import Footer from '../Footer'

export default class AboutUs extends Component {
    render() {
      return (
       <View style={{flex: 1}}>
         <ScrollView>

       <View style={{flex: 1}}>
        <Header/>
        </View>
        
        <View style={styles.content}>

        <Text style={styles.heading}>About Us</Text>

        <Text style={styles.text}>Meatees LLC is a food-tech company that specializes in delivering fresh halal meat,
         grocery and catering services to your doorstep. 
        Our vision is to be the leading food-tech company,
         which provides convenience whilst prioritizing top notch shopping experience for its customers.</Text>

         <Text style={styles.text}>We work with our carefully selected vendors under co-packing agreement.
          We maintain top quality standards, specialize in temperature controlled delivery to maintain the freshness of your order.</Text>

         <Text style={styles.text}>Meatees LLC is a food-tech company that specializes in delivering fresh halal meat,
         grocery and catering services to your doorstep. 
        Our vision is to be the leading food-tech company,
         which provides convenience whilst prioritizing top notch shopping experience for its customers.</Text>

        </View>

        <View style={{flex: 0.20}}>
          <Footer />
          </View>
        </ScrollView>
        </View>
      );
    }
  }

  const styles=StyleSheet.create({
    content: {
      flex: 0.8,
      borderWidth: StyleSheet.hairlineWidth,
      marginTop: 5,
      alignItems: 'center',
      padding: 10,
      margin: 7,
    },

    heading: {
      fontSize: 24,
      margin: 15,
      fontWeight: 'bold',
    },
    text: {
      margin: 7,
      textAlign: 'justify',
    }
  })
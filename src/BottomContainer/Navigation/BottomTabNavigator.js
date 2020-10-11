import React, {Component} from 'react'
import {createBottomTabNavigator} from 'react-navigation-tabs'

import HomeScreen from '../Screens/Home'
import AboutUs from '../Screens/AbousUs'
import ContactUs from '../Screens/Contactus'
import CustomerLogin from '../Screens/CustomerLogin'

import {
  
    StyleSheet,
    Text,
    View,
    SafeAreaView,
    Image,
    Dimensions,
    ScrollView,
  } from 'react-native';

const TabNavigator = createBottomTabNavigator({
    Home: {
      screen: HomeScreen,
      navigationOptions:()=>{
  
        return{
          tabBarLabel: 'HOME',
          tabBarIcon: ({tintColor}) => 
            <Image source={require('../../Images/home.png')} 
            style = {{height: 24, width: 24, tintColor: tintColor}}/>,
            tabBarOptions: {
                 activeTintColor: 'red',
            inactiveTintColor: 'black',
            style:{
              
              fontWeight: 'bold',
            }
          }  
                   
        } 
      }
    },
    AbousUs: {
      screen: AboutUs,
      navigationOptions:()=>{
        return {
          tabBarLabel: 'ABOUT US',
          tabBarIcon: ({tintColor}) => 
          <Image source={require('../../Images/aboutus.png')}
          style={{height: 24, width: 24, tintColor: tintColor}}/>,
          tabBarOptions: {
            activeTintColor: 'red',
       inactiveTintColor: 'black',
       style: {
        
         fontWeight: 'bold',
       }
     }
        }
      }
    },
    ContactUs: {
      screen: ContactUs,
      navigationOptions: ()=>{
        return {
          tabBarLabel: 'CONTACT US',
          tabBarIcon: ({tintColor}) => 
          <Image source={require('../../Images/contactus.png')}
          style={{height: 24, width: 24, tintColor: tintColor}}/>,
          tabBarOptions: {
            activeTintColor: 'red',
       inactiveTintColor: 'black',
       style: {
         
         fontWeight: 'bold',
       }
     }
        }
      }
    },
    CustomerLogin: {
      screen: CustomerLogin,
      navigationOptions: ()=>{
        return {
          tabBarLabel: 'CUSTOMER LOGIN',
          tabBarIcon: ({tintColor}) => 
          <Image source={require('../../Images/login.png')}
          style={{height: 24, width: 24, tintColor: tintColor}}/>,
          tabBarOptions: {
                 activeTintColor: 'red',
            inactiveTintColor: 'black',
            style: {
              
              fontWeight: 'bold',
            }
          }
        }
      }
    },
    
      
    
  
  
  });
  
  export default TabNavigator;
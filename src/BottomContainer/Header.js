import React, {Component} from 'react';
import {
  StyleSheet,
  View,
  Image,
  StatusBar,
  Dimensions,
} from 'react-native';

import {Header, Icon} from 'react-native-elements'
import {DrawerActions} from 'react-navigation-drawer'
import Drawer from '../BottomContainer/Navigation/DrawerTabs/AppDrawer'
import Swiper from 'react-native-swiper'




export default class header extends Component {
    render() {
        return(
            <View style={styles.container}>
              <StatusBar
              backgroundColor= "transparent"
              barStyle="light-content"/>

              <View style={{flex: 1, borderBottomWidth: StyleSheet.hairlineWidth}}>
                  <Header backgroundColor="transparent"
                leftComponent={{ icon: 'menu'}}
                centerComponent={{ text: 'Meatees', style: { color: 'black', fontSize: 22, fontWeight: 'bold' } }}
                rightComponent={{ icon: 'home', color: 'black' }}/>
                </View>

              
                <View style={{marginTop: 20, alignItems: 'center', width: Dimensions.get('window').width,}} >
                  <Image source={{uri: 'https://www.meatees.com/pub/media/wysiwyg/smartwave/porto/homepage/21/slider/885x366xslide2.jpg.pagespeed.ic.5U21H8L_k3.webp'}}
                  style={{height: 160, width: "95%", borderRadius: 10,}}/>
                </View>
                

                


                

</View>
  
        )
}

}

const styles = StyleSheet.create({
    container: {
        
       
    }
})
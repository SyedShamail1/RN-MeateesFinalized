import React, {Component} from 'react';
import {
  StyleSheet,
  View,
  Image,
  StatusBar,
} from 'react-native';

import {Header} from 'react-native-elements'


export default class header extends Component {
    render() {
        return(
            <View style={styles.container}>
              <StatusBar
              backgroundColor= "transparent"
              barStyle="light-content"/>

              <View style={{flex: 1, borderBottomWidth: StyleSheet.hairlineWidth}}>
                  <Header backgroundColor="transparent"
                leftComponent={{ icon: 'menu', color: 'black' }}
                centerComponent={{ text: 'Meatees', style: { color: 'black', fontSize: 22, fontWeight: 'bold' } }}
                rightComponent={{ icon: 'home', color: 'black' }}/>
                </View>

                <View style={{marginTop: 2}} >
                  <Image source={{uri: 'https://www.meatees.com/pub/media/wysiwyg/smartwave/porto/homepage/21/slider/885x366xslide2.jpg.pagespeed.ic.5U21H8L_k3.webp'}}
                  style={{height: 260}}/>
                </View>


                

</View>
  
        )
}

}

const styles = StyleSheet.create({
    container: {
        
       
    }
})
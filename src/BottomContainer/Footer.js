import React, {Component} from 'react';
import { 
  StyleSheet,
  Text,
  View,
  Image, 
} from 'react-native';




export default class Footer extends Component {
    render() {
        return(
            <View style={{flex: 1}}>
                <View style={styles.fcontainer}>

                    <Image source={require('../Images/halaal.png')}
                    style={styles.image}/>

                    <Image source={require('../Images/credit.png')}
                    style={styles.cimage}/>


                    <Text style={styles.text} >Copyright © Meatees™ LLC - Designed and developed by Aciano Technologies</Text>
                </View>

            </View>
        )
    }
}

const styles= StyleSheet.create({
        fcontainer: {
            backgroundColor: '#161616',
            color: '#fff',
            alignItems: 'center',
            padding: 30,
        },
        image: {
            height: 100, 
            width: 100, 
            margin: 20,
        },

        cimage: {
            height: 20,
            width: 200,
            margin: 20,
        },
        text: {
            fontSize: 12,
            color: '#fff',
            textAlign: 'center',
            margin: 10,
        }
    
})
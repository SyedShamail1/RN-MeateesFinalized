import React, {Component} from 'react';
import { 
  StyleSheet,
  Text,
  View,
  Image, 
  TouchableOpacity,
  TextInput,
  ScrollView,
} from 'react-native';




export default class Veal extends Component {
    state={
        count: 0,
    }
    render() {
        return(
                
                <ScrollView>
                
                <View style={styles.Component}>
                    <Text style={styles.text} >Veal</Text>

                   <Image source={{uri: 'https://www.meatees.com/pub/media/wysiwyg/smartwave/porto/homepage/21/slider/885x366xslide2.jpg.pagespeed.ic.5U21H8L_k3.webp'}}
                   style={styles.image}/>

                    <View style={styles.btnContainer}>
                       <TouchableOpacity style={styles.btn}>
                           <Text style={styles.btntext}>-</Text>
                       </TouchableOpacity>

                        <TextInput
                        style={styles.input}
                        placeholder='0'/>

                       <TouchableOpacity style={styles.btn}>
                           <Text style={styles.btntext}>+</Text>
                       </TouchableOpacity>
                       </View>

                       <Text style={styles.htext}>Veal Pieces</Text>

                       <TouchableOpacity style={styles.cart}>
                           <Text style={styles.text,{textAlign: 'center'}}>Add to Cart</Text>
                       </TouchableOpacity>

                   

                </View>
                </ScrollView>

              
        )
    }
}

const styles= StyleSheet.create({
    conainer: {
        flex: 1,
        height: 200,
    },
    Component: {
        width: 300,
        padding: 5,
        borderWidth: StyleSheet.hairlineWidth,
        height: 300,
        alignItems: 'center',
    },
    text:{
        fontSize: 22,
        fontWeight: 'bold',
        margin: 5,
    },
    image: {
        height: 130, 
        width: 240,
        
    },
    btnContainer: {
        margin: 2,
        flexDirection: 'row',
        width: "80%",
        justifyContent: 'space-between',
    },
    btn: {
        padding: 2,
    },
    btntext: {
        fontSize: 18,
        fontWeight: 'bold',
        padding: 6,
        backgroundColor: '#161616',
        color: '#fff',
        margin: 6,
    },
    input: {
        backgroundColor: '#fff',
        color: '#161616',
        borderWidth: StyleSheet.hairlineWidth,
        width: '70%',
        marginTop: 10,
        height: 35,
        
    },
    htext:{
        fontSize: 20,
        fontWeight: 'bold',
        
        
    },
    cart: {
        padding: 5,
        margin: 5,
        backgroundColor: '#FFD700',
        fontWeight: 'bold',
        width: '70%',
    }
})
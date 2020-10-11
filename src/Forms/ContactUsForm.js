import React, {Component} from 'react';
import {
  
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
} from 'react-native';

export default class ContactUsForm extends Component {
    render() {
        return (
    
    <View style={styles.container}>
        
        <View style={styles.form}>
            <Text style={styles.heading}>Contact Us</Text>

            

            <Text style={styles.inputTags}>Name *</Text>

            <TextInput
            style={styles.input}
            placeholder="Name"/>

            <Text style={styles.inputTags}>Email *</Text>

            <TextInput
            style={styles.input}
            placeholder="Email"
            />

            <Text style={styles.inputTags}>Phone Number *</Text>

            <TextInput
            style={styles.input}
            placeholder="Phone Number"
            />

            <TextInput
            style={styles.fcontainer}
            />

            
                <TouchableOpacity style={styles.btn}>
                    <Text style ={styles.btnText}>Submit</Text>
                </TouchableOpacity>

               


        </View>
    </View>
    )
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
        margin: 10,
        marginBottom: 20,
    },
    
    inputTags: {
        fontSize: 18,
        margin: 10,
        marginTop: 15,
    },
    input: {
        margin: 15,
        backgroundColor: '#fff',
        width: '95%',
        borderWidth: StyleSheet.hairlineWidth,
    },
   
    
    btn: {
        padding: 20,
        backgroundColor: "#FFD700",
        width: '45%',
        marginTop: 20,
    },
    btnText: {
        textAlign: 'center',
        fontSize: 15,
        fontWeight: 'bold',
    },
    fcontainer: {
        margin: 15,
        backgroundColor: '#fff',
        width: '95%',
        borderWidth: StyleSheet.hairlineWidth,
        height: 120,
        marginTop: 40,
    }
})
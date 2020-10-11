import React, {Component} from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
} from 'react-native';

export default class Login extends Component {
    render() {
        return (
    
    <View style={styles.container}>
        
        <View style={styles.form}>
            <Text style={styles.heading}>Sign in</Text>

            <Text style={styles.fline}>If you have an account, sign in with your email address.</Text>

            <Text style={styles.inputTags}>Email *</Text>

            <TextInput
            style={styles.input}
            placeholder="Email"/>

            <Text style={styles.inputTags}>Password *</Text>

            <TextInput
            style={styles.input}
            placeholder="Password"
            secureTextEntry/>

            <View style={styles.btnContainer}>
                <TouchableOpacity style={styles.btn}>
                    <Text style ={styles.btnText}>Sign In</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.btn}>
                    <Text style={styles.btnText}>Sign up</Text>
                </TouchableOpacity>
            </View>


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
    },
    fline: {
        margin: 20,
        fontSize: 14,
    },
    inputTags: {
        fontSize: 18,
    },
    input: {
        margin: 15,
        backgroundColor: '#fff',
        width: '95%',
        borderWidth: StyleSheet.hairlineWidth,
    },
    btnContainer: {
        width: "90%",
        justifyContent: 'space-between',
        margin: 20,
        flexDirection: 'row',
    },
    btn: {
        padding: 20,
        backgroundColor: "#FFD700",
        width: '45%',
    },
    btnText: {
        textAlign: 'center',
        fontSize: 15,
        fontWeight: 'bold',
    }
})
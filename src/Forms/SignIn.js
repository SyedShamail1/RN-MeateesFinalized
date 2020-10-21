import React, {Component} from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  ScrollView,
  Image,
  Dimensions,
} from 'react-native';
import Header from '../BottomContainer/Header';
import Footer from '../BottomContainer/Footer';
import SignUp from './Signup';

export default class SignIn extends Component {
  render() {
    return (
      <View style={styles.container}>
        <ScrollView>
          <View
            style={{
              marginTop: 20,
              alignItems: 'center',
              width: Dimensions.get('window').width,
              flex: 1,
            }}>
            <Image
              source={{
                uri:
                  'https://www.meatees.com/pub/media/wysiwyg/smartwave/porto/homepage/21/slider/885x366xslide2.jpg.pagespeed.ic.5U21H8L_k3.webp',
              }}
              style={{height: 160, width: '95%', borderRadius: 10}}
            />
          </View>

          <View style={{flex: 0.8}}>
            <View style={styles.form}>
              <Text style={styles.heading}>Sign in</Text>

              <Text style={styles.fline}>
                If you have an account, sign in with your email address.
              </Text>

              <Text style={styles.inputTags}>Email *</Text>

              <TextInput style={styles.input} placeholder="Email" />

              <Text style={styles.inputTags}>Password *</Text>

              <TextInput
                style={styles.input}
                placeholder="Password"
                secureTextEntry
              />

              <View style={styles.btnContainer}>
                <TouchableOpacity style={styles.btn}>
                  <Text style={styles.btnText}>Sign In</Text>
                </TouchableOpacity>

                <TouchableOpacity
                  style={styles.btn}
                  onPress={() => this.props.navigation.navigate('SignUp')}>
                  <Text style={styles.btnText}>Sign up</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>

          <Footer />
        </ScrollView>
      </View>
    );
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
    width: '90%',
    justifyContent: 'space-between',
    margin: 20,
    flexDirection: 'row',
  },
  btn: {
    padding: 20,
    backgroundColor: '#FFD700',
    width: '45%',
  },
  btnText: {
    textAlign: 'center',
    fontSize: 15,
    fontWeight: 'bold',
  },
});

import React, {Component} from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Dimensions,
  ScrollView,
  Image,
} from 'react-native';
import Footer from '../BottomContainer/Footer';

export default class SignUp extends Component {
  render() {
    return (
      <View style={styles.container}>
        <ScrollView>
          <View
            style={{
              marginTop: 20,
              alignItems: 'center',
              width: Dimensions.get('window').width,
            }}>
            <Image
              source={{
                uri:
                  'https://www.meatees.com/pub/media/wysiwyg/smartwave/porto/homepage/21/slider/885x366xslide2.jpg.pagespeed.ic.5U21H8L_k3.webp',
              }}
              style={{height: 160, width: '95%', borderRadius: 10}}
            />
          </View>
          <View style={styles.form}>
            <Text style={styles.heading}>PERSONAL INFORMATION</Text>

            <Text style={styles.inputTags}>First Name *</Text>

            <TextInput style={styles.input} placeholder="First Name" />

            <Text style={styles.inputTags}>Middle Name *</Text>

            <TextInput style={styles.input} placeholder="Middle Name" />

            <Text style={styles.inputTags}>Last Name *</Text>

            <TextInput style={styles.input} placeholder="Last Name" />

            <Text style={styles.heading}>SIGN IN INFORMATION</Text>

            <Text style={styles.inputTags}>Email *</Text>

            <TextInput style={styles.input} placeholder="Enter Email" />

            <Text style={styles.inputTags}>Password *</Text>

            <TextInput
              style={styles.input}
              placeholder="Password"
              secureTextEntry
            />

            <Text style={styles.inputTags}>Confirm Password *</Text>

            <TextInput
              style={styles.input}
              placeholder="Confirm Password"
              secureTextEntry
            />

            <TouchableOpacity
              style={styles.btn}
              onPress={() => alert('signup done')}>
              <Text style={styles.btnText}>CREATE AN ACCOUNT</Text>
            </TouchableOpacity>
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
    marginBottom: 15,
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
    width: '65%',
    marginTop: 15,
    marginBottom: 10,
  },
  btnText: {
    textAlign: 'center',
    fontSize: 15,
    fontWeight: 'bold',
  },
});

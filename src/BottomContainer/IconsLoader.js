import React, {Component} from 'react';
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Image,
  Dimensions,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import {createStackNavigator, HeaderTitle} from 'react-navigation-stack';
import Chicken from '../ProductComponents/Chicken';
import Lamb from '../ProductComponents/Lamb';
import Mutton from '../ProductComponents/Mutton';
import oChicken from '../ProductComponents/organic_chicken';
import Veal from '../ProductComponents/Veal';
import Beef from '../ProductComponents/beef';
import Navigator from './navigator';

const ProdNavigator = createStackNavigator({
  Chicken: {
    screen: Chicken,
    navigationOptions: ({navigation}) => {
      return {
        HeaderTitle: 'Chicken Items',
      };
    },
  },
});

export default class IconsLoader extends Component {
  render() {
    return (
      <View style={styles.IconContainer}>
        <View style={styles.fIcons}>
          <View style={{alignItems: 'center'}}>
            <TouchableOpacity
              onPress={() => this.props.navigation.navigate('onChicken')}>
              <Image
                source={require('../Images/chickenNew.png')}
                style={styles.Icons}
              />
            </TouchableOpacity>

            <Text style={styles.iconText}>Chicken</Text>
          </View>

          <View style={{alignItems: 'center'}}>
            <TouchableOpacity onPress={() => this.props.set('organic chicken')}>
              <Image
                source={require('../Images/chickenNew.png')}
                style={styles.Icons}
              />
            </TouchableOpacity>

            <Text style={styles.iconText}> Organic Chicken</Text>
          </View>

          <View style={{alignItems: 'center'}}>
            <TouchableOpacity onPress={() => this.props.set('lamb')}>
              <Image
                source={require('../Images/lamb.png')}
                style={styles.Icons}
              />
            </TouchableOpacity>
            <Text style={styles.iconText}>Lamb</Text>
          </View>
        </View>

        <View style={styles.lIcons}>
          <View style={{alignItems: 'center'}}>
            <TouchableOpacity onPress={() => this.props.set('mutton')}>
              <Image
                source={require('../Images/GoatNew.png')}
                style={{height: 74, width: 64, margin: 7}}
              />
            </TouchableOpacity>

            <Text style={styles.iconText}>Goat</Text>
          </View>

          <View style={{alignItems: 'center'}}>
            <TouchableOpacity onPress={() => this.props.set('beef')}>
              <Image
                source={require('../Images/CalfNew.png')}
                style={styles.Icons}
              />
            </TouchableOpacity>

            <Text style={styles.iconText}>Beef</Text>
          </View>

          <View style={{alignItems: 'center'}}>
            <TouchableOpacity onPress={() => this.props.set('Veal')}>
              <Image
                source={require('../Images/CalfNew.png')}
                style={styles.Icons}
              />
            </TouchableOpacity>

            <Text style={styles.iconText}>Veal</Text>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  IconContainer: {
    flex: 0.9,
    height: 230,
    backgroundColor: '#fff',
    padding: 5,
    alignItems: 'center',
    marginTop: 5,
  },
  Icons: {
    height: 64,
    width: 64,
    backgroundColor: '#fff',

    borderWidth: StyleSheet.hairlineWidth,
    margin: 10,
  },
  fIcons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '88%',
  },
  lIcons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '88%',
  },
  iconText: {
    margin: 6,
    fontSize: 16,
    fontWeight: 'bold',
  },
});

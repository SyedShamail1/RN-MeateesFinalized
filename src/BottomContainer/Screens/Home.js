import React, {Component} from 'react';
import {
  
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Image,
  Dimensions,
  ScrollView,
  TouchableOpacity
} from 'react-native';
import Header from '../Header'
import ChickenComponent from '../../ProductComponents/Chicken'
import VealComponent from '../../ProductComponents/Veal'
import MuttonComponent from '../../ProductComponents/Mutton'
import LambComponent from '../../ProductComponents/Lamb'
import BeefComponent from '../../ProductComponents/beef'
import OrganicChickenComponent from '../../ProductComponents/organic_chicken'
import Imageslider from '../../BottomContainer/Screens/imageCarousel'
import Footer from '../Footer'
import Icons from '../IconsLoader'

export default class HomeScreen extends Component {



  state={

    item:"chicken"

  }


  set=(text)=>{

      this.setState({

        item:text
      })
  }


  renderComponent=()=>{

        if(this.state.item=="chicken"){

          return  <ChickenComponent style={{flex: 0.8}} />
        }

        else if(this.state.item=="lamb"){

              return  <LambComponent style={{flex: 0.6}}/>
        }
    
    else if(this.state.item=="mutton"){

      return  <MuttonComponent style={{flex: 0.6}}/>
    }
    else if(this.state.item=="beef"){

      return  <BeefComponent style={{flex: 0.6}}/>
    }
    else if(this.state.item=="organic chicken"){

      return  <OrganicChickenComponent style={{flex: 0.6}}/>
    }

    else if(this.state.item=="Veal"){

      return  <VealComponent style={{flex: 0.6}}/>
    }

        else {

          return null
        }
  }

    render() {
      return (
        
       <View style={styles.container} >
         <ScrollView>
         
         <View style={{flex: 1}}>
       <Header />
       </View>

       <View style={{flex: 1}}>
         <Icons set={this.set} />
       </View>

       <View style={styles.componentContainer}>

      
        <Imageslider/>
        
        
    
       </View>

       
       <View style={{flex: 0.20}}>
          <Footer />
          </View>

       </ScrollView>
        </View>
        
      );
    }
  }
  const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
    componentContainer: {
      flex: 1, 
      borderWidth: StyleSheet.hairlineWidth,
      margin: 10,
      marginTop: 30,
      alignItems: 'center', 
      padding: 30,
      
    },
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
        borderColor: '#161616',
         borderRadius: 12,
           borderWidth: StyleSheet.hairlineWidth,
           margin: 10,
           
    },
    fIcons: {
      flexDirection: 'row',
         justifyContent: 'space-between',
         width: '80%',
    },
    lIcons: {
      flexDirection: 'row',
         justifyContent: 'space-between',
         width: '80%',
    },
    iconText: {
      margin: 6,
      fontSize: 16,
      fontWeight: 'bold',
    }
  })
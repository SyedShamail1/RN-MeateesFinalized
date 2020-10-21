import React, {Component} from 'react'
import {
    Image,
    View,
    Text,
    ScrollView,
} from 'react-native'

import { SliderBox } from "react-native-image-slider-box";

export default class ImageSlider extends Component{
    constructor(props) {
        super(props);
        this.state = {
          images: [
            'https://cdn.shopify.com/s/files/1/0153/6960/1088/products/Halal_Chicken_Drumsticks_1_of_1_480x320.jpg?v=1571777433',
            'https://static.wixstatic.com/media/87f80a_8c95031eaf37479b95917c5ee09c7ee4.jpg/v1/fill/w_387,h_260,al_c,q_80,usm_0.66_1.00_0.01/87f80a_8c95031eaf37479b95917c5ee09c7ee4.webp',
            'https://static.wixstatic.com/media/87f80a_91a6ac3c6de7472687ebe1ca59428d45.jpg',
            'https://cdn.shopify.com/s/files/1/0153/6960/1088/products/Beef_Ground_1_of_1_-6_8b379c21-a4b6-41d9-a657-d959a940b50f_480x352.jpg?v=1571777437',
            'https://cdn.shopify.com/s/files/1/0153/6960/1088/products/Halal_Chicken_Breast_WeGotMeat_480x320.jpg?v=1571777430',
          ]
        };
      }

      render(){
          return(
              <View style={{flex: 1, alignItems: 'center'}}>
              
                  <SliderBox
                   images={this.state.images} 
                  ImageComponentStyle={{borderRadius: 15, width: '85%', marginTop: 5}}
                  autoplay />

                  <Text style= {{fontFamily: 'Roboto', fontSize: 18,}}> Fresh meat delivered to your door step</Text>
              </View>
          )
      }
}
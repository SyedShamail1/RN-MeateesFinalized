import React, {Component} from 'react'
import {TouchableOpactiy,  StyleSheet} from 'react-native'
import {IonIcons } from 'react-native-vector-icons'

import {withNavigation} from 'react-navigation'
import {DrawerActions} from 'react-navigation-drawer'

class DrawerTrigger extends Component{
    render(){
        return (
            <TouchableOpactiy 
            style={StyleSheet.trigger}
            onPress={()=>{
                this.props.navigation.dispatch(DrawerActions.openDrawer())
            }}>

                <IonIcons
                name={'md-arrow-round-forward'}
                size={47}
                color={'grey'}/>

            </TouchableOpactiy>
        )

    }
}

const styles=StyleSheet.create({
    trigger: {
        marginLeft: 27.5,
        borderRadius: 30,
        width: 60,
        height: 60,
    }
});

export default withNavigation(DrawerTrigger)
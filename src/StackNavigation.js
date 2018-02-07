import React from 'react';
import {StackNavigator} from 'react-navigation';
import Reg from '../src/Reg';
import Login from '../src/Login';
import Home from './Home';
import Screen1 from './Screen1';
import Screen2 from './Screen2';
import Screen3 from './Screen3';
import {TouchableOpacity,Image} from 'react-native';

import { DrawerNavigator } from "react-navigation";

const DrawerStack = DrawerNavigator({
    Home:
        {
            screen:Home,
            headerMode: 'float',
            navigationOptions:{
                headerStyle: {backgroundColor: '#4C3E54'},
                title: 'Home',
                headerTintColor: 'white',
            },
        },
    Screen1:
        {
            screen: Screen1,
            headerMode: 'float',
        navigationOptions:{
            headerStyle: {backgroundColor: '#4C3E54'},
            title: 'Screen1',
            headerTintColor: 'white',
        },

        },
    screen2:
        {
            screen: Screen2,
            headerMode: 'float',
            navigationOptions:{
                headerStyle: {backgroundColor: '#4C3E54'},
                title: 'Screen2',
                headerTintColor: 'white',
            },


        },
    screen3:
        {
            screen: Screen3,
            headerMode: 'float',
            navigationOptions:{
                headerStyle: {backgroundColor: '#4C3E54'},
                title: 'Screen3',
                headerTintColor: 'white',
            },
        },
})
const RootNavigator = StackNavigator({


    Login:{
        screen:Login,
        navigationOptions:{
            headerTitle: 'Login'
        },
    },

    Reg:{
    screen:Reg,
        navigationOptions:{
            headerTitle: 'Reg'
        },
    },
    Home:{
        screen:DrawerStack
        },

},
    {
    navigationOptions:{
        initialPage:'Home'
    }
});

export default RootNavigator;
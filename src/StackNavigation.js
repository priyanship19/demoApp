import React from 'react';
import {StackNavigator} from 'react-navigation';
import Reg from '../src/Reg';
import Login from '../src/Login';
import Home from '../src/Home';
import Screen1 from '../src/Screen1';
import Screen2 from '../src/Screen2';
import Screen3 from '../src/Screen3';
import SubCategory from '../src/SubCategory';


import {TouchableOpacity,Image,View} from 'react-native';

import { DrawerNavigator } from "react-navigation";


const DrawerStack = DrawerNavigator({


    Home:
        {
            screen: Home,
            headerMode: 'float',
            navigationOptions: {
                headerStyle: {backgroundColor: '#4C3E54'},
                title: 'Home',
                headerTintColor: 'white',
            },
        },
    Screen1:
        {
            screen: Screen1,
            headerMode: 'float',
            navigationOptions: {
                headerStyle: {backgroundColor: '#4C3E54'},
                title: 'Screen1',
                headerTintColor: 'white',

            },

        },
    screen2:
        {
            screen: Screen2,
            headerMode: 'float',
            navigationOptions: {
                headerStyle: {backgroundColor: '#4C3E54'},
                title: 'Screen2',
                headerTintColor: 'white',

            },


        },
    screen3:
        {
            screen: Screen3,
            headerMode: 'float',
            navigationOptions: {
                headerStyle: {backgroundColor: '#4C3E54'},
                title: 'Screen3',
                headerTintColor: 'white',

            },
        },

},
    {

        headerLeft:null
    }
    );
const RootNavigator = StackNavigator({

    Login: {
        screen: Login,
        navigationOptions: {
            headerTitle: 'Login',
            headerLeft:null,
            headerStyle: {backgroundColor: '#C2E7F2'},
        },
    },
    Reg: {
        screen: Reg,
        navigationOptions: {
            headerTitle: 'Reg',
            headerStyle: {backgroundColor: '#F3D7BE'},
            headerLeft:null
        },
    },

    Home: {
        screen: DrawerStack,


    },
    SubCategory: {
        screen: SubCategory,

    },
});


export default RootNavigator;
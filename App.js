import React, { Component } from 'react';
import {Platform, StyleSheet,Text, View,ImageBackground} from 'react-native';
import RootNavigator from './src/StackNavigation';
import thunk from 'redux-thunk';
import AppReducer from './Reducers/index'
import {createStore,applyMiddleware} from 'redux';
import {Provider} from 'react-redux';



export default class App extends Component<{}> {



  render() {
    return (
        <Provider store={(createStore(AppReducer,applyMiddleware(thunk)))}>


        <RootNavigator/>


        </Provider>

    );
  }
}


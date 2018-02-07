import React, { Component } from 'react';
import {Platform, StyleSheet,Text, View,ImageBackground} from 'react-native';
import RootNavigator from './src/StackNavigation';

export default class App extends Component<{}> {



  render() {
    return (
        <RootNavigator/>
    );
  }
}


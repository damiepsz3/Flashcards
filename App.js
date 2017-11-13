import React from 'react';
import { StyleSheet, Text, View, Platform, StatusBar, Navigator } from 'react-native';
import MainNavigator from './components/Navigation';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import reducer from './reducers'
import { blue } from './utils/colors';
import { Constants } from 'expo';

export default class App extends React.Component {
  render() {
    return (
      <Provider store={createStore(reducer)}>
        <View style={{flex: 1}}>
          <MyStatusBar backgroundColor={blue} barStyle="light-content"/>
          <MainNavigator />
        </View>
      </Provider>
    );
  }
}

function MyStatusBar ({ backgroundColor, ...props }) {
  return (
      <View style={{ backgroundColor, height: Constants.statusBarHeight}}>
        <StatusBar tanslucent backgroundColor={backgroundColor} {...props}/>
      </View>
  )
}

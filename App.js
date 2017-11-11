import React from 'react';
import { StyleSheet, Text, View, Platform, StatusBar } from 'react-native';
import MainNavigator from './components/Navigation';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import reducer from './reducers'
import { blue } from './utils/colors';

export default class App extends React.Component {
  render() {
    return (
      <Provider store={createStore(reducer)}>
        <View style={{flex: 1}}>
          <MainNavigator />
        </View>
      </Provider>
    );
  }
}

import React from 'react';
import { StyleSheet, Text, View, Platform, StatusBar } from 'react-native';
import { TabNavigator, StackNavigator } from 'react-navigation';
import DeckList from './containers/DeckList';
import NewDeck from './containers/NewDeck';
import { FontAwesome, Ionicons } from '@expo/vector-icons';
import { Constants } from 'expo';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import reducer from './reducers'
import { blue } from './utils/colors'


const Tabs = TabNavigator({
  DeckList: {
    screen: DeckList,
    navigationOptions: {
      tabBarLabel: 'Decks',
      tabBarIcon: ({ tintColor }) => <Ionicons name='ios-list-box' size={30} color={tintColor}/>
    }
  },
  NewDeck: {
    screen: NewDeck,
    navigationOptions: {
      tabBarLabel: 'New Deck',
      tabBarIcon: ({ tintColor }) => <Ionicons name='ios-add-circle' size={30} color={tintColor}/>
    }
  }
}, {
    navigationOptions: {
      header: null
    },
})

const MainNavigator = StackNavigator({
  Home: {
    screen: Tabs
  },
})

function MyStatusBar ({ backgroundColor, ...props }) {
  return (
      <View style={{ backgroundColor, height: Constants.statusBarHeight}}>
        <StatusBar tanslucent backgroundColor={backgroundColor} {...props}/>
      </View>
  )
}

export default class App extends React.Component {
  render() {
    return (
      <Provider store={createStore(reducer)}>
        <View style={{flex: 1}}>
          <MyStatusBar tanslucent  backgroundColor={blue} barStyle='light-content'/>
          <MainNavigator />
        </View>
      </Provider>
    );
  }
}

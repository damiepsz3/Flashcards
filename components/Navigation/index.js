import React from 'react';
import { TabNavigator, StackNavigator } from 'react-navigation';
import { StyleSheet, Text, View, Platform, StatusBar } from 'react-native';
import { Constants } from 'expo';
import DeckList from '../../containers/DeckList';
import NewDeck from '../../containers/NewDeck';
import NewQuestion from '../../containers/NewQuestion';

import DeckView from '../DeckView';
import { blue, white, gray } from '../../utils/colors';
import { FontAwesome, Ionicons } from '@expo/vector-icons';

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
      header: <MyStatusBar tanslucent  backgroundColor={blue} barStyle='light-content'/> || null,
      headerStyle: {
        height: Constants.statusBarHeight
      }
    },
})

export default MainNavigator = StackNavigator({
  Home: {
    screen: Tabs,
    navigationOptions: ({navigation}) => ({
      title: 'Decks',
    })
  },
  DeckView: {
    screen: DeckView,
    navigationOptions: ({navigation}) => ({
      title: navigation.state.params.deck.title,
      headerTintColor: blue,
      headerStyle: {
        backgroundColor: white,
      }
    })
  },
  NewQuestion: {
    screen: NewQuestion,
    navigationOptions: ({navigation}) => ({
      title: 'Add Question',
      headerTintColor: blue,
      headerStyle: {
        backgroundColor: white,
      }
    })
  }
})

function MyStatusBar ({ backgroundColor, ...props }) {
  return (
      <View style={{ backgroundColor, height: Constants.statusBarHeight}}>
        <StatusBar tanslucent backgroundColor={backgroundColor} {...props}/>
      </View>
  )
}

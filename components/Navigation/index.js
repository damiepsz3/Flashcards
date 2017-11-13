import React from 'react';
import { TabNavigator, StackNavigator } from 'react-navigation';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

import DeckList from '../../containers/DeckList';
import NewDeck from '../../containers/NewDeck';
import NewQuestion from '../../containers/NewQuestion';
import DeckView from '../../containers/DeckView';
import Header from '../../components/Header'

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
    header: Header({
      statusColor:blue,
    })
  }
})

export default MainNavigator = StackNavigator({
  Home: {
    screen: Tabs,
    navigationOptions: ({ navigation }) => ({
      header: Header({
        statusColor: blue,
        headerColor: blue,
        titleColor: white,
        title: 'Flashcards',
      })
    })
  },
  DeckView: {
    screen: DeckView,
    navigationOptions: ({ navigation }) => ({
      header: Header({
        statusColor: blue,
        title: navigation.state.params.deck.title,
        LeftComponent: leftButton(navigation.goBack, <Ionicons name='ios-arrow-back-outline' size={35} color={blue}/>)
      })
    })
  },
  NewQuestion: {
    screen: NewQuestion,
    navigationOptions: ({ navigation }) => ({
      header: Header({
        statusColor: blue,
        title: 'Add a question',
        LeftComponent: leftButton(navigation.goBack, <Ionicons name='ios-arrow-back-outline' size={35} color={blue}/>)
      })
    })
  }
})

function leftButton(funct, icon) {
  return (
    <TouchableOpacity onPress={() => funct()}>
      <View style={{alignItems: 'center'}}>{icon}</View>
    </TouchableOpacity>)
}

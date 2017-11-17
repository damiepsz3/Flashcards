import React from 'react';
import { View, Text, FlatList, Platform, TouchableOpacity } from 'react-native';
import styles from './style'


export default function DeckList (props) {
  const renderItem = ({ item }) => {
    const { id, title, questions } = item
    return (
      <TouchableOpacity onPress={() => props.onPressCard(item)}>
        <View style={styles.card}>
          <Text style={styles.title}>{title}</Text>
          <Text style={styles.questions}>{questions.length} cards.</Text>
        </View>
      </TouchableOpacity>
    )
  };

  const keyExtractor = (item) => item.id;

  return (
    <View style={styles.container}>
      <FlatList
        data={props.decks}
        renderItem={renderItem}
        keyExtractor={keyExtractor}
      />
    </View>
  )
}

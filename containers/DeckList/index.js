import React, { Component } from 'react';
import { View, Text, StyleSheet, FlatList, Platform, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';
import { white, blue, gray } from '../../utils/colors'

class DeckList extends Component {
  renderItem = ({ item }) => {
    const { id, title, questions } = item
    return (
      <TouchableOpacity onPress={() => this.onPressItem(item)}>
        <View style={styles.card}>
          <Text style={styles.title}>{title}</Text>
          <Text style={styles.questions}>{questions.length} cards.</Text>
        </View>
      </TouchableOpacity>
    )
  };

  keyExtractor = (item) => item.id;

  onPressItem = (deck) => this.props.navigation.navigate('DeckView', { deck })

  render() {
    const { decks } = this.props
    if (decks.length === 0) {
      return (
        <View style={{alignItems: 'center', margin: 20, backgroundColor: white, padding: 10}}>
          <Text style={{fontSize: 20}}>You don't have any Deck yet</Text>
          <Text style={{fontSize: 20, marginTop: 10}}>Go ahead and add one ⬇️</Text>
        </View>
      )
    }

    return (
      <View style={styles.container}>
        <FlatList
          data={decks}
          renderItem={this.renderItem}
          keyExtractor={this.keyExtractor}
        />
      </View>
    );
  }

}

function mapStateToProps ({ decks }) {
  return {
    decks: Object.keys(decks).map((key) => decks[key])
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  card: {
    flex: 1,
    marginBottom: 1,
    padding: 20,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: white,
  },
  title: {
    color: blue,
    fontSize: 30,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  questions: {
    color: gray,
    fontSize: 20,
  },
})

export default connect(mapStateToProps)(DeckList);

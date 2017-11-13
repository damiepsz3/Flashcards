import React, { Component } from 'react';
import { connect } from 'react-redux'
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { white, blue, gray, green, purple } from '../../utils/colors'

class DeckView extends Component {
  render() {
    const { id, title, questions } = this.props.deck
    return (
      <View style={{flex: 1}}>
        <View style={styles.container}>
          <Text style={styles.title}>{title}</Text>
          <Text style={styles.question}>{questions.length} cards.</Text>
        </View>
        <View style={styles.container}>
          <View>
            <TouchableOpacity onPress={() => this.props.navigation.navigate('NewQuestion', { deckId: id })}>
              <Text style={[styles.btnText,{ color: green}]}>Add Card</Text>
            </TouchableOpacity>
          </View>
          <View style={{margin:20}}>
            <TouchableOpacity>
              <Text style={[styles.btnText,{ color: purple}]}>Start Quiz</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  }
}

function mapStateToProps({ decks }, { navigation }) {
  const { deck } = navigation.state.params
  return {
    deck: decks[deck.id]
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    color: blue,
    fontSize: 50,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  question: {
    color: gray,
    fontSize: 40,
  },
  btnText: {
    textAlign: 'center',
    fontSize: 24,
  }
})

export default connect(mapStateToProps)(DeckView);

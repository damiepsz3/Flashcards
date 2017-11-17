import React, { Component } from 'react';
import { connect } from 'react-redux'
import DeckView from './DeckView'

class DeckViewContainer extends Component {
  addCard = (id) => this.props.navigation.navigate('NewQuestion', { deckId: id })

  startQuiz = (id) => this.props.navigation.navigate('Quiz', { deckId: id })

  render() {
    return <DeckView addCard={this.addCard} startQuiz={this.startQuiz} {...this.props.deck} />
  }
}

function mapStateToProps({ decks }, { navigation }) {
  const { deck } = navigation.state.params
  return {
    deck: decks[deck.id]
  }
}

export default connect(mapStateToProps)(DeckViewContainer);

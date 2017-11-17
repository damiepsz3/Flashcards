import React, { Component } from 'react';
import { connect } from 'react-redux';
import DeckList from './DeckList'
import NoItem from './NoItem'

class DeckListContainer extends Component {

  onPressCard = (deck) => this.props.navigation.navigate('DeckView', { deck })

  render() {
    const { decks } = this.props

    if (decks.length === 0) {
      return <NoItem />
    }

    return <DeckList decks={decks} onPressCard={this.onPressCard}/>
  }
}

function mapStateToProps ({ decks }) {
  return {
    decks: Object.keys(decks).map((key) => decks[key])
  }
}

export default connect(mapStateToProps)(DeckListContainer);

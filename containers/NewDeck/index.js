import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Alert } from 'react-native'
import { addDeck } from '../../actions';
import uuidv1 from 'uuid/v1';
import NewDeck from './NewDeck'


class NewDeckContainer extends Component {
  state = {
    id: uuidv1(),
    title: '',
    questions: [],
  }

  submit = () => {
    const deck = this.state
    if(deck.title === '') {
      Alert.alert(
        'Title of deck is empty',
        'Please provide a valid title for the deck.'
      )
    } else {
      this.props.addDeck(deck)
      this.setState({
        id: uuidv1(),
        title: '',
      })
      this.props.navigation.navigate('DeckView', { deck })
    }
  }

  setTitle = (title) => this.setState({ title })

  render() {
    return <NewDeck onSubmit={this.submit} setTitle={this.setTitle} {...this.state}/>
  }
}

export default connect(null, { addDeck })(NewDeckContainer);

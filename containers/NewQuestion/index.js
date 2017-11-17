import React, { Component } from 'react';
import { View, Text, TextInput, TouchableOpacity, Alert } from 'react-native';
import { connect } from 'react-redux';
import { addQuestion } from '../../actions';
import NewQuestion from './NewQuestion'

import uuidv1 from 'uuid/v1';

class NewQuestionContainer extends Component {
  state = {
    id: uuidv1(),
    parentId: this.props.deck.id,
    question: '',
    answer: ''
  }

  submit = () => {
    const { question, answer } = this.state
    if(question.length > 0 && answer.length > 0){
      this.props.addQuestion(this.state);
      this.setState({
        id: uuidv1(),
        parentId: this.props.deck.id,
        question: '',
        answer: ''
      })
    } else {
      Alert.alert(
        'Required fields empty',
        'Some required fields are empty, please fill all the fields and try to submit your question again.'
      )
    }
  }

  modifyState = (prop) => this.setState({...prop})

  render() {
    const { deck } = this.props
    const { question, answer } = this.state
    return <NewQuestion onModifyState={this.modifyState} deck={deck} onSubmit={this.submit} {...this.state}/>
  }
}

function mapStateToProps({ decks }, { navigation }) {
  const { deckId } = navigation.state.params
  return {
    deck: decks[deckId]
  }
}

export default connect(mapStateToProps, { addQuestion })(NewQuestionContainer);

import React, { Component } from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';
import { addQuestion } from '../../actions'
import uuidv1 from 'uuid/v1'

class NewQuestion extends Component {
  state = {
    id: uuidv1(),
    parentId: this.props.deck.id,
    question: 'Add a question ❔',
    answer: 'And the answer here 😄'
  }

  submit() {

  }

  render() {
    const { deck } = this.props
    const { question, answer } = this.state
    return (
      <View>
        <View>
          <Text>
            Question:
          </Text>
          <TextInput
            onChange={(question => this.setState({ question }))}
            value={question}
          />
        </View>
        <View>
          <Text>
            Answer:
          </Text>
          <TextInput
            onChange={(answer) => this.setState({ answer })}
            value={answer}
          />
        </View>
        <TouchableOpacity onPress={() => this.props.addQuestion(this.state)}>
          <Text>SUBMIT</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

function mapStateToProps({ decks }, { navigation }) {
  const { deckId } = navigation.state.params
  return {
    deck: decks[deckId]
  }
}

export default connect(mapStateToProps, { addQuestion })(NewQuestion);

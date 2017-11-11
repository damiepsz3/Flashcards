import React, { Component } from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';

class NewQuestion extends Component {
  state = {
    question: 'Add a question ❔',
    answer: 'And the answer here 😄'
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
        <TouchableOpacity>
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

export default connect(mapStateToProps)(NewQuestion);

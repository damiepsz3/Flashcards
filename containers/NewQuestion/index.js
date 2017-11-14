import React, { Component } from 'react';
import { View, Text, TextInput, TouchableOpacity, Alert, StyleSheet } from 'react-native';
import { connect } from 'react-redux';
import { addQuestion } from '../../actions';
import { white, gray, blue, green } from '../../utils/colors'
import uuidv1 from 'uuid/v1';

class NewQuestion extends Component {
  state = {
    id: uuidv1(),
    parentId: this.props.deck.id,
    question: '',
    answer: ''
  }

  submit(state) {
    const { question, answer } = state
    if(question.length > 0 && answer.length > 0){
      this.props.addQuestion(state);
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

  render() {
    const { deck } = this.props
    const { question, answer } = this.state
    return (
      <View style={styles.container}>
        <View style={styles.inputContainer}>
          <TextInput style={styles.labelInput}
            placeholder='Add a question ❔'
            multiline = {true}
            onChangeText={question => this.setState({ question })}
            value={question}
          />
        </View>
        <View style={styles.inputContainer}>
          <TextInput style={styles.labelInput}
            placeholder='And the answer here 😄'
            multiline = {true}
            onChangeText={(answer) => this.setState({ answer })}
            value={answer}
          />
        </View>
        <TouchableOpacity

          onPress={() => this.submit(this.state)}
        >
          <Text style={styles.submitBton}>SUBMIT</Text>
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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
  },
  inputContainer: {
    backgroundColor: white,
    marginBottom: 1,
  },
  submitBton: {
    textAlign: 'center',
    fontSize: 20,
    color: white,
    paddingRight: 20,
    paddingLeft: 20,
    paddingTop: 10,
    paddingBottom: 10,
    backgroundColor: green,
  },
  btnText: {
    fontSize: 30,
    color: blue,
  },
  labelInput: {
    paddingTop: 30,
    paddingBottom: 30,
    paddingLeft: 20,
    paddingRight: 20,
    fontSize: 20,
  }
})

export default connect(mapStateToProps, { addQuestion })(NewQuestion);

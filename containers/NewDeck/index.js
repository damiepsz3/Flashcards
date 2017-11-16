import React, { Component } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, KeyboardAvoidingView } from 'react-native';
import { connect } from 'react-redux';
import { addDeck } from '../../actions';
import { white, defautlGray, blue, green } from '../../utils/colors'
import uuidv1 from 'uuid/v1';


class NewDeck extends Component {
  state = {
    id: uuidv1(),
    title: '',
    questions: [],
  }

  submit = (deck) => {
    this.props.addDeck(deck)
    this.setState({
      id: uuidv1(),
      title: '',
    })
    this.props.navigation.navigate('DeckView', { deck })
  }

  render() {
    return (
      <KeyboardAvoidingView style={{flex: 1}}>
        <View style={styles.container}>
          <Text style={styles.label}>What is the title of your new deck?</Text>
          <TextInput
            style={styles.titleInput}
            placeholder='Deck Title'
            onChangeText={title => this.setState({ title })}
            value={this.state.title}
          />
          <TouchableOpacity
            onPress={() => this.submit(this.state)}
          >
            <Text style={styles.submitBtn}>Submit</Text>
          </TouchableOpacity>
        </View>
      </KeyboardAvoidingView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'flex-start',
    alignItems: 'stretch',
    backgroundColor: white,
  },
  label: {
    fontSize: 40,
    padding: 30,
    textAlign: 'center',
  },
  titleInput: {
    paddingBottom: 30,
    paddingLeft: 20,
    paddingRight: 20,
    fontSize: 25,
    textAlign: 'center'
  },
  submitBtn: {
    textAlign: 'center',
    fontSize: 20,
    color: white,
    paddingRight: 20,
    paddingLeft: 20,
    paddingTop: 10,
    paddingBottom: 10,
    backgroundColor: green,
  }
})

export default connect(null, { addDeck })(NewDeck);

import React from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import styles from './style'

export default function NewQuestion (props) {
  const { question, answer, deck, onModifyState, onSubmit } = props
  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <TextInput style={styles.labelInput}
          placeholder='Add a question ❔'
          multiline = {true}
          onChangeText={question => onModifyState({ question })}
          value={question}
        />
      </View>
      <View style={styles.inputContainer}>
        <TextInput style={styles.labelInput}
          placeholder='And the answer here 😄'
          multiline = {true}
          onChangeText={(answer) => onModifyState({ answer })}
          value={answer}
        />
      </View>
      <TouchableOpacity
        onPress={() => onSubmit()}
      >
        <Text style={styles.submitBton}>SUBMIT</Text>
      </TouchableOpacity>
    </View>
  );
}

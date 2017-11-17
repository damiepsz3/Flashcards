import React from 'react';
import { View, Text, TextInput, TouchableOpacity, KeyboardAvoidingView } from 'react-native';
import styles from './style'

export default function NewDeck(props) {
  return (
    <KeyboardAvoidingView style={{flex: 1}}>
      <View style={styles.container}>
        <Text style={styles.label}>What is the title of your new deck?</Text>
        <TextInput
          style={styles.titleInput}
          placeholder='Deck Title'
          onChangeText={title => props.setTitle(title)}
          value={props.title}
        />
        <TouchableOpacity
          onPress={() => props.onSubmit()}
        >
          <Text style={styles.submitBtn}>Submit</Text>
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  );
}

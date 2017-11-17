import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { white, blue, gray, green, purple } from '../../utils/colors'
import styles from './style'

export default function DeckView (props) {
  const { id, title, questions, addCard, startQuiz } = props
  return (
    <View style={{flex: 1}}>
      <View style={styles.container}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.question}>{questions.length} cards.</Text>
      </View>
      <View style={styles.container}>
        <View>
          <TouchableOpacity onPress={() => addCard(id)}>
            <Text style={[styles.btnText,{ color: green }]}>Add Card</Text>
          </TouchableOpacity>
        </View>
        {questions.length > 0 &&(
          <View style={{margin:20}}>
            <TouchableOpacity onPress={() => startQuiz(id)}>
              <Text style={[styles.btnText,{ color: purple }]}>Start Quiz</Text>
            </TouchableOpacity>
          </View>
        )}
      </View>
    </View>
  );
}

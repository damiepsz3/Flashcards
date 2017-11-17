import React from 'react';
import { View, Text, TouchableOpacity, Animated } from 'react-native';
import { purple, blue } from '../../utils/colors'
import styles from './style'

export default function Score (props) {
  const { corrects, questions, bounceValue } = props

  return (
    <View style={styles.container}>
      <Animated.View style={[styles.card, {transform: [{scale: bounceValue}]}]}>
        <Text style={{marginBottom: 10}}>You have finished the Quiz</Text>
        <Text style={styles.cardText}>Score: {corrects} correct from {questions.length} questions</Text>
        <Text style={styles.percn}>{((corrects * 100)/questions.length).toFixed(2)}%</Text>
      </Animated.View>
      <View>
        <TouchableOpacity onPress={() => props.onResetQuiz()}>
          <Text style={[styles.respBtn, { backgroundColor: purple }]}>
            Take quiz again
          </Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => props.goHome()}>
          <Text style={[styles.respBtn, { backgroundColor: blue }]}>
            Desk list
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

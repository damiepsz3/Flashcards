import React from 'react';
import { View, Text, TouchableOpacity, Animated } from 'react-native';
import { green, red } from '../../utils/colors'
import styles from './style'

export default function Quiz (props) {
  const { question, answer, counter, questions, showingQuestion, onModifyState, animate, onCorrect } = props

  return (
    <View style={styles.container}>
      <Animated.View style={[styles.card, {transform: [{scale: props.bounceValue}]}]}>
        <Text style={{marginBottom: 10}}>{`${counter}/${questions.length}`}</Text>
        <Text style={styles.cardText}>
          {showingQuestion
            ? question
            : answer
          }
        </Text>
        <TouchableOpacity onPress={() => {
          onModifyState({showingQuestion: !showingQuestion})
          props.animate();
        }}>
          <Text style={styles.toggleBtn}>
            {showingQuestion
              ? 'Answer'
              : 'Question'
            }
          </Text>
        </TouchableOpacity>
      </Animated.View>
      <View>
        <TouchableOpacity onPress={() => onCorrect(true)}>
          <Text style={[styles.respBtn, { backgroundColor: green }]}>
            Correct
          </Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => onCorrect(false)}>
          <Text style={[styles.respBtn, { backgroundColor: red }]}>
            Incorrect
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

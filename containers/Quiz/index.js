import React, { Component } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Animated
} from 'react-native';
import { connect } from 'react-redux';
import { white, gray, blue, green, red, purple } from '../../utils/colors'

class Quiz extends Component {
  state = {
    counter: 1,
    corrects: 0,
    showingQuestion: true,
    bounceValue: new Animated.Value(1),
  }

  componentDidMount () {
    console.log('hola');
    Animated.sequence([
      Animated.timing(this.state.bounceValue, { duration: 200, toValue: 1.04}),
      Animated.spring(this.state.bounceValue, { toValue: 1, friction: 4})
    ]).start()
  }

  correct = (isCorrect) => {
    this.setState((prevState) => ({
      counter: prevState.counter + 1,
      corrects: isCorrect ? prevState.corrects + 1 : prevState.corrects,
      showingQuestion: true,
    }))
  }

  resetQuiz = () => {
    this.setState({
      counter: 1,
      corrects: 0,
      showingQuestion: true,
    })
  }

  render() {
    const { questions } = this.props
    const { counter, showingQuestion, corrects, bounceValue } = this.state

    console.log(bounceValue);

    if(counter > questions.length) {
      return (
        <View style={styles.container}>
          <View style={styles.card}>
            <Text style={{marginBottom: 10}}>You have finished the Quiz</Text>
            <Text style={styles.cardText}>Score: {corrects} correct from {questions.length} questions</Text>
            <Text style={styles.percn}>{(corrects * 100)/questions.length}%</Text>
          </View>
          <View>
            <TouchableOpacity onPress={() => this.resetQuiz()}>
              <Text style={[styles.respBtn, { backgroundColor: purple }]}>
                Take quiz again
              </Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => this.props.navigation.navigate('Home')}>
              <Text style={[styles.respBtn, { backgroundColor: blue }]}>
                Desk list
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      )
    }

    const { question, answer } = questions[counter - 1]
    return (
      <View style={styles.container}>
        <Animated.View style={[styles.card, {transform: [{scale: bounceValue}]}]}>
          <Text style={{marginBottom: 10}}>{`${counter}/${questions.length}`}</Text>
          <Text style={styles.cardText}>
            {showingQuestion
              ? question
              : answer
            }
          </Text>
          <TouchableOpacity onPress={() => this.setState(prevState =>({showingQuestion: !prevState.showingQuestion}))}>
            <Text style={styles.toggleBtn}>
              {showingQuestion
                ? 'Answer'
                : 'Question'
              }
            </Text>
          </TouchableOpacity>
        </Animated.View>
        <View>
          <TouchableOpacity onPress={() => this.correct(true)}>
            <Text style={[styles.respBtn, { backgroundColor: green }]}>
              Correct
            </Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => this.correct(false)}>
            <Text style={[styles.respBtn, { backgroundColor: red }]}>
              Incorrect
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

function mapStateToProps({ questions }, { navigation }) {
  const { deckId } = navigation.state.params
  return {
    questions: Object.keys(questions).map(key => questions[key]).filter(q => q.parentId === deckId)
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  card: {
    backgroundColor: white,
    padding: 20,
    width: 300,
    flexWrap: 'wrap',
    alignItems: 'center',
  },
  cardText:{
    fontSize: 18,
    textAlign: 'center',
    marginBottom: 10,
  },
  respBtn: {
    textAlign: 'center',
    marginBottom: 10,
    fontSize: 20,
    color: white,
    paddingRight: 20,
    paddingLeft: 20,
    paddingTop: 10,
    paddingBottom: 10,
  },
  toggleBtn: {
    fontSize: 20,
    color: blue,
  },
  percn: {
    fontSize: 25,
    color: blue,
  }
})

export default connect(mapStateToProps)(Quiz);

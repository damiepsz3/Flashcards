import React, { Component } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Animated
} from 'react-native';
import { connect } from 'react-redux';
import Score from './Score'
import Quiz from './Quiz'

class QuizContainer extends Component {
  state = {
    counter: 1,
    corrects: 0,
    showingQuestion: true,
    bounceValue: new Animated.Value(1),
  }

  componentDidMount () {
    this.animate();
  }

  animate = () => {
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
    this.animate()
  }

  resetQuiz = () => {
    this.setState({
      counter: 1,
      corrects: 0,
      showingQuestion: true,
    })
    this.animate()
  }

  modifyState = (prop) => this.setState({...prop})

  goHome = () => this.props.navigation.navigate('Home')

  render() {
    const { questions } = this.props
    const { counter } = this.state

    if(counter > questions.length) {
      return <Score
              goHome={this.goHome}
              onResetQuiz={this.resetQuiz}
              {...this.state} 
              {...this.props}
            />
    }

    const { question, answer } = questions[counter - 1]
    return  <Quiz
              onCorrect={this.correct}
              animate={this.animate}
              onModifyState={this.modifyState}
              question={question}
              answer={answer}
              {...this.state}
              {...this.props}
            />
  }
}

function mapStateToProps({ questions }, { navigation }) {
  const { deckId } = navigation.state.params
  return {
    questions: Object.keys(questions).map(key => questions[key]).filter(q => q.parentId === deckId)
  }
}


export default connect(mapStateToProps)(QuizContainer);

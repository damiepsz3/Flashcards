import { combineReducers } from 'redux'

const initialDecks = {
  'f03bfcc2-c588-11e7-abc4-cec278b6b50a': {
    id: 'f03bfcc2-c588-11e7-abc4-cec278b6b50a',
    title: 'React',
    questions: ['f03c0348-c588-11e7-abc4-cec278b6b50a', 'f03c046a-c588-11e7-abc4-cec278b6b50a'],
  },
  'f03c01e0-c588-11e7-abc4-cec278b6b50a': {
    id: 'f03c01e0-c588-11e7-abc4-cec278b6b50a',
    title: 'Javascript',
    questions: ['f03c0974-c588-11e7-abc4-cec278b6b50a']
  }
}

const initialQuestions = {
  'f03c0348-c588-11e7-abc4-cec278b6b50a': {
    id: 'f03c0348-c588-11e7-abc4-cec278b6b50a',
    question: 'What is React?',
    answer: 'A library for managing user interfaces',
  },
  'f03c046a-c588-11e7-abc4-cec278b6b50a': {
    id: 'f03c046a-c588-11e7-abc4-cec278b6b50a',
    question: 'Where do you make Ajax requests in React?',
    answer: 'The componentDidMount lifecycle event',
  },
  'f03c0974-c588-11e7-abc4-cec278b6b50a': {
    id: 'f03c0974-c588-11e7-abc4-cec278b6b50a',
    question: 'What is a closure?',
    answer: 'The combination of a function and the lexical environment within which that function was declared.'
  }
}


function decks (state = initialDecks, action) {
  switch (action.type) {
    default:
      return state

  }
}

function questions (state = initialQuestions, action) {
  switch (action.type) {
    default:
      return state

  }
}

export default combineReducers({
  decks,
  questions
})

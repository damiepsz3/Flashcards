export const ADD_QUESTION = 'ADD_QUESTION'
export const ADD_DECK = 'ADD_DECK'

export function addQuestion(question) {
  return {
    type: ADD_QUESTION,
    question,
  }
}

export function addDeck(deck) {
  return {
    type: ADD_DECK,
    deck
  }
}

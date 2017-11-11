import React, { Component } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import styled from 'styled-components/native';
import { white, blue, gray, green, purple } from '../../utils/colors'


const Containers = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`
const Title = styled.Text`
  color: ${blue};
  font-size: 50px;
  font-weight: bold;
  margin-bottom: 10px;
`

const Questions = styled.Text`
  color: ${gray};
  font-size: 40px;
`

const ButtonText = styled.Text`
  text-align: center;
  font-size: 24px;
  color: ${props => props.add ? green : purple};
`

class DeckView extends Component {
  render() {
    const { id, title, questions } = this.props.navigation.state.params.deck
    return (
      <View style={{flex: 1}}>
        <Containers>
          <Title>{title}</Title>
          <Questions>{questions.length} questions.</Questions>
        </Containers>
        <Containers>
          <View>
            <TouchableOpacity onPress={() => this.props.navigation.navigate('NewQuestion', { deckId: id })}>
              <ButtonText add>Add Card</ButtonText>
            </TouchableOpacity>
          </View>
          <View style={{margin:20}}>
            <TouchableOpacity>
              <ButtonText>Start Quiz</ButtonText>
            </TouchableOpacity>
          </View>
        </Containers>
      </View>
    );
  }

}

export default DeckView;

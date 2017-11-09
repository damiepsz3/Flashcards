import React, { Component } from 'react';
import { View, Text } from 'react-native';
import styled from 'styled-components/native'

const Wrapper = styled.View`
  flex: 1;
  align-items: center;
`

class NewDeck extends Component {

  render() {
    return (
      <Wrapper>
        <Text>New Deck</Text>
      </Wrapper>
    );
  }

}

export default NewDeck;

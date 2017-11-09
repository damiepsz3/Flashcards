import React, { Component } from 'react';
import { View, Text, StyleSheet, FlatList, Platform, TouchableOpacity } from 'react-native';
import styled from 'styled-components/native';
import { connect } from 'react-redux';
import { white, blue, gray } from '../../utils/colors'

const Wrapper = styled.View`
  flex: 1;
`

const Card = styled.View`
  flex: 1;
  margin: 17px 10px 0 10px;
  padding: 20px;
  align-items: center;
  justify-content: center;
  background: ${white}
  border-radius: ${Platform.OS === 'ios' ? 16 : 2};
  shadow-radius: 3px;
  shadow-opacity: 0.8px;
  shadow-color: rgba(0,0,0,0.24);
  shadow-offset: 0 3px;
`
const Title = styled.Text`
  color: ${blue};
  font-size: 30px;
  font-weight: bold;
  margin-bottom: 10px;
`

const Questions = styled.Text`
  color: ${gray};
  font-size: 20px;
`

class DeckList extends Component {
  renderItem = ({ item }) => {
    const { id, title, questions } = item
    return (
      <TouchableOpacity onPress={() => this.onPressItem(item)}>
        <Card>
          <Title>{title}</Title>
          <Questions>{questions.length} questions.</Questions>
        </Card>
      </TouchableOpacity>
    )
  };

  keyExtractor = (item) => item.id;

  onPressItem = (deck) => this.props.navigation.navigate('DeckView', { deck })

  render() {
    const { decks } = this.props
    return (
      <Wrapper>
        <FlatList
          data={decks}
          renderItem={this.renderItem}
          keyExtractor={this.keyExtractor}
        />
      </Wrapper>
    );
  }

}

function mapStateToProps ({ decks }) {
  return {
    decks: Object.keys(decks).map((key) => decks[key])
  }
}

export default connect(mapStateToProps)(DeckList);

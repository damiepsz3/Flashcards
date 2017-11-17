import React from 'react';
import { View, Text } from 'react-native';

export default function NoItem (props) {
  return (
    <View style={{alignItems: 'center', margin: 20, backgroundColor: white, padding: 10}}>
      <Text style={{fontSize: 20}}>You don't have any Deck yet</Text>
      <Text style={{fontSize: 20, marginTop: 10}}>Go ahead and add one ⬇️</Text>
    </View>
  )
}

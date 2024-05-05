import React from 'react';
import { View, Text } from 'react-native';
import ArimaPrediction from './ArimaPrediction'

const FeedScreen = () => {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <ArimaPrediction />
    </View>
  );
};
export default FeedScreen;
import React from 'react';
import { StyleSheet, View, Platform, Text } from 'react-native';

export default function Shadow() {
  return (
    <View style={style.shadow}>
      <Text>{Platform.OS}</Text>
    </View>
  );
}

const style = StyleSheet.create({
  shadow: {
    backgroundColor: '#ffffff',
    width: 200,
    height: 200,
    borderWidth: 2,
    ...Platform.select({
      ios: {
        shadowColor: '#000000',
        shadowOffset: { width: 10, height: 10 },
        shadowOpacity: 0.5,
        shadowRadius: 10,
      },
      android: {
        elevation: 50,
      },
    }),
  },
});

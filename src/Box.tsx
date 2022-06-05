import React from 'react';
import { View } from 'react-native';

type propsType = {
  style: {
    backgroundColor: string;
    height?: number;
    flex?: number;
  };
};

export default function Box({ style }: propsType) {
  return <View style={[{ borderWidth: 2, width: '100%' }, style]}></View>;
}

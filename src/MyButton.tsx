import React from 'react';
import { TouchableOpacity, View, Text, Alert } from 'react-native';

type propsTypes = {
  title?: string;
  onPress?: () => void;
  children?: string;
};

const MyButton = ({
  title = 'default',
  onPress = () => {},
  children,
}: propsTypes) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={{ backgroundColor: 'pink', padding: 10, margin: 10 }}>
        <Text>{children || title}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default MyButton;

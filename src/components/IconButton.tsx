import React from 'react';
import { TouchableOpacity, View } from 'react-native';
import styled from 'styled-components/native';

const Icon = styled.Image`
  width: 30px;
  height: 30px;
  margin: 10px;
  opacity: ${({ completed }: { completed: boolean }) =>
    completed ? 0.2 : 1.0};
`;

type propsType = {
  item: {
    id: string;
    text: string;
    completed: boolean;
  };
  icon: string;
  onPress: (id: string) => void;
};

const IconButton = ({ icon, onPress, item }: propsType) => {
  return (
    <TouchableOpacity onPress={() => onPress(item.id)}>
      <View>
        <Icon source={icon} completed={item.completed} />
      </View>
    </TouchableOpacity>
  );
};

export default IconButton;

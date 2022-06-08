import React from 'react';
import { TouchableOpacity, View } from 'react-native';
import styled from 'styled-components/native';
import { theme, themeType } from '../theme';

const Icon = styled.Image`
  width: 30px;
  height: 30px;
  margin: 10px;
  /* tint-color: ${({ theme }: themeType) => theme.text}; */
`;

type propsType = {
  icon: string;
  onPress?: () => void;
};

const IconButton = ({ icon, onPress }: propsType) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <View>
        <Icon source={icon} />
      </View>
    </TouchableOpacity>
  );
};

export default IconButton;

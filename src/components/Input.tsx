import React from 'react';
import styled from 'styled-components/native';
import { theme, themeType } from '../theme';
import { Dimensions, useWindowDimensions } from 'react-native';

const StyledInput = styled.TextInput.attrs(({ theme }: themeType) => ({
  placeholder: '+ Add a Task',
  placeholderTextColor: theme.main,
}))`
  width: ${({ width }: { width: number }) => width - 40}px;
  height: 60px;
  margin: 3px 0;
  padding: 15px 20px;
  border-radius: 10px;
  font-size: 25px;
  background-color: ${({ theme }: themeType) => theme.itemBackground};
  color: ${({ theme }: themeType) => theme.text};
  border: 1px solid white;
`;

type propsType = {
  value: string;
  onChangeText: (text: string) => void;
  onSubmitEditing: () => void;
};

export default function Input({
  value,
  onChangeText,
  onSubmitEditing,
}: propsType) {
  // const width = Dimensions.get('window').width;
  const width = useWindowDimensions().width;
  return (
    <StyledInput
      width={width}
      maxLength={50}
      autoCapitalize="none"
      autoCorrect={false}
      returnKeyType="done"
      keyboardAppearance="dark" //ios에서만 작동
      value={value}
      onChangeText={onChangeText}
      onSubmitEditing={onSubmitEditing}
    />
  );
}

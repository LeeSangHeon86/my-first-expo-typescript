import React, { useState, forwardRef } from 'react';
import { ReturnKeyTypeOptions, TextInput } from 'react-native';
import styled from 'styled-components/native';
import { themeType } from '../theme';

interface styledPropsType {
  theme: themeType;
  isFocused: boolean;
}

const Container = styled.View`
  flex-direction: column;
  width: 100%;
  margin: 10px 0;
`;

const Label = styled.Text<styledPropsType>`
  color: ${({ theme, isFocused }) =>
    isFocused ? theme.text : theme.inputLabel};
  font-size: 14px;
  font-weight: 600;
  margin-bottom: 6px;
`;

const StyledInput = styled.TextInput.attrs<styledPropsType>(({ theme }) => ({
  placeholderTextColor: theme.inputPlaceholder,
}))<styledPropsType>`
  width: 100%;
  background-color: ${({ theme }) => theme.inputBackground};
  color: ${({ theme }) => theme.text};
  padding: 20px 10px;
  font-size: 16px;
  border: 1px solid
    ${({ theme, isFocused }) => (isFocused ? theme.text : theme.inputBorder)};
  border-radius: 4px;
`;

interface props {
  label?: string;
  value?: string;
  onChangeText?: (text: string) => void;
  onSubmitEditing?: () => void;
  onBlur?: () => {};
  placeholder?: string;
  returnKeyType?: ReturnKeyTypeOptions;
  maxLength?: number;
  textContentType?: string;
  isPassword?: boolean;
}

const Input = forwardRef(
  (
    {
      label,
      value,
      onChangeText,
      onSubmitEditing,
      onBlur,
      placeholder,
      returnKeyType,
      maxLength,
      isPassword,
    }: props,
    ref?: React.Ref<TextInput>,
  ) => {
    const [isFocused, SetIsFocused] = useState(false);

    return (
      <Container>
        <Label isFocused={isFocused}>{label}</Label>
        <StyledInput
          ref={ref}
          value={value}
          onChangeText={onChangeText}
          onSubmitEditing={onSubmitEditing}
          onBlur={() => {
            SetIsFocused(false);
            onBlur;
          }}
          placeholder={placeholder}
          returnKeyType={returnKeyType}
          maxLength={maxLength}
          autoCapitalize="none"
          autoCorrect={false}
          isFocused={isFocused}
          onFocus={() => SetIsFocused(true)}
          secureTextEntry={isPassword}
        />
      </Container>
    );
  },
);

export default Input;

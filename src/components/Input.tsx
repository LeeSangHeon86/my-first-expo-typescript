import React, { useState, forwardRef } from 'react';
import { ReturnKeyTypeOptions, TextInput } from 'react-native';
import styled from 'styled-components/native';
import { themeType } from '../theme';

interface styledPropsType {
  theme: themeType;
  isFocused: boolean;
  ref?: any;
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
  background-color: ${({ theme, editable }) =>
    editable ? theme.inputBackground : theme.inputDisabled};
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
  onBlur?: () => void;
  placeholder?: string;
  returnKeyType?: ReturnKeyTypeOptions;
  maxLength?: number;
  textContentType?: string;
  isPassword?: boolean;
  disabled?: boolean;
}

const Input = forwardRef<TextInput, props>(
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
      disabled,
    },
    ref,
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
          autoCapitalize="none" // 첫글자 대문자 방지
          autoCorrect={false} // 자동 고침 방지
          isFocused={isFocused}
          onFocus={() => SetIsFocused(true)}
          secureTextEntry={isPassword} // 비밀번호 ** 표시용
          editable={!disabled}
        />
      </Container>
    );
  },
);

export default Input;

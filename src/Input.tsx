import React, { useState } from 'react';
import styled from 'styled-components/native';

const StyledInput = styled.TextInput.attrs(
  ({
    placeholder,
    theme,
  }: {
    placeholder: string;
    theme: themeProps['theme'];
  }) => ({
    placeholder: placeholder || 'Enter Text...',
    placeholderTextColor: theme.inputColor,
  }),
)`
  padding: 20px;
  font-size: 20px;
  border: 1px solid ${({ theme }: themeProps) => theme.inputBorder};
`;

type propsType = {
  placeholder?: string;
  text?: string;
};

type themeProps = {
  theme: {
    inputColor?: string;
    inputBorder?: string;
    bgColor?: string;
  };
};

export default function Input({ placeholder }: propsType) {
  const [text, setText] = useState('');
  return (
    <StyledInput
      onChangeText={text => setText(text)}
      placeholder={placeholder}
    />
  );
}

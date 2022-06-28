import React from 'react';
import { TouchableOpacity } from 'react-native';
import styled from 'styled-components/native';
import { themeType } from '../theme';

interface styledPropsType {
  theme: themeType;
  disabled?: boolean;
}

const Container = styled.View<styledPropsType>`
  background-color: ${({ theme }) => theme.btnBackground};
  padding: 10px;
  margin: 10px 0;
  flex: 1;
  justify-content: center;
  align-items: center;
  border-radius: 4px;
  opacity: ${({ disabled }) => (disabled ? 0.5 : 1)};
`;

const Title = styled.Text<styledPropsType>`
  font-size: 24px;
  color: ${({ theme }) => theme.btnTitle};
`;

interface propsType {
  title: string;
  onPress: () => void;
  containerStyle?: { marginTop: number; backgroundColor: string };
  textStyle?: { color: string; fontSize: number };
  disabled?: boolean;
}

const Button = ({
  title,
  onPress,
  containerStyle,
  textStyle,
  disabled,
}: propsType) => {
  return (
    <TouchableOpacity onPress={onPress} style={{ flexDirection: 'row' }}>
      <Container style={containerStyle} disabled={disabled}>
        <Title style={textStyle}>{title}</Title>
      </Container>
    </TouchableOpacity>
  );
};

export default Button;

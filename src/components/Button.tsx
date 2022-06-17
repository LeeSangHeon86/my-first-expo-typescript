import React from 'react';
import { TouchableOpacity } from 'react-native';
import styled from 'styled-components/native';
import { themeType } from '../theme';

interface styledPropsType {
  theme: themeType;
}

const Container = styled.View<styledPropsType>`
  background-color: ${({ theme }) => theme.btnBackground};
  padding: 10px;
  margin: 10px;
  flex: 1;
  justify-content: center;
  align-items: center;
  border-radius: 4px;
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
}

const Button = ({ title, onPress, containerStyle, textStyle }: propsType) => {
  return (
    <TouchableOpacity onPress={onPress} style={{ flexDirection: 'row' }}>
      <Container style={containerStyle}>
        <Title style={textStyle}>{title}</Title>
      </Container>
    </TouchableOpacity>
  );
};

export default Button;

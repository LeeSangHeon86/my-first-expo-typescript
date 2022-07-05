import React from 'react';
import styled from 'styled-components/native';
import { themeType } from '../theme';

interface ThemeProps {
  theme: themeType;
}

const Container = styled.View<ThemeProps>`
  flex: 1;
  background-color: ${({ theme }) => theme.background};
`;

const StyledText = styled.Text`
  font-size: 30px;
`;

const Channel = ({ route }) => {
  return (
    <Container>
      <StyledText>Channel</StyledText>
      <StyledText>{route.params.id}</StyledText>
      <StyledText>{route.params.title}</StyledText>
    </Container>
  );
};

export default Channel;

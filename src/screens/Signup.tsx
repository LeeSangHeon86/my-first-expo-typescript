import React from 'react';
import styled from 'styled-components/native';
import { themeType } from '../theme';

const Conatiner = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }: { theme: themeType }) => theme.background};
  padding: 0 20px;
`;

const StyledText = styled.Text`
  font-size: 30px;
  color: ${({ theme }: { theme: themeType }) => theme.text};
`;

const Signup = () => {
  return (
    <Conatiner>
      <StyledText>Signup</StyledText>
    </Conatiner>
  );
};

export default Signup;

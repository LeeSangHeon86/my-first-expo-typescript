import React from 'react';
import styled from 'styled-components/native';

const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  background-color: #0f56b3;
`;

const StyledText = styled.Text`
  font-size: 30px;
  margin: 10px;
  color: #ffffff;
`;

export const Mall = () => {
  return (
    <Container>
      <StyledText>Mall</StyledText>
    </Container>
  );
};

export const Profile = () => {
  return (
    <Container>
      <StyledText>Profile</StyledText>
    </Container>
  );
};

export const Settings = () => {
  return (
    <Container>
      <StyledText>Settings</StyledText>
    </Container>
  );
};

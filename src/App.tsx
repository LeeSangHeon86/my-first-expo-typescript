import React from 'react';
import { StatusBar } from 'expo-status-bar';
import styled from 'styled-components/native';
import { UserProvider } from './contexts/User';
import User from './components/User';

const Container = styled.View`
  flex: 1;
  background-color: '#fff';
  align-items: center;
  justify-content: center;
`;

const StyledText = styled.Text`
  font-size: 30px;
  font-weight: 600;
`;

export default function App() {
  return (
    <UserProvider>
      <Container>
        <StatusBar style="auto" />
        <User />
      </Container>
    </UserProvider>
  );
}

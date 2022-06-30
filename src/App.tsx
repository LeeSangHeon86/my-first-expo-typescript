import React from 'react';
import styled, { ThemeProvider } from 'styled-components/native';
import { theme, themeType } from './theme';
import { StatusBar } from 'react-native';
import Navigation from './navigations';
import { UserProvider } from './contexts';
import { ProgressProvider } from './contexts';

const Container = styled.View`
  flex: 1;
  background-color: '#fff';
  justify-content: center;
`;

export default function App() {
  // 20220630
  return (
    <ThemeProvider theme={theme}>
      <ProgressProvider>
        <UserProvider>
          <StatusBar
            backgroundColor={theme.background}
            barStyle="dark-content"
          />
          <Navigation />
        </UserProvider>
      </ProgressProvider>
    </ThemeProvider>
  );
}

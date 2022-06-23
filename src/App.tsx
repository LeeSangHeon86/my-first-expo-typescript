import React from 'react';
import styled, { ThemeProvider } from 'styled-components/native';
import { theme, themeType } from './theme';
import { StatusBar } from 'react-native';
import Navigation from './navigations';

const Container = styled.View`
  flex: 1;
  background-color: '#fff';
  justify-content: center;
`;

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <StatusBar backgroundColor={theme.background} barStyle="dark-content" />
      <Navigation />
    </ThemeProvider>
  );
}

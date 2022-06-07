import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
// import Box from './Box';
// import Shadow from './Shadow';
import styled, { ThemeProvider } from 'styled-components/native';
import Input from './Input';
import { Switch } from 'react-native';
import { useState } from 'react';

const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }: { theme: themeProps }) => theme.bgColor};
  align-items: center;
  justify-content: center;
`;

const lightTheme = {
  inputColor: 'black',
  inputBorder: 'black',
  bgColor: '#fff',
};

const darkTheme = {
  inputColor: 'white',
  inputBorder: 'white',
  bgColor: 'black',
};

type themeProps = {
  inputColor?: string;
  inputBorder?: string;
  bgColor?: string;
};

export default function App() {
  const [isLight, toggleTheme] = useState(true);
  return (
    <ThemeProvider theme={isLight ? lightTheme : darkTheme}>
      <Container>
        <StatusBar style="auto" />
        <Switch
          value={isLight}
          onValueChange={isLight => toggleTheme(isLight)}
        />
        <Input placeholder="typing message" />
        <Input />
        {/* <Shadow /> */}
        {/* <Box style={{ backgroundColor: 'red', height: 100 }} />
      <Box style={{ backgroundColor: 'blue', flex: 1 }} />
      <Box style={{ backgroundColor: 'pink', height: 100 }} /> */}
      </Container>
    </ThemeProvider>
  );
}

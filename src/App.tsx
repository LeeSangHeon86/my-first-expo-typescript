import { StatusBar } from 'react-native';
import styled, { ThemeProvider } from 'styled-components/native';
import { theme, themeType } from './theme';
import Input from './components/Input';

const Container = styled.SafeAreaView`
  flex: 1;
  background-color: ${({ theme }: themeType) => theme.background};
  align-items: center;
  justify-content: flex-start;
`;

const Title = styled.Text`
  font-size: 40px;
  font-weight: 600;
  color: ${({ theme }: themeType) => theme.main};
  width: 100%;
  align-items: flex-end;
  padding: 0 20px;
  border: 1px solid white;
`;

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <Container>
        <StatusBar
          backgroundColor={theme.background}
          barStyle="light-content"
        />
        <Title>ToDo List</Title>
        <Input />
      </Container>
    </ThemeProvider>
  );
}

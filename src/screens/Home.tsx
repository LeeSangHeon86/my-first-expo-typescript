import React from 'react';
import styled from 'styled-components/native';
import Button from '../components/Button';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

const Container = styled.View`
  align-items: center;
  background-color: #ffffff;
  padding-top: ${({ insets }: { insets: insetType }) => insets.top}px;
  padding-bottom: ${({ insets }: { insets: insetType }) => insets.bottom}px;
  padding-right: ${({ insets: { right } }) => right}px;
  padding-left: ${({ insets: { left } }) => left}px;
`;

const StyledText = styled.Text`
  font-size: 30px;
  margin: 10px;
`;

interface insetType {
  bottom: string;
  left: string;
  right: string;
  top: string;
}

const Home = ({ navigation }) => {
  const insets = useSafeAreaInsets();
  return (
    <Container insets={insets}>
      <StyledText>Home</StyledText>
      <Button
        title="List"
        onPress={() => {
          navigation.navigate('List');
        }}
      />
    </Container>
  );
};

export default Home;

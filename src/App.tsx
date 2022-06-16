import React from 'react';
import { StatusBar } from 'expo-status-bar';
import styled from 'styled-components/native';
import { NavigationContainer } from '@react-navigation/native';
import StackNav from './navigation/Stack';
import Navigation from './navigation';
import 'react-native-gesture-handler';

const Container = styled.View`
  flex: 1;
  background-color: '#fff';
  /* align-items: center; */
  justify-content: center;
`;

export default function App() {
  return <Navigation />;
}

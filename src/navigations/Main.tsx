import React, { useContext } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { Channel, ChannelCreation } from '../screens';
import { ThemeContext } from 'styled-components/native';
import Home from './Home';

export type MainStackParamList = {
  Channel: { id: string; title: string };
  ChannelCreation: undefined;
  Home: undefined;
};

const Stack = createStackNavigator<MainStackParamList>();

const Main = () => {
  const theme = useContext(ThemeContext);

  return (
    <Stack.Navigator
      screenOptions={{
        headerTitleAlign: 'center',
        headerTintColor: theme.text,
        headerBackTitleVisible: false,
        cardStyle: { backgroundColor: theme.background },
      }}
    >
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Channel" component={Channel} />
      <Stack.Screen name="ChannelCreation" component={ChannelCreation} />
    </Stack.Navigator>
  );
};

export default Main;

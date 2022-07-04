import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { ChannelList, Profile } from '../screens';

export type MainTabParamList = {
  List: undefined;
  Profile: { user: object };
};

const Tab = createBottomTabNavigator<MainTabParamList>();

const Home = () => {
  return (
    <Tab.Navigator screenOptions={{ headerShown: false }}>
      <Tab.Screen name="List" component={ChannelList} />
      <Tab.Screen name="Profile" component={Profile} />
    </Tab.Navigator>
  );
};

export default Home;

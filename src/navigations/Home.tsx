import React, { useContext, useEffect } from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { ChannelList, Profile } from '../screens';
import { MaterialIcons } from '@expo/vector-icons';
import { ThemeContext } from 'styled-components/native';
import { themeType } from '../theme';
import { getFocusedRouteNameFromRoute } from '@react-navigation/native';

export type MainTabParamList = {
  List: undefined;
  Profile: { user: object };
};

const Tab = createBottomTabNavigator<MainTabParamList>();

const TabIcon = ({ name, focused }: { name; focused: boolean }) => {
  const theme: themeType = useContext(ThemeContext);
  return (
    <MaterialIcons
      name={name}
      size={26}
      color={focused ? theme.tabBtnActive : theme.tabBtnInActive}
    />
  );
};

const Home = ({ navigation, route }) => {
  useEffect(() => {
    const screenName = getFocusedRouteNameFromRoute(route) || 'List';
    navigation.setOptions({
      headerTitle: screenName,
    });
  });

  return (
    <Tab.Navigator screenOptions={{ headerShown: false }}>
      <Tab.Screen
        name="List"
        component={ChannelList}
        options={{
          tabBarIcon: ({ focused }) =>
            TabIcon({
              name: focused ? 'chat-bubble' : 'chat-bubble-outline',
              focused,
            }),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarIcon: ({ focused }) =>
            TabIcon({
              name: focused ? 'person' : 'person-outline',
              focused,
            }),
        }}
      />
    </Tab.Navigator>
  );
};

export default Home;

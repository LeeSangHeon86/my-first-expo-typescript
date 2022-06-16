import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Mall, Profile, Settings } from '../screens/index';
import { MaterialIcons } from '@expo/vector-icons';

const Tab = createBottomTabNavigator();

const TabIcon = ({ name, size, color }) => {
  return <MaterialIcons name={name} size={size} color={color} />;
};

const TabNav = () => {
  return (
    // 공식 문서 적용
    // <Tab.Navigator initialRouteName="Mall" tabBarOptions={{ showLabel: false }}>
    // 오류 코드 보고 수정
    <Tab.Navigator
      initialRouteName="Mall"
      screenOptions={{
        tabBarShowLabel: true,
        tabBarLabelPosition: 'beside-icon',
        tabBarStyle: {
          backgroundColor: '#0f56b3',
          borderTopColor: '#ffffff',
          borderTopWidth: 1,
        },
        tabBarActiveTintColor: '#ffffff',
        tabBarInactiveTintColor: '#5096f1',
        headerShown: false,
      }}
    >
      <Tab.Screen
        name="Mall"
        component={Mall}
        options={{
          tabBarIcon: props => {
            return TabIcon({
              ...props,
              name: props.focused ? 'mail' : 'mail-outline',
            });
          },
          tabBarLabel: 'InBox', // 표시되는 텍스트 기본값 : 상기 속성인 name
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarIcon: props => {
            return TabIcon({ ...props, name: 'person' });
          },
        }}
      />
      <Tab.Screen
        name="Settings"
        component={Settings}
        options={{
          tabBarIcon: props => {
            return TabIcon({ ...props, name: 'settings' });
          },
        }}
      />
    </Tab.Navigator>
  );
};

export default TabNav;

import React, { useContext } from 'react';
import { ThemeContext } from 'styled-components';
import { createStackNavigator } from '@react-navigation/stack';
import { Signup, Signin } from '../screens';
import { MaterialIcons } from '@expo/vector-icons';

// screen 추가 될 때 마다 추가
export type AuthStackParamList = {
  Signin: undefined;
  Signup: undefined;
};

const Stack = createStackNavigator<AuthStackParamList>();

const Auth = () => {
  const theme = useContext(ThemeContext);

  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Signin"
        component={Signin}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Signup"
        component={Signup}
        options={{
          headerTitleAlign: 'center',
          headerBackTitleVisible: false,
          headerTintColor: theme.text,
          headerLeft: ({ tintColor, onPress }) => {
            return (
              <MaterialIcons
                name="keyboard-arrow-left"
                size={38}
                color={tintColor}
                onPress={onPress}
              />
            );
          },
        }}
      />
    </Stack.Navigator>
  );
};

export default Auth;

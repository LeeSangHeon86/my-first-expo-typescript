import React from 'react';
import styled from 'styled-components/native';
import { Button } from '../components';
import { themeType } from '../theme';
import { StackNavigationProp } from '@react-navigation/stack';
import { AuthStackParamList } from '../navigations/Auth';

interface styledPropsType {
  theme: themeType;
}

const Container = styled.View<styledPropsType>`
  flex: 1;
  background-color: ${({ theme }) => theme.background};
`;

type ProfileScreenNavPropsType = StackNavigationProp<
  AuthStackParamList,
  'Profile'
>;
type Props = {
  navigation: ProfileScreenNavPropsType;
};

export default function Profile({ navigation, route }: Props) {
  return (
    <Container>
      <Button title="Logout" onPress={() => navigation.navigate('Signin')} />
    </Container>
  );
}

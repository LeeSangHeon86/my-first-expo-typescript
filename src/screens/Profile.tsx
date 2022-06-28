import React, { useContext } from 'react';
import { UserContext } from '../contexts';
import styled from 'styled-components/native';
import { Button } from '../components';
import { themeType } from '../theme';
import { StackNavigationProp } from '@react-navigation/stack';
import { MainStackParamList } from '../navigations/Main';

interface styledPropsType {
  theme: themeType;
}

const Container = styled.View<styledPropsType>`
  flex: 1;
  background-color: ${({ theme }) => theme.background};
`;

type ProfileScreenNavPropsType = StackNavigationProp<
  MainStackParamList,
  'Profile'
>;
type Props = {
  navigation: ProfileScreenNavPropsType;
};

export default function Profile({ navigation }: Props) {
  const { setUser } = useContext(UserContext);
  return (
    <Container>
      <Button title="Logout" onPress={() => setUser({})} />
    </Container>
  );
}

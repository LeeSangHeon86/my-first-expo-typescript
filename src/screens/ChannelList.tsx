import React from 'react';
import styled from 'styled-components/native';
import { Button } from '../components';
import { themeType } from '../theme';
import { StackNavigationProp } from '@react-navigation/stack';
import { MainStackParamList } from '../navigations/Main';

interface ThemeProps {
  theme: themeType;
}

const Container = styled.View<ThemeProps>`
  flex: 1;
  background-color: ${({ theme }) => theme.background};
`;

const StyledText = styled.Text`
  font-size: 30px;
`;

type ProfileScreenNavPropsType = StackNavigationProp<
  MainStackParamList,
  'ChannelList'
>;
type Props = {
  navigation: ProfileScreenNavPropsType;
};

const ChannelList = ({ navigation }: Props) => {
  return (
    <Container>
      <StyledText>Channel List</StyledText>
      <Button
        title="Create"
        onPress={() => navigation.navigate('ChannelCreation')}
      />
      <Button title="Channel" onPress={() => navigation.navigate('Channel')} />
    </Container>
  );
};

export default ChannelList;

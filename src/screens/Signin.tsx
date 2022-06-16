import React from 'react';
import styled from 'styled-components/native';
import { themeType } from '../theme';
import { Button } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { StackNavigationProp } from '@react-navigation/stack';
import { AuthStackParamList } from '../navigations/Auth';

const Conatiner = styled.View<styledPropsType>`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.background};
  padding: 0 20px;
  padding-top: ${({ insets }) => insets.top}px;
  padding-bottom: ${({ insets }) => insets.bottom}px;
  padding-left: ${({ insets }) => insets.left}px;
  padding-right: ${({ insets }) => insets.right}px;
`;

const StyledText = styled.Text`
  font-size: 30px;
  color: ${({ theme }: { theme: themeType }) => theme.text};
`;

interface styledPropsType {
  insets: {
    bottom: number;
    left: number;
    right: number;
    top: number;
  };
  theme: themeType;
}

type SigninScreenNavPropsType = StackNavigationProp<
  AuthStackParamList,
  'Signin'
>;
type Props = {
  navigation: SigninScreenNavPropsType;
};

const Signin = ({ navigation }: Props) => {
  const insets = useSafeAreaInsets();

  return (
    <Conatiner insets={insets}>
      <StyledText>Signin</StyledText>
      <Button
        title="signup"
        onPress={() => {
          navigation.navigate('Signup');
        }}
      />
    </Conatiner>
  );
};

export default Signin;

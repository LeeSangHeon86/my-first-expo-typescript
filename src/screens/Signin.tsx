import React, { useContext } from 'react';
import styled from 'styled-components/native';
import { ThemeContext } from 'styled-components';
import { themeType } from '../theme';
import { Button, Image } from '../components';
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

const LOGO =
  'https://firebasestorage.googleapis.com/v0/b/react-native-chat-app-d8603.appspot.com/o/logo.png?alt=media';

const Signin = ({ navigation }: Props) => {
  const insets = useSafeAreaInsets();
  const theme = useContext(ThemeContext);

  return (
    <Conatiner insets={insets}>
      <Image url={LOGO} />
      <StyledText>Signin</StyledText>
      <Button
        title="Signup"
        onPress={() => {
          navigation.navigate('Signup');
        }}
      />
      <Button
        title="signup1"
        onPress={() => {
          navigation.navigate('Signup');
        }}
        containerStyle={{ marginTop: 0, backgroundColor: 'transparent' }}
        textStyle={{ color: theme.btnTitleLink, fontSize: 18 }}
      />
    </Conatiner>
  );
};

export default Signin;

import React, { useContext, useState, useRef } from 'react';
import styled from 'styled-components/native';
import { ThemeContext } from 'styled-components';
import { themeType } from '../theme';
import { Button, Image, Input } from '../components';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { StackNavigationProp } from '@react-navigation/stack';
import { AuthStackParamList } from '../navigations/Auth';
import { TextInput } from 'react-native';

const Conatiner = styled.View<styledPropsType>`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.background};
  padding: 0 20px;
  padding-top: ${({ insets }) => insets.top}px;
  padding-bottom: ${({ insets }) => insets.bottom}px;
  /* padding-left: ${({ insets }) => insets.left}px;
  padding-right: ${({ insets }) => insets.right}px; */
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

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const refPassword = useRef<TextInput>(null);

  const _handleSinginBtnPress = () => {
    console.log('signin');
  };

  return (
    <Conatiner insets={insets}>
      <Image url={LOGO} />
      <Input
        label="Email"
        value={email}
        placeholder="Email"
        onChangeText={setEmail}
        returnKeyType="next"
        maxLength={20}
        textContentType="none"
        onSubmitEditing={() => refPassword.current?.focus()}
      />
      <Input
        ref={refPassword}
        label="Password"
        value={password}
        placeholder="Email"
        onChangeText={setPassword}
        returnKeyType="done"
        maxLength={20}
        isPassword={true}
        onSubmitEditing={_handleSinginBtnPress}
      />
      <Button title="Sign in" onPress={_handleSinginBtnPress} />
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

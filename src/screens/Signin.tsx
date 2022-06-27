import React, { useContext, useState, useRef } from 'react';
import styled from 'styled-components/native';
import { ThemeContext } from 'styled-components';
import { themeType } from '../theme';
import { Button, Image, Input, ErrorMessage } from '../components';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { StackNavigationProp } from '@react-navigation/stack';
import { AuthStackParamList } from '../navigations/Auth';
import { Alert, TextInput } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { signin } from '../firebase';
import { validateEmail, removeWhitespace } from '../utils';
import { useEffect } from 'react';

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

type AdditionalUserInfo = {
  isNewUser: boolean;
  profile: Object | null;
  providerId: string;
  username?: string | null;
};

type AuthCredential = {
  providerId: string;
  signInMethod: string;
};

type User = {
  displayName: string;
  email: string;
  photoURL: string;
  uid: string;
};

type UserCredential = {
  additionalUserInfo?: AdditionalUserInfo | null;
  credential: AuthCredential | null;
  operationType?: string | null;
  user: User | null;
};

const LOGO =
  'https://firebasestorage.googleapis.com/v0/b/react-native-chat-app-d8603.appspot.com/o/logo.png?alt=media';

const Signin = ({ navigation }: Props) => {
  const insets = useSafeAreaInsets();
  const theme = useContext(ThemeContext);

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [disabled, setDisabled] = useState(true);
  const refPassword = useRef<TextInput | null>(null);

  useEffect(() => {
    setDisabled(!(email && password && !errorMessage));
  });

  const _handleEmailChange = (email: string) => {
    const changedEmail = removeWhitespace(email);
    setEmail(changedEmail);
    setErrorMessage(
      validateEmail(changedEmail) ? '' : 'Email 형식이 유효하지 않습니다.',
    );
  };

  const _handlePasswoerChange = (password: string) => {
    const changedpassword = removeWhitespace(password);
    setPassword(changedpassword);
  };

  const _handleSinginBtnPress = async () => {
    try {
      const user = await signin({ email, password });
      navigation.navigate('Profile', { user });
    } catch (e) {
      Alert.alert('Signin Error');
    }
    // console.log('signin');
  };

  return (
    <KeyboardAwareScrollView
      extraScrollHeight={20}
      contentContainerStyle={{ flex: 1 }}
    >
      <Conatiner insets={insets}>
        <Image url={LOGO} onChanePhoto={() => {}} />
        <Input
          label="Email"
          value={email}
          placeholder="Email"
          onChangeText={_handleEmailChange}
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
          onChangeText={_handlePasswoerChange}
          returnKeyType="done"
          maxLength={20}
          isPassword={true}
          onSubmitEditing={_handleSinginBtnPress}
        />
        <ErrorMessage message={errorMessage} />
        <Button
          title="Sign in"
          onPress={_handleSinginBtnPress}
          disabled={disabled}
        />
        <Button
          title="Sign up with email"
          onPress={() => {
            navigation.navigate('Signup');
          }}
          containerStyle={{ marginTop: 0, backgroundColor: 'transparent' }}
          textStyle={{ color: theme.btnTitleLink, fontSize: 18 }}
        />
      </Conatiner>
    </KeyboardAwareScrollView>
  );
};

export default Signin;

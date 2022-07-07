import React, { useState, useRef, useEffect, useContext } from 'react';
import styled from 'styled-components/native';
import { themeType } from '../theme';
import { Button, Image, Input, ErrorMessage } from '../components';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { TextInput, Alert } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { signup } from '../firebase';
import { StackNavigationProp } from '@react-navigation/stack';
import { AuthStackParamList } from '../navigations/Auth';
import { validateEmail, removeWhitespace } from '../utils';
import { UserContext, ProgressContext } from '../contexts';

const Conatiner = styled.View<styledPropsType>`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.background};
  padding: 50px 20px;
  /* padding-top: ${({ insets }) => insets.top}px;
  padding-bottom: ${({ insets }) => insets.bottom}px; */
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

const DEFAULT_Photo =
  'https://firebasestorage.googleapis.com/v0/b/react-native-chat-app-d8603.appspot.com/o/face.png?alt=media';

const Signup = ({ navigation }: Props) => {
  const insets = useSafeAreaInsets();

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordConfirm, setPasswordConfirm] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [disabled, setDisabled] = useState(true);

  const refEmail = useRef<TextInput | null>(null);
  const refPassword = useRef<TextInput | null>(null);
  const refPasswordConfirm = useRef<TextInput | null>(null);

  const [photo, setPhoto] = useState(DEFAULT_Photo);

  const { setUser } = useContext(UserContext);
  const { spinner } = useContext(ProgressContext);

  useEffect(() => {
    setDisabled(
      !(name && email && password && passwordConfirm && !errorMessage),
    );
  }, [name, email, password, passwordConfirm, errorMessage]);

  useEffect(() => {
    let error: string = '';
    if (!name) {
      error = 'Please enter your name';
    } else if (!email) {
      error = 'Please enter your email';
    } else if (!validateEmail(email)) {
      error = 'Please verify your email';
    } else if (password.length < 6) {
      error = 'The password must contain 6 characters at least';
    } else if (password !== passwordConfirm) {
      error = 'The password need to match';
    } else {
      error = '';
    }
    setErrorMessage(error);
  }, [name, email, password, passwordConfirm]);

  const _handleSingupBtnPress = async () => {
    try {
      spinner.start();
      const user = await signup({ name, email, password, photo });
      setUser(user);
      // navigation.navigate('Profile', { user });
    } catch (e) {
      Alert.alert('Signup Error');
    } finally {
      spinner.stop();
    }
    // console.log('signup');
  };

  return (
    <KeyboardAwareScrollView extraScrollHeight={20} enableOnAndroid={true}>
      <Conatiner insets={insets}>
        <Image showButton={true} url={photo} onChanePhoto={setPhoto} />
        <Input
          label="Name"
          value={name}
          placeholder="Name"
          onChangeText={setName}
          returnKeyType="next"
          maxLength={20}
          textContentType="none"
          onSubmitEditing={() => refEmail.current?.focus()}
          onBlur={() => setName(name.trim())} // 공백 방지
        />
        <Input
          ref={refEmail}
          label="Email"
          value={email}
          placeholder="Email"
          onChangeText={setEmail}
          returnKeyType="next"
          maxLength={20}
          textContentType="none"
          onSubmitEditing={() => refPassword.current?.focus()}
          onBlur={() => setEmail(removeWhitespace(email))} // 공백 방지
        />
        <Input
          ref={refPassword}
          label="Password"
          value={password}
          placeholder="Password"
          onChangeText={setPassword}
          returnKeyType="next"
          maxLength={20}
          textContentType="none"
          isPassword={true}
          onSubmitEditing={() => refPasswordConfirm.current?.focus()}
          onBlur={() => setPassword(removeWhitespace(password))} // 공백 방지
        />
        <Input
          ref={refPasswordConfirm}
          label="Password Confirm"
          value={passwordConfirm}
          placeholder="Password"
          onChangeText={setPasswordConfirm}
          returnKeyType="done"
          maxLength={20}
          textContentType="none"
          isPassword={true}
          onSubmitEditing={_handleSingupBtnPress}
          onBlur={() => setPasswordConfirm(removeWhitespace(passwordConfirm))} // 공백 방지
        />
        <ErrorMessage message={errorMessage} />
        <Button
          title="Sign up"
          onPress={_handleSingupBtnPress}
          disabled={disabled}
        />
      </Conatiner>
    </KeyboardAwareScrollView>
  );
};

export default Signup;

import React, { useState, useRef } from 'react';
import styled from 'styled-components/native';
import { themeType } from '../theme';
import { Button, Image, Input } from '../components';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { TextInput } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

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

const Signup = () => {
  const insets = useSafeAreaInsets();

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordConfirm, setPasswordConfirm] = useState('');

  const refEmail = useRef<TextInput | null>(null);
  const refPassword = useRef<TextInput | null>(null);
  const refPasswordConfirm = useRef<TextInput | null>(null);

  const _handleSingupBtnPress = () => {
    console.log('signup');
  };

  return (
    <KeyboardAwareScrollView extraScrollHeight={20} enableOnAndroid={true}>
      <Conatiner insets={insets}>
        <Image />
        <Input
          label="Name"
          value={name}
          placeholder="Name"
          onChangeText={setName}
          returnKeyType="next"
          maxLength={20}
          textContentType="none"
          onSubmitEditing={() => refEmail.current?.focus()}
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
        />
        <Button title="Sign up" onPress={_handleSingupBtnPress} />
      </Conatiner>
    </KeyboardAwareScrollView>
  );
};

export default Signup;

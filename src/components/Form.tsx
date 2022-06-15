import React, { useState, useEffect, useRef } from 'react';
import { TextInput } from 'react-native';
import styled from 'styled-components/native';
import Button from './Button';

const StyledInput = styled.TextInput`
  border: 1px solid #111111;
  padding: 10px;
  margin: 10px 0;
  width: 200px;
  font-size: 24px;
`;

const StyledText = styled.Text`
  font-size: 24px;
  margin: 10px;
`;

const Form = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const refName = useRef<TextInput>(null);
  const refEmail = useRef<TextInput>(null);
  // const refName = useRef<HTMLInputElement | null>(null);
  // const refEmail = useRef<HTMLInputElement | null>(null);

  const count = 0;

  useEffect(() => {
    console.log('--------Mount--------');
    refName.current?.focus();
    return () => console.log('--------UnMount--------');
  }, []);

  useEffect(() => {
    console.log(`name : ${name}, email : ${email}`);
  }, [email]);

  const onSubmit = () => console.log('submit');

  return (
    <>
      <StyledText>Name : {name}</StyledText>
      <StyledText>Email : {email}</StyledText>
      <StyledInput
        ref={refName}
        value={name}
        onChangeText={text => setName(text)}
        returnKeyType={'next'}
        onSubmitEditing={() => refEmail.current?.focus()}
        placeholder={'Name'}
      />
      <StyledInput
        ref={refEmail}
        value={email}
        onChangeText={text => setEmail(text)}
        returnKeyType={'done'}
        onSubmitEditing={onSubmit}
        placeholder={'Email'}
      />
      <Button title="count" onPress={() => count + 1} />
      <StyledText>count : {count}</StyledText>
    </>
  );
};

export default Form;

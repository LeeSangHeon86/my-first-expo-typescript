import React, { useState, useRef, useEffect, useContext } from 'react';
import styled from 'styled-components/native';
import { Button, Input, ErrorMessage } from '../components';
import { themeType } from '../theme';
import { StackNavigationProp } from '@react-navigation/stack';
import { MainStackParamList } from '../navigations/Main';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { ProgressContext } from '../contexts';
import { createChannel } from '../firebase';
import { Alert } from 'react-native';

interface ThemeProps {
  theme: themeType;
}

const Container = styled.View<ThemeProps>`
  flex: 1;
  background-color: ${({ theme }) => theme.background};
  justify-content: center;
  align-items: center;
  padding: 0 20px;
`;

const StyledText = styled.Text`
  font-size: 30px;
`;

type ChannelCreationScreenNavPropsType = StackNavigationProp<
  MainStackParamList,
  'ChannelCreation'
>;

type Props = {
  navigation: ChannelCreationScreenNavPropsType;
};

const ChannelCreation = ({ navigation }: Props) => {
  const [title, setTitle] = useState('');
  const [desc, setDesc] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [disabled, setDisabled] = useState(true);

  const refDesc = useRef(null);

  const { spinner } = useContext(ProgressContext);

  useEffect(() => {
    setDisabled(!(title && !errorMessage));
  }, [title, errorMessage]);

  const _handleTitleChange = (title: string) => {
    setTitle(title);
    setErrorMessage(title.trim() ? '' : 'Please enter the title');
  };

  const _handleDescChange = (desc: string) => {
    setDesc(desc);
    setErrorMessage(title.trim() ? '' : 'Please enter the Description');
  };

  const _handleCreateBtnPress = async () => {
    try {
      spinner.start();
      const id = await createChannel({
        title: title.trim(),
        desc: desc.trim(),
      });
      navigation.replace('Channel', { id, title });
    } catch (e) {
      Alert.alert('Creation Error', e.message);
    } finally {
      spinner.stop();
    }
  };

  return (
    <KeyboardAwareScrollView
      contentContainerStyle={{ flex: 1 }}
      extraScrollHeight={20}
      enableOnAndroid={true}
    >
      <Container>
        <StyledText>Channel Creation</StyledText>
        <Input
          label="Title"
          value={title}
          onChangeText={_handleTitleChange}
          onSubmitEditing={() => refDesc.current.focus()}
          onBlur={() => setTitle(title.trim())}
          placeholder="Title"
          returnKeyType="next"
          maxLength={20}
        />
        <Input
          ref={refDesc}
          label="Description"
          value={desc}
          onChangeText={_handleDescChange}
          onSubmitEditing={_handleCreateBtnPress}
          onBlur={() => setDesc(desc.trim())}
          placeholder="Description"
          returnKeyType="done"
          maxLength={40}
        />
        <ErrorMessage message={errorMessage} />
        <Button
          title="Create"
          disabled={disabled}
          // onPress={() => navigation.replace('Channel')}
          onPress={_handleCreateBtnPress}
        />
      </Container>
    </KeyboardAwareScrollView>
  );
};

export default ChannelCreation;

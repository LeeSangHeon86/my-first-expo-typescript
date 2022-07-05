import React, { useState, useEffect } from 'react';
import styled from 'styled-components/native';
import { themeType } from '../theme';
import { Input } from '../components';
import { createMessage, getCurrentUser, app } from '../firebase';
import { GiftedChat, Send } from 'react-native-gifted-chat';
import { Alert } from 'react-native';
import {
  getFirestore,
  collection,
  onSnapshot,
  query,
  doc,
  orderBy,
} from 'firebase/firestore';
import { MaterialIcons } from '@expo/vector-icons';

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

const SendButton = (props: { text?: string }) => {
  return (
    <Send
      {...props}
      containerStyle={{
        width: 44,
        height: 44,
        justifyContent: 'center',
        alignItems: 'center',
        marginHorizontal: 4,
      }}
      disabled={!props.text}
    >
      <MaterialIcons name="send" size={24} />
    </Send>
  );
};

const Channel = ({ route }) => {
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState([]);
  const { uid, name, photo } = getCurrentUser();

  const _handleMessageSend = async (messageList: object[]) => {
    // console.log(messageList);
    const message = messageList[0];
    try {
      await createMessage({ channelId: route.params.id, message });
    } catch (e) {
      Alert.alert('Message Error', e.message);
    }
  };

  const db = getFirestore(app);

  useEffect(() => {
    const docRef = doc(db, 'channels', route.params.id);
    const collectionQuery = query(
      collection(db, `${docRef.path}/messages`),
      orderBy('createdAt', 'desc'),
    );
    const unsubscribe = onSnapshot(collectionQuery, snapshot => {
      const list = [];
      snapshot.forEach(doc => {
        list.push(doc.data());
      });
      setMessages(list);
    });
    return () => unsubscribe();
  }, []);

  return (
    <Container>
      {/* <StyledText>Channel</StyledText>
      <StyledText>{route.params.id}</StyledText>
      <StyledText>{route.params.title}</StyledText> */}
      {/* <Input
        value={message}
        onChangeText={setMessage}
        onSubmitEditing={() =>
          createMessage({ channelId: route.params.id, message })
        }
      /> */}
      <GiftedChat
        placeholder="Enter a message..."
        messages={messages}
        user={{
          _id: uid,
          name: name,
          avatar: photo,
        }}
        onSend={_handleMessageSend}
        scrollToBottom={true}
        renderUsernameOnMessage={true}
        alwaysShowSend={true}
        renderSend={props => SendButton(props)}
      />
    </Container>
  );
};

export default Channel;

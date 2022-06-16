import React, { useLayoutEffect } from 'react';
import styled from 'styled-components/native';
import Button from '../components/Button';
import { MaterialIcons } from '@expo/vector-icons';

const Container = styled.View`
  align-items: center;
  flex: 1;
  justify-content: center;
  background-color: #ffffff;
`;

const StyledText = styled.Text`
  font-size: 30px;
  margin: 10px;
`;

const Chat = ({ navigation, route }) => {
  useLayoutEffect(() => {
    navigation.setOptions({
      headerLeft: ({ onPress, tintColor }) => {
        return (
          <MaterialIcons
            name="chevron-left"
            size={26}
            style={{ marginLeft: 11 }}
            onPress={onPress}
            color={tintColor}
          />
        );
      },
      headerRight: ({ onPress, tintColor }) => {
        return (
          <MaterialIcons
            name="home"
            size={26}
            style={{ marginRight: 11 }}
            onPress={() => navigation.popToTop()}
            color={tintColor}
          />
        );
      },
    });
  }, []);

  return (
    <Container>
      <StyledText>Chat</StyledText>
      <StyledText>{route.params.id}</StyledText>
      <StyledText>{route.params.name}</StyledText>
      <Button
        title="Home"
        onPress={() =>
          navigation.reset({
            routes: [{ name: 'Home' }, { name: 'List' }],
            // routes: [{ name: 'Home' }],
          })
        }
      />
    </Container>
  );
};

export default Chat;

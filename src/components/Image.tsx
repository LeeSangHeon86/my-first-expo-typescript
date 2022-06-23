import React from 'react';
import styled from 'styled-components/native';
import { themeType } from '../theme';

const Container = styled.View`
  margin-bottom: 30px;
`;

interface styledPropsType {
  theme: themeType;
}

const ProfileImage = styled.Image<styledPropsType>`
  background-color: ${({ theme }) => theme.imgBackground};
  width: 100px;
  height: 100px;
  border-radius: 50px;
`;

interface PropsType {
  url?: string;
}

const faceLogo =
  'https://firebasestorage.googleapis.com/v0/b/react-native-chat-app-d8603.appspot.com/o/face.png?alt=media';

const Image = ({ url = faceLogo }: PropsType) => {
  return (
    <Container>
      <ProfileImage source={{ uri: url }} />
    </Container>
  );
};

export default Image;

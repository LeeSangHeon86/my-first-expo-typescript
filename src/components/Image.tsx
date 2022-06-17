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
  url: string;
}

const Image = ({ url }: PropsType) => {
  return (
    <Container>
      <ProfileImage source={{ uri: url }} />
    </Container>
  );
};

export default Image;

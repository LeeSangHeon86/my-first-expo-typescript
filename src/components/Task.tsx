import React from 'react';
import styled from 'styled-components/native';
import IconButton from './IconButton';
import { icons } from '../icons';
import { theme, themeType } from '../theme';

const Container = styled.View`
  flex-direction: row;
  align-items: center;
  background-color: ${({ theme }: themeType) => theme.itemBackground};
  border-radius: 10px;
  padding: 5px;
  margin: 3px 0;
`;

const Contents = styled.Text`
  flex: 1;
  font-size: 24px;
  color: ${({ theme }: themeType) => theme.text};
`;

type propsType = {
  text: string;
};

const Task = ({ text }: propsType) => {
  return (
    <Container>
      <IconButton icon={icons.uncheck} />
      <Contents>{text}</Contents>
      <IconButton icon={icons.edit} />
      <IconButton icon={icons.delete} />
    </Container>
  );
};

export default Task;

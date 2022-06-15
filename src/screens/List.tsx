import React from 'react';
import styled from 'styled-components/native';
import Button from '../components/Button';

const Container = styled.View`
  align-items: center;
  flex: 1;
  justify-content: center;
`;

const StyledText = styled.Text`
  font-size: 30px;
  margin: 10px;
`;

const items = [
  { id: 1, name: 'React Native' },
  { id: 2, name: 'Expo' },
  { id: 3, name: 'React Navigation' },
];

const List = () => {
  return (
    <Container>
      <StyledText>List</StyledText>
      {items.map(({ id, name }) => (
        <Button key={id} title={name} />
      ))}
    </Container>
  );
};

export default List;

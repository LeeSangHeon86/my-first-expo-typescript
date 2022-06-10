import React, { useState } from 'react';
import styled from 'styled-components/native';
import IconButton from './IconButton';
import { icons } from '../icons';
import { theme, themeType } from '../theme';
import Input from './Input';

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
  color: ${({
    theme,
    completed,
  }: {
    theme: themeType['theme'];
    completed: boolean;
  }) => (completed ? theme.done : theme.text)};
  text-decoration: ${({ completed }: { completed: boolean }) =>
    completed ? 'line-through' : 'none'};
`;

type propsType = {
  deleteTask: (id: string) => void;
  toggleTask: (id: string) => void;
  updateTask: (item: { id: string; text: string; completed: boolean }) => void;
  item: {
    id: string;
    text: string;
    completed: boolean;
  };
};

const Task = ({ deleteTask, toggleTask, updateTask, item }: propsType) => {
  const [isEditing, setIsEditing] = useState(false);
  const [text, setText] = useState(item.text);

  const _onPress = () => {
    const editItem = Object.assign({}, item);
    editItem.text = text;
    updateTask(editItem);
    setIsEditing(!isEditing);
  };

  return isEditing ? (
    <Input
      isEditing={isEditing}
      value={text}
      onChangeText={text => setText(text)}
      onSubmitEditing={_onPress}
      onBlur={() => {
        setText(item.text);
        setIsEditing(false);
      }}
    />
  ) : (
    <Container>
      <IconButton
        icon={item.completed ? icons.check : icons.uncheck}
        item={item}
        onPress={toggleTask}
      />
      <Contents completed={item.completed}>{item.text}</Contents>
      {item.completed || (
        <IconButton
          icon={icons.edit}
          item={item}
          onPress={() => setIsEditing(!isEditing)}
        />
      )}
      <IconButton icon={icons.delete} item={item} onPress={deleteTask} />
    </Container>
  );
};

export default Task;

import React, { useState, useEffect } from 'react';
import { StatusBar } from 'react-native';
import styled, { ThemeProvider } from 'styled-components/native';
import { theme, themeType } from './theme';
import Input from './components/Input';
import Task from './components/Task';
import { useWindowDimensions } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Container = styled.SafeAreaView`
  flex: 1;
  background-color: ${({ theme }: themeType) => theme.background};
  align-items: center;
  justify-content: flex-start;
`;

const Title = styled.Text`
  font-size: 40px;
  font-weight: 600;
  color: ${({ theme }: themeType) => theme.main};
  width: 100%;
  align-items: flex-end;
  padding: 0 20px;
`;

const List = styled.ScrollView`
  flex: 1;
  width: ${({ width }: { width: number }) => width - 40}px;
`;

export default function App() {
  const [newTask, setNewTask] = useState('');
  const width = useWindowDimensions().width;

  // const tempData = {
  //   '1': { id: '1', text: 'React Native', completed: false },
  //   '2': { id: '2', text: 'Expo', completed: false },
  // };

  type tempDataTypes = {
    [ID: string]: {
      id: string;
      text: string;
      completed: boolean;
    };
  };

  const [tasks, setTasks] = useState({});

  const storeData = async (tasks: tempDataTypes) => {
    try {
      await AsyncStorage.setItem('tasks', JSON.stringify(tasks));
      setTasks(tasks);
    } catch (e) {
      console.log(e);
    }
  };

  const getData = async () => {
    const loadedData = await AsyncStorage.getItem('tasks');
    setTasks(JSON.parse(loadedData || '{}'));
  };

  const addTask = () => {
    if (newTask.length < 1) {
      return;
    }

    const ID = Date.now().toString();
    const objectNewTask = {
      [ID]: { id: ID, text: newTask, completed: false },
    };

    alert(newTask);
    setNewTask('');

    // setTasks({ ...tasks, ...objectNewTask });
    // Async storage 사용에 따른 교체
    storeData({ ...tasks, ...objectNewTask });
  };

  const deleteTask = (id: string) => {
    const currentTasks: tempDataTypes = Object.assign({}, tasks);
    delete currentTasks[id];
    // setTasks(currentTasks);
    // Async storage 사용에 따른 교체
    storeData(currentTasks);
  };

  const toggleTask = (id: string) => {
    const currentTasks: tempDataTypes = Object.assign({}, tasks);
    currentTasks[id].completed = !currentTasks[id].completed;
    // setTasks(currentTasks);
    // Async storage 사용에 따른 교체
    storeData(currentTasks);
  };

  const updateTask = (item: {
    id: string;
    text: string;
    completed: boolean;
  }) => {
    const currentTasks: tempDataTypes = Object.assign({}, tasks);
    currentTasks[item.id] = item;
    // setTasks(currentTasks);
    // Async storage 사용에 따른 교체
    storeData(currentTasks);
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <Container>
        <StatusBar
          backgroundColor={theme.background}
          barStyle="light-content"
        />
        <Title>ToDo List</Title>
        <Input
          value={newTask}
          onChangeText={(text: string) => setNewTask(text)}
          onSubmitEditing={addTask}
          onBlur={() => setNewTask('')}
        />
        <List width={width}>
          {Object.values(tasks)
            .reverse()
            .map((item: tempDataTypes['ID']) => {
              return (
                <Task
                  key={item.id}
                  item={item}
                  deleteTask={deleteTask}
                  toggleTask={toggleTask}
                  updateTask={updateTask}
                />
              );
            })}
        </List>
      </Container>
    </ThemeProvider>
  );
}

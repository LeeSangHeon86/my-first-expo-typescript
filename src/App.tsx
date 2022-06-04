import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Button, Alert } from 'react-native';
import MyButton from './MyButton';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>이상헌 첫 리액트 네이티브!!!!!!!</Text>
      <StatusBar style="auto" />
      {/* <Button title="button" onPress={() => Alert.alert('Click')} /> */}
      <MyButton title="1st props" onPress={() => Alert.alert('1st click')} />
      <MyButton title="2st props" onPress={() => Alert.alert('2st click')}>
        22st props
      </MyButton>
      <MyButton onPress={() => Alert.alert('3st click')}>confirm</MyButton>
      <MyButton />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  containers: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

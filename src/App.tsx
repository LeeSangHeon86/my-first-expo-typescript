import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, Alert, TextInput } from 'react-native';
import MyButton from './MyButton';

export default function App() {
  const [addition, setAddition] = useState<number>(0);
  const [multiple, setMultiple] = useState<number>(1);

  const calculate = () => {
    setAddition(addition + 2);
    setMultiple(multiple * 2);
  };
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
      <Text style={{ fontSize: 20 }}>더하기 : {addition}</Text>
      <Text style={{ fontSize: 20 }}>곱하기 : {multiple}</Text>
      <Button title="Click" onPress={() => calculate()} />
      <TextInput
        style={{ borderColor: 'black', borderWidth: 1 }}
        onChangeText={event => console.log(event)}
      />
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

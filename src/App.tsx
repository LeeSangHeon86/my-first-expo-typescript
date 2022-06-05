import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Box from './Box';
import Shadow from './Shadow';

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Shadow />
      {/* <Box style={{ backgroundColor: 'red', height: 100 }} />
      <Box style={{ backgroundColor: 'blue', flex: 1 }} />
      <Box style={{ backgroundColor: 'pink', height: 100 }} /> */}
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
});

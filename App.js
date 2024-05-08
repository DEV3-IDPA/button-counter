import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

export default function App() {
  const [counter, setCounter] = useState(0);
  function increaseCounter() {
    // setCounter(counter + 1);
    // setCounter(counter + 1);
    setCounter(currentCount => {
      return currentCount + 1;
    });
    setCounter(currentCount => {
      return currentCount + 1;
    });
  }
  function decreaseCounter() {
    // setCounter(counter - 1);
    // setCounter(counter - 1);
    setCounter(currentCount => {
      return currentCount - 1;
    });
    setCounter(currentCount => {
      return currentCount - 1;
    });
  }


  return (
    <View style={styles.container}>
      {/* <Button title="click me!" onPress={() => setCounter(counter + 1)} /> */}
      <Button style="button" title="increase me!" onPress={() => increaseCounter()} />
      <Button style="button" title="decrease me!" onPress={() => decreaseCounter()} />
      {/* <Button style="button" title="click me!" onPress={() => setCounter((currentCounter) => currentCounter + 1)} /> */}
      <Text style="text">you clicked {counter} times</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  }
});

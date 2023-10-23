import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { AntDesign } from '@expo/vector-icons';

function Counter() {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    setCount(count - 1);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.counterText}>Counter: {count}</Text>
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button} onPress={increment}>
          <AntDesign name="pluscircleo" size={32} color="green" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={decrement}>
          <AntDesign name="minuscircleo" size={32} color="red" />
        </TouchableOpacity>
      </View>
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
  counterText: {
    fontSize: 24, // Adjust the font size as needed
  },
  buttonContainer: {
    flexDirection: 'row', // Arrange buttons in a row
  },
  button: {
    margin: 10, // Add spacing between buttons
  },
});

export default Counter;

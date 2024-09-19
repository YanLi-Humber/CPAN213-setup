import { StatusBar } from 'expo-status-bar';
import { TextInput, Button, StyleSheet, Text, View, Image } from 'react-native';
import React, { useState } from 'react';

export default function App() {
  const [inputValue, setInputValue] = useState('');
  const [displayText, setDisplayText] = useState('Hey!');

  const handleButtonPress = () => {
    if (inputValue.trim() !== '') {
      setDisplayText(inputValue);
      setInputValue(''); 
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Hello</Text>
      <TextInput
        style={styles.input}
        placeholder="What is your favorite food?"
        value={inputValue}
        onChangeText={setInputValue}
      />
      <Button title="Submit" onPress={handleButtonPress} />
      
      <Text style={styles.text}>{displayText}</Text>
      

      {displayText !== 'Hey!' && (
        <Text style={styles.responseText}>I know, {displayText} is just so great!</Text>
      )}

      <Image source={require('./image/relax.jpg')}
        style={styles.image}
      />
      
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'pink',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 30,
  },
  input: {
    height: 40,
    borderColor: 'black',
    borderWidth: 1,
    width: '100%',
    marginBottom: 10,
    paddingHorizontal: 10,
    fontSize:20,
  },
  text: {
    marginTop: 40,
    fontSize: 25,
  },
  responseText: {
    marginTop: 10,
    fontSize: 18,
    color: 'brown', 
  },
  image: {
    width: 150,
    height: 150,
    marginTop: 20,
  },
});

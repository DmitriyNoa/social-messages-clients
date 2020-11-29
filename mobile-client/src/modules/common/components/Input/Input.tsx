import React from 'react';
import {StyleSheet, TextInput, TextInputProps} from 'react-native';

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#999',
    color: '#fff',
    fontSize: 20,
    height: 55,
    borderRadius: 5,
    padding: 10,
  },
});

const Input = ({onChangeText, placeholder, value}: TextInputProps) => {
  return (
    <TextInput
      style={[styles.container]}
      onChangeText={onChangeText}
      placeholder={placeholder}
      value={value}
    />
  );
};

export {Input};

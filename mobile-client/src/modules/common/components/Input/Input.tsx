import React from 'react';
import {StyleSheet, TextInput, TextInputProps} from 'react-native';

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#222',
    color: '#faf9e1',
    fontSize: 20,
    height: 55,
    borderRadius: 5,
    padding: 10,
    textTransform: 'lowercase',
  },
});

const Input = ({
  onChangeText,
  placeholder,
  value,
  autoCapitalize = 'none',
  secureTextEntry = false,
}: TextInputProps) => {
  return (
    <TextInput
      style={[styles.container]}
      onChangeText={onChangeText}
      placeholder={placeholder}
      value={value}
      autoCapitalize={autoCapitalize}
      secureTextEntry={secureTextEntry}
    />
  );
};

export {Input};

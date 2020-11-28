import React, {useState} from 'react';
import {StyleSheet, View, Text, TextInput} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
  },
  loginFormContainer: {
    width: '80%',
    borderColor: 'red',
    height: 200,
    borderWidth: 1,
  },
});
const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const processText = (value: string, type: 'email' | 'password') => {
    if (type === 'email') {
      setEmail(value);
    } else if (type === 'password') {
      setPassword(value);
    }
  };
  return (
    <View>
      <View style={styles.loginFormContainer}>
        <Text>Login</Text>
        <TextInput
          onChangeText={(text) => processText(text, 'email')}
          placeholder={'email'}
          value={email}
        />

        <TextInput
          onChangeText={(text) => processText(text, 'password')}
          placeholder={'password'}
          value={password}
        />
      </View>
    </View>
  );
};

export {Login};

import React, {useState} from 'react';
import {StyleSheet, View, Text, ImageBackground} from 'react-native';
import {layoutStyles} from '../../common/styles';
import {Input} from '../../common/components';
import {space} from '../../common/backgrounds';

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    backgroundColor: 'transparent',
  },
  loginFormContainer: {
    width: '80%',
    height: 200,
    alignSelf: 'center',
  },
  image: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
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
    <ImageBackground style={styles.image} source={space}>
      <View style={[layoutStyles.container, styles.container]}>
        <View style={styles.loginFormContainer}>
          <Text>Login</Text>
          <Input
            onChangeText={(text) => processText(text, 'email')}
            placeholder={'email'}
            value={email}
          />

          <Input
            onChangeText={(text) => processText(text, 'password')}
            placeholder={'password'}
            value={password}
          />
        </View>
      </View>
    </ImageBackground>
  );
};

export {Login};

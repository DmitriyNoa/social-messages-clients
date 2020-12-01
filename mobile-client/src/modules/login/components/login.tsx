import React, {useState} from 'react';
import {StyleSheet, View, Text, ImageBackground, Image} from 'react-native';
import {layoutStyles} from '../../common/styles';
import {planet, space} from '../../common/backgrounds';
import {Input} from '../../common';
import {COLORS} from 'common-libs';

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    backgroundColor: 'transparent',
    paddingLeft: 10,
    paddingRight: 10,
  },
  loginFormContainer: {
    width: '100%',
    position: 'absolute',
    top: '50%',
    left: 10,
    zIndex: 200,
    backgroundColor: COLORS.grey_0,
    padding: 20,
    borderRadius: 20,
    marginTop: -100,
  },
  image: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
  },
  title: {
    fontSize: 22,
    textAlign: 'center',
    marginBottom: 10,
    color: COLORS.lightText,
    fontFamily: 'Syncopate-Regular',
  },
  inputWrapper: {
    marginBottom: 10,
  },
  planet: {
    position: 'absolute',
    top: '50%',
    left: 0,
    width: '100%',
    zIndex: 50,
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
        <View styles={styles.planet}>
          <Image source={planet} />
        </View>
        <View style={styles.loginFormContainer}>
          <Text style={styles.title}>login</Text>
          <View style={styles.inputWrapper}>
            <Input
              onChangeText={(text) => processText(text, 'email')}
              placeholder={'email'}
              value={email}
            />
          </View>
          <View style={styles.inputWrapper}>
            <Input
              onChangeText={(text) => processText(text, 'password')}
              secureTextEntry={true}
              placeholder={'password'}
              value={password}
            />
          </View>
        </View>
      </View>
    </ImageBackground>
  );
};

export {Login};

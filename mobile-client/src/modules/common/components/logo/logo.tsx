import React from 'react';
import {Platform, StyleSheet, Text} from 'react-native';

const styles = StyleSheet.create({
  logo: {
    fontSize: 22,
    textAlign: 'center',
    color: '#fff',
    fontFamily: 'Syncopate-Bold',
    position: 'absolute',
    top: Platform.OS === 'ios' ? 50 : 20,
    zIndex: 300,
    width: '100%',
  },
});
const Logo = () => {
  return <Text style={styles.logo}>SpaCeCial</Text>;
};

export {Logo};

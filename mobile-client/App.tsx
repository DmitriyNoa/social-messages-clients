import React from 'react';
import {Text, View} from 'react-native';

import {NativeRouter, Route, Link} from 'react-router-native';

import {textStyles} from './src/modules/common/styles';

import {Login} from './src/modules/login';
import {Logo} from './src/modules/common';

const Home = () => (
  <Text>
    <View>
      <Link to="/login">
        <Text style={textStyles.black}>Login</Text>
      </Link>
    </View>
  </Text>
);

const App = () => (
  <NativeRouter>
    <Route path="/" component={Login} />
    <Route path="/rrr" component={Home} />
    <Logo />
  </NativeRouter>
);

export default App;

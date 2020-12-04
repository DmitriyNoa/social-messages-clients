import React from 'react';
import {Text, View} from 'react-native';
import {Provider} from 'react-redux';
import {NativeRouter, Route, Link} from 'react-router-native';
import {textStyles} from './src/modules/common/styles';
import {Login} from './src/modules/login';
import {Logo} from './src/modules/common';
import {store} from 'common-libs';

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
  <Provider store={store}>
    <NativeRouter>
      <Route path="/" component={Login} />
      <Route path="/login" component={Home} />
      <Logo />
    </NativeRouter>
  </Provider>
);

export default App;

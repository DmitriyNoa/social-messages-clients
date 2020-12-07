import React from 'react';
import {Text, View} from 'react-native';
import {Provider} from 'react-redux';
import {NativeRouter, Route, Link} from 'react-router-native';
import {layoutStyles, textStyles} from './src/modules/common/styles';
import {Login} from './src/modules/login';
import {Logo} from './src/modules/common';
import {store} from 'common-libs';
import {PrivateRoute} from './src/modules/common/components/auth/guarded';

const Home = () => (
  <View style={layoutStyles.container}>
    <Link to="/login">
      <Text style={textStyles.black}>Login</Text>
    </Link>
  </View>
);

const App = () => (
  <Provider store={store}>
    <NativeRouter>
      <PrivateRoute exact={true} path="/" component={Home} />
      <Route path="/login" component={Login} />
      <Logo />
    </NativeRouter>
  </Provider>
);

export default App;

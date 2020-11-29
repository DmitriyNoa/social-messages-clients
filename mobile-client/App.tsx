import React from 'react';
import {Text, View} from 'react-native';

import {NativeRouter, Route, Link} from 'react-router-native';
import {Login} from './src/modules/login/components/login';
import {textStyles} from './src/modules/common/styles';

const Home = () => (
  <Text>
    <View>
      <Link to="/login" style={{marginTop: 50}}>
        <Text style={textStyles.black}>Login</Text>
      </Link>
    </View>
    Home
  </Text>
);

const App = () => (
  <NativeRouter>
    <Route exact path="/" component={Home} />
    <Route path="/login" component={Login} />
  </NativeRouter>
);

export default App;

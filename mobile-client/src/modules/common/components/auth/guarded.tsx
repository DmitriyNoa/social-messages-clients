import React, {useEffect, useState} from 'react';
import {Route, Redirect, withRouter} from 'react-router-native';
import {useSelector} from 'react-redux';
import {IAppState} from 'common-libs';
import AsyncStorage from '@react-native-async-storage/async-storage';

const PrivateRoute = (props: any) => {
  const authToken = useSelector((state: IAppState) => {
    return state.auth.token;
  });
  const [token, setToken] = useState('');

  useEffect(() => {
    AsyncStorage.getItem('@token').then((data) => {
      data && setToken(data);
      data && props.history.push(props.path);
    });
  }, [props.history]);

  useEffect(() => {
    setToken(authToken);
  }, [authToken]);

  return token ? (
    <Route path={props.path} component={props.component} />
  ) : (
    <Redirect to="/login" />
  );
};
export default withRouter(PrivateRoute);

import React, {useEffect, useState} from 'react';
import {Route, Redirect} from 'react-router-native';
import {useSelector} from 'react-redux';
import {IAppState} from 'common-libs';

const PrivateRoute: React.FC<{
  component: React.FC;
  path: string;
  exact?: boolean;
}> = (props) => {
  const authToken = useSelector((state: IAppState) => {
    return state.auth.token;
  });

  const [token, setToken] = useState('');

  useEffect(() => {
    setToken(authToken);
  }, [authToken]);

  console.log('Checking token', token);
  return token ? (
    <Route path={props.path} component={props.component} />
  ) : (
    <Redirect to="/login" />
  );
};
export {PrivateRoute};

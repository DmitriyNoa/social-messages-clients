import { takeEvery, all } from 'redux-saga/effects';
import {loginAsync} from '../..';
import {login} from './login';

export const rootSaga = function* root() {

    // call login generator function on every loginAsync.request dispatch
    yield all([
        takeEvery(loginAsync.request, login),
    ]);
};

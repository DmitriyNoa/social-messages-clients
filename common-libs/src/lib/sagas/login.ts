
import { CONSTANTS } from '../constants';
import { put, call } from 'redux-saga/effects';
import {config} from '../config';
import {ILogin, IUser} from '../interfaces/users';
import {loginAsync} from '../actions/user/user';
import { post} from '../utils/http-client';
import AsyncStorage from '@react-native-async-storage/async-storage';

const storeData = async (value: string) => {
    try {
        await AsyncStorage.setItem('@token', value)
    } catch (e) {
        // saving error
    }
}

function* login(action: ReturnType<typeof loginAsync.request>): Generator<any, ILogin | null, ILogin> {
    console.log("`${config.API_URL}/${CONSTANTS.URLS.LOGIN}`", `${config.API_URL}/${CONSTANTS.URLS.LOGIN}`);
    try {
        const data = yield post<IUser, ILogin>(`${config.API_URL}/${CONSTANTS.URLS.LOGIN}`, action.payload);
        yield put(loginAsync.success(data));
        return data;
    } catch (err) {
        yield put(loginAsync.failure(err));
        return null;
    }
}

function* processAuth(action: ReturnType<typeof loginAsync.success>) {
    yield call(storeData, action.payload.token);
}


export {
    login,
    processAuth,
}

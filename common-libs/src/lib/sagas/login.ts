
import { CONSTANTS } from '../constants';
import { put } from 'redux-saga/effects';
import {config} from '../config';
import {ILogin, IUser} from '../interfaces/users';
import {loginAsync} from '../actions/user/user';
import {post} from '../utils/http-client';

function* login(action: ReturnType<typeof loginAsync.request>): Generator<any, ILogin | null, ILogin> {
    try {
        const data = yield post<IUser, ILogin>(`${config.API_URL}/${CONSTANTS.URLS.LOGIN}`, action.payload);
        yield put(loginAsync.success(data));
        return data;
    } catch (err) {
        console.error(err );
        yield put(loginAsync.failure(err));
        return null;
    }
}


export {
    login,
}

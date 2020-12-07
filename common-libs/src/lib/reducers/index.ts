import { combineReducers } from 'redux';
import {ILogin} from "../interfaces/users";
import { auth } from "./user/user";


export interface IAppState {
    auth: ILogin;
}

export const rootReducers = combineReducers<IAppState>({
    auth,
});

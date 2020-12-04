import { combineReducers } from 'redux';
import {IUser} from "../interfaces/users";
import {user} from "./user/user";


export interface IAppState {
    user: IUser;
}

export const rootReducers = combineReducers<IAppState>({
    user,
});

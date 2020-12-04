import { createAsyncAction } from "typesafe-actions";
import { CONSTANTS } from "../../constants";
import {ILogin, IUser} from "../../interfaces/users";

export const loginAsync = createAsyncAction(
    CONSTANTS.ACTIONS.USER.GET_USER_REQUEST,
    CONSTANTS.ACTIONS.USER.GET_USER_SUCCESS,
    CONSTANTS.ACTIONS.USER.GET_USER_FAILURE
)<IUser, ILogin, Error>();

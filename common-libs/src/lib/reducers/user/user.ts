import { loginAsync} from "../../actions/user/user";
import { getType } from "typesafe-actions";
import {ILogin, IUser} from "../../interfaces/users";

const userInitialState: ILogin = {
    token: '',
};

export const auth = (state: ILogin = userInitialState, action: ReturnType<typeof loginAsync.success>) => {
    switch (action.type) {
        case getType(loginAsync.success): {
            return action.payload;
        }
        default:
            return state;
    }
}

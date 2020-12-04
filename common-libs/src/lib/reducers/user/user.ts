import { loginAsync} from "../../actions/user/user";
import { getType } from "typesafe-actions";
import { IUser } from "../../interfaces/users";

const userInitialState: IUser = {
    email: '',
    id: '',
};

export const user = (state: IUser = userInitialState, action: ReturnType<typeof loginAsync.success>) => {
    switch (action.type) {
        case getType(loginAsync.success): {
            return action.payload;
        }
        default:
            return state;
    }
}

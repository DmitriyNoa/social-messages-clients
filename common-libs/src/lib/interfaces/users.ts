interface IUser {
    email: string;
    password?: string;
    id?: string;
}

interface ILogin {
    token: string;
}

export {
    IUser,
    ILogin,
}

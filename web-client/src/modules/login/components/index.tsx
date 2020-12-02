import React from 'react';
import {cx} from "emotion";
import {loginStyles} from "./login.css";

const Login = () => {
    return (
        <section className={cx(loginStyles.root)}>
            <section className={cx(loginStyles.planet)}>

            </section>
        </section>
    )
}

export {
    Login,
}

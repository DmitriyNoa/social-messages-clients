import React from 'react';
import {cx} from '@emotion/css';
import {loginStyles} from './login.css';
import {Input} from '../../common';

const Login = () => {
    return (
        <section className={cx(loginStyles.root)}>
            <section className={cx(loginStyles.planet)}>
                <div className={cx(loginStyles.container)}>
                    <div className={cx(loginStyles.loginForm)}>
                        <div className={cx(loginStyles.title)}>login</div>
                        <div className={cx(loginStyles.inputWrapper)}>
                            <Input name={'login'} id={'login'} value={''}  />
                        </div>
                        <div>
                            <Input name={'password'} id={'password'} value={''}  />
                        </div>
                    </div>
                </div>
            </section>
        </section>
    )
}

export {
    Login,
}

import { css } from "@emotion/css";
import {COLORS, THEME} from "common-libs";



interface LoginCss {
    root?: string;
    planet: string;
    container: string;
    loginForm: string;
    title: string;
    inputWrapper: string;
}

export const loginStyles: LoginCss = {
    root: css({
        width: '100%',
        height: '100%',
        backgroundColor: COLORS.black,
        backgroundImage: `url(${THEME.BACKGROUNDS.space})`,
    }),
    planet: css({
        width: '100%',
        height: '100%',
        backgroundImage: `url(${THEME.BACKGROUNDS.planet})`,
        backgroundSize: 'cover',
        boxSizing: 'border-box',
        padding: 10,
    }),
    container: css({
        width: '100%',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        boxSizing: 'border-box',
        justifyContent: 'center',
        fontFamily: 'Syncopate, sans-serif',
    }),
    title: css({
        fontSize: 22,
        textAlign: 'center',
        marginBottom: 10,
        color: COLORS.lightText,
    }),
    loginForm: css({
        backgroundColor: COLORS.grey_0,
        padding: 20,
        borderRadius: 20,
        boxSizing: 'border-box',
    }),
    inputWrapper: css({
        marginBottom: '10px',
    }),
};

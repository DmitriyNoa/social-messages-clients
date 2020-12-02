import { css } from "emotion";
import {COLORS, THEME} from "common-libs";



interface LoginCss {
    root?: string;
    planet: string;
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
        backgroundSize: 'cover'
    }),
};

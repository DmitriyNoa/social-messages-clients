import React from 'react';
import {css, cx} from "emotion";
import {COLORS} from "common-libs";

export const logoStyles: any = {
    root: css({
        position: 'absolute',
        top: '20px',
        left: 0,
        width: '100%',
        fontSize: 22,
        textAlign: 'center',
        fontWeight: 'bold',
        fontFamily: 'Syncopate, sans-serif',
        color: COLORS.lightText,
    })
};


const Logo = () => <div className={cx(logoStyles.root)}>spacecial</div>;

export {
    Logo,
}

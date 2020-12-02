import React from 'react';
import {css, cx} from "emotion";
import {COLORS} from "common-libs";

interface IInputProps {
    name: string;
    id: string;
    dataTestId?: string;
    value?: string | number;
    onChange?: (value: string | number) => void;
}

export const inputStyles: any = {
    root: css({
        backgroundColor: COLORS.grey_2,
        color: COLORS.lightText,
        fontSize: 20,
        height: 55,
        borderRadius: 5,
        padding: 10,
        textTransform: 'lowercase',
        border: 0,
        boxShadow: 'none',
        width: '100%',
        boxSizing: 'border-box',
    })
};

const Input = ({name, id, value, onChange}: IInputProps) => {
    return (
        <input type="text" id={id} className={cx(inputStyles.root)} name={name} value={value} onChange={(e) => {onChange && onChange(e.target.value)}}/>
    )
};

export {
    Input,
}

import styles from './ActionButton.module.css';
import { MouseEventHandler } from 'react';

export enum Colors {
    White,
    Light,
    Medium,
    Dark
}

type ActionButtonProps = {
    children: JSX.Element | string,
    color: Colors,
    onClick: MouseEventHandler<HTMLButtonElement> | undefined,
}

function mapColorToStyle(color: Colors){
    if(color === Colors.White){
        return styles.ActionButtonWhite;
    } else if(color === Colors.Light){
        return styles.ActionButtonLight;
    } else if (color === Colors.Medium){
        return styles.ActionButtonMedium;
    } else if (color === Colors.Dark){
        return styles.ActionButtonDark;
    }
}

export const ActionButton = ({ children, color, onClick }: ActionButtonProps) => {
    let buttonstyle = mapColorToStyle(color);
    return (
        <button className={buttonstyle} onClick={onClick}>
            {children}
        </button>
    )
}

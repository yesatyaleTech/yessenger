import { useState, useRef, useEffect } from "react";
import { Menu } from "./Menu/Menu";
import styles from './Toggle.module.css';

import arrow from '../../../images/arrow.svg';

export const DropDownToggle = () => {
    const [dropdown, setDropdown] = useState(false);
    return (
        <button
            onClick={(_) => {
                setDropdown(!dropdown);
            }}
            className={styles.ddToggle}>
            <img className={styles.profileImg} />
            <img className={dropdown ? styles.rddArrow : styles.ddArrow} src={arrow} />
            <Menu
                isOpen={dropdown}
            />
        </button>
    );
}


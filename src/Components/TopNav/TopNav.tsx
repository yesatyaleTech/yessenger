import React, { useState } from 'react';
import styles from './TopNav.module.css'
import PastMessageContext from '../../context/past-message-context'
import { useHistory } from 'react-router-dom';
import { DropDownToggle } from './Dropdown/Toggle';

const TopNav: React.FC = () => {

    const history = useHistory();
    return (
        <div className={styles.topNav}>
            <div className={styles.navLeft}>
                <DropDownToggle/>
            </div>
            <div className={styles.navRight}>
                <button className={styles.navButton}>
                    Dashboard
                </button>
                <button className={styles.navButton}>
                    Contacts
                </button>
                <button className={styles.navButton}>
                    Billing
                </button>
                <button className={styles.navButton}>
                    New Message
                </button>
            </div>
        </div>
    )
}


export default TopNav;
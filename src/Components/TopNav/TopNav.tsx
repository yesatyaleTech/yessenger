import React, { useState } from 'react';
import styles from './TopNav.module.css'
import PastMessageContext from '../../context/past-message-context'
import { useHistory } from 'react-router-dom';
import { Dropdown } from './Dropdown/Dropdown';
import arrow from '../../images/arrow.svg';

const TopNav: React.FC = () => {

    const history = useHistory();
    const [dropdown, setDropdown] = useState(false);
    return (
        <div className={styles.topNav}>
            <div className={styles.navLeft}>
                <button
                    onClick={(_) => {
                        setDropdown(!dropdown);
                    }}
                    className={styles.ddToggle}>
                    <img className={styles.profileImg} />
                    <img className={styles.ddArrow} src={arrow} />
                    <Dropdown
                        isOpen={dropdown}
                    />
                </button>
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
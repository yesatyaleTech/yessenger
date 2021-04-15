import React, { useState } from 'react';
import classes from './SideNav.module.css'

const SideNav = () => {

    const title = "clicked";

    const [t, setT] = useState(title);

    const clickHandler = () => {
        setT('Clicked!')
        console.log(t)
    }
    return (      
        <div className={classes.sideNav}>
            <button onClick={clickHandler} className={classes.composeButton}>New Message</button>
            <div className={classes.options}>
                <p>Dashboard</p>
                <p>Contacts</p>
                <p>Billing</p>
            </div>
        </div>
    )
}
    

export default SideNav;
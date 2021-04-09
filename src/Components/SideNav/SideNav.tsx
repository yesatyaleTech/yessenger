import React from 'react';
import classes from './SideNav.module.css'

const SideNav = () => {
    return (      
        <div className={classes.sideNav}>
            <button className={classes.composeButton}>New Message</button>
            <div className={classes.options}>
                <p>Dashboard</p>
                <p>Contacts</p>
                <p>Billing</p>
            </div>
        </div>
    )
}
    

export default SideNav;
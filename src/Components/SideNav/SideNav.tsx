import React, { useContext } from 'react';
import classes from './SideNav.module.css'
import PastMessageContext from '../../context/past-message-context'

const SideNav = () => {

    const ctx = useContext(PastMessageContext);

    return (      
        <div className={classes.sideNav}>
            <button onClick={() => ctx.toggleMessage('', '', '', '')} className={classes.composeButton}>New Message</button>
            <div className={classes.options}>
                <div className={classes.txtBox}>
                    <a className={classes.txt} href="/">Dashboard</a>
                </div>
                <div className={classes.txtBox}>
                    <a className={classes.txt} href="/">Contacts</a>
                </div>
                <div className={classes.txtBox}>
                    <a className={classes.txt} href="/">Billing</a>
                </div>
                
                
            </div>
        </div>
    )
}
    

export default SideNav;
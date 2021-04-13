import React from 'react';
import classes from './Compose.module.css'

const Compose = () => {
    return (
        <div className={classes.Compose}>
            <div className={classes.leftBox}></div>
            <div className={classes.middleBox}></div>
            <div className={classes.rightBox}></div>
            <div className={classes.text}>Message Name (Recipient will not see):</div>
            <input className={classes.titleBox} />
            <div className={classes.contact}>Select Contact List:</div>
            <div className={classes.dropdown}>
                <button className={classes.dropbtn}><span className={classes.arrow}>v</span></button>
                <div className={classes.dropdownContent}>
                    <a href="/">Group 1</a>
                    <a href="/">Group 2</a>
                    <a href="/">Group 3</a>
                </div>
            </div>
            <div className={classes.message}>Text Message:</div>
            <textarea className={classes.messageBox}></textarea>
            <button className={classes.composeButton}>Send Message</button>
        </div>
    )
}
    

export default Compose;
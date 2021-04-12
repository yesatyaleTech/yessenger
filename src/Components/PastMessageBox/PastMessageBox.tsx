import React from 'react';
import classes from './PastMessageBox.module.css'

const PastMessageBox = ()  => {
    return (
        <div className={classes.box}>
            <div className={classes.title}>
                (Untitled)
            </div>
            <div className={classes.time}>
                Now
            </div>
        </div>
    )
}
    

export default PastMessageBox;
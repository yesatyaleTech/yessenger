import React from 'react';
import classes from './PastMessageBox.module.css'

interface PastMessageBoxProps {
    title: string,
    time: string,
    key: number
}

const PastMessageBox = ({title, time}: PastMessageBoxProps)  => {
    return (
        <div className={classes.box}>
            <div className={classes.title}>
                {title}
            </div>
            <div className={classes.time}>
                {time}
            </div>
        </div>
    )
}
    

export default PastMessageBox;
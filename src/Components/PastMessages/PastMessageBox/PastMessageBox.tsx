import React from 'react';
import classes from './PastMessageBox.module.css'
import moment from 'moment'

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
                {moment(time).calendar()}
            </div>
        </div>
    )
}
    

export default PastMessageBox;
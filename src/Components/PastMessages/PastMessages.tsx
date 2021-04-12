import React from 'react';
import classes from './PastMessages.module.css'
import PastMessageBox from '../PastMessageBox/PastMessageBox'

const PastMessages = () => {
    return (
        <div className={classes.PastMessages}>
            <PastMessageBox />
            <PastMessageBox />
            <PastMessageBox />
            <PastMessageBox />
            <PastMessageBox />
            <PastMessageBox />
            <PastMessageBox />
            <PastMessageBox />
            <PastMessageBox />
        </div>
    )
}
    

export default PastMessages;
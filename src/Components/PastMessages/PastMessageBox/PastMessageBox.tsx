import React, {useContext} from 'react';
import classes from './PastMessageBox.module.css'
import moment from 'moment'
import PastMessageContext from '../../../context/past-message-context'

interface PastMessageBoxProps {
    title: string,
    time: string,
    key: number
    message: string,
    group: string,
}

const PastMessageBox = ({title, time, group, message}: PastMessageBoxProps)  => {
    const ctx = useContext(PastMessageContext)
    return (
        <div onClick={() => ctx.toggleMessage(title, time, group, message)} className={classes.box}>
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
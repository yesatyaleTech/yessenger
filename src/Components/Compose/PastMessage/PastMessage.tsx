import React from 'react';
import classes from './PastMessage.module.css'

interface Message {
    title: string,
    time: string,
    group: string,
    message: string
};


const PastMessage = ({title, time, group, message}: Message) => {
    return (
        <div className={classes.start}>
            <div className={classes.title}>
                {title}
            </div>
            <div className={classes.time}>
                {time}
            </div>
            <div className={classes.group}>
                To: {group}
            </div>
            <div className={classes.message}>
                {message}
            </div>           
        </div>
    )
}
    

export default PastMessage;
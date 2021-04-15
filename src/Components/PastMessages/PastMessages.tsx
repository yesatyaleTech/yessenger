import React from 'react';
import classes from './PastMessages.module.css'
import PastMessageBox from './PastMessageBox/PastMessageBox'

interface Message {
    title: string,
    time: string,
};

interface PastMessageProps {
    messagesObject: Message[];
}


const PastMessages = ({messagesObject}: PastMessageProps) => {
    return (
        <div className={classes.PastMessages}>
            {messagesObject.map((message, index) => <PastMessageBox key={index} title={message.title} time={message.time} />)}
        </div>
    )
}
    

export default PastMessages;
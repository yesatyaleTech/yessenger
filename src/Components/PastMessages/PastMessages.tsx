import React from 'react';
import classes from './PastMessages.module.css'
import PastMessageBox from './PastMessageBox/PastMessageBox'

interface Message {
    title: string,
    id: string,
    time: string,
    message: string,
    contactGroup: string,
};

interface PastMessageProps {
    messagesObject: Message[],
}


const PastMessages = ({messagesObject}: PastMessageProps) => {
    return (
        <div className={classes.PastMessages}>
            {messagesObject.map((message, index) => <PastMessageBox key={index} title={message.title} time={message.time} message={message.message} group={message.contactGroup} />)}
        </div>
    )
}
    

export default PastMessages;
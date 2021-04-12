import React, { useState } from 'react';
import classes from './PastMessages.module.css'
import PastMessageBox from '../PastMessageBox/PastMessageBox'
import moment from 'moment'

const DUMMY_MESSAGES = [{title: 'Party', time: moment("2021-04-12" + ' ' + '10:44').calendar()}, 
                        {title: 'Yessenger Meeting', time: moment("2021-04-11" + ' ' + '13:00').calendar()}, 
                        {title: 'Test Message', time: moment("2021-04-10" + ' ' + '13:00').calendar()},
                        {title: 'Test Message2', time: moment("2021-04-09" + ' ' + '13:00').calendar()},
                        {title: 'Test Message3', time: moment("2021-04-08" + ' ' + '13:00').calendar()},
                        {title: 'Test Message4', time: moment("2021-04-07" + ' ' + '13:00').calendar()},
                        {title: 'Test Message5', time: moment("2021-04-06" + ' ' + '13:00').calendar()},
                        {title: 'Test Message6', time: moment("2021-04-05" + ' ' + '13:00').calendar()},
                        {title: 'Test Message7', time: moment("2021-04-04" + ' ' + '13:00').calendar()}]

interface MessagePropType {
    title: string,
    time: string,
};


const PastMessages = () => {
    const [messages, setMessages] = useState(DUMMY_MESSAGES)

    const addMessageHandler = (message: MessagePropType) => {
        setMessages(prevMessages => {
            return [message, ...prevMessages]
        });
    }

    return (
        <div className={classes.PastMessages}>
            {messages.map((message, index) => <PastMessageBox key={index} title={message.title} time={message.time} />)}
        </div>
    )
}
    

export default PastMessages;
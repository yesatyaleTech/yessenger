import React, {useState} from 'react';
import SideNav from '../../components/SideNav/SideNav'
import PastMessages from '../../components/PastMessages/PastMessages'
import Compose from '../../components/Compose/Compose'
import moment from 'moment';

import classes from './ComposePage.module.css'

const DUMMY_MESSAGES = [{title: 'Party', id: "1", time: moment("2021-04-12 10:44").toString(), message: "hello", contactGroup: "Group 1"}, 
                        {title: 'Yessenger Meeting', id: "2", time: moment("2021-04-11 13:00:00").toString(), message: "hello", contactGroup: "Group 1"}, 
                        {title: 'Test Message', id: "3", time: moment("2021-04-10 13:00:00").toString(), message: "hello", contactGroup: "Group 1"},
                    ]

interface Message {
    title: string,
    id: string,
    time: string,
    message: string,
    contactGroup: string,
};

const ComposePage = () => {
    const [messages, setMessages] = useState(DUMMY_MESSAGES)

    const addMessageHandler = (message: Message) => {
        setMessages(prevMessages => {
            return [message, ...prevMessages]
        });
    }
    return (
        <div className={classes.grid}>
            <SideNav/>
            <PastMessages messagesObject={messages}/>
            <Compose onAddMessage={addMessageHandler} />
        </div>
    )
}
    

export default ComposePage;
import React, {useState} from 'react';
import SideNav from '../../Components/SideNav/SideNav'
import PastMessages from '../../Components/PastMessages/PastMessages'
import Compose from '../../Components/Compose/Compose'
import moment from 'moment';
import PastMessageContext from '../../context/past-message-context'

import classes from './ComposePage.module.css'

const DUMMY_MESSAGES = [{title: 'Party', id: "1", time: moment("2021-04-20 10:44").toString(), message: "Swag money, peeps. Loads of food and drinks.", contactGroup: "Beach Boys"}, 
                        {title: 'Yessenger Meeting', id: "2", time: moment("2021-04-19 13:00:00").toString(), message: "Meeting at 1 PM today, folks!", contactGroup: "Tech Team"}, 
                        {title: 'Test Message', id: "3", time: moment("2021-04-17 13:00:00").toString(), message: "Testing 1... 2... 3...", contactGroup: "Group 1"},
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

    const [message, setMessage] = useState({
        title: '',
        time: '',
        message: '',
        contactGroup: '',
    });

    const updateShownMessageHandler = (title: string, time: string, group: string, message: string) => {
        setMessage({
                title: title, 
                time: time, 
                contactGroup: group, 
                message: message,
            })
    };

    return (
        <div className={classes.grid}>
            <PastMessageContext.Provider value={{
                message,
                toggleMessage: updateShownMessageHandler,
            }}>
                <SideNav/>
                <PastMessages messagesObject={messages}/>
                <Compose onAddMessage={addMessageHandler} />
            </PastMessageContext.Provider>
        </div>
    )
}
    

export default ComposePage;
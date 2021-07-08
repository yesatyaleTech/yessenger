import React, {useContext} from 'react';
import classes from './Compose.module.css'
import Form from './Form/Form'
import PastMessage from './PastMessage/PastMessage'
import PastMessageContext from '../../context/past-message-context'

interface ComposeProps {
    onAddMessage: (data: any) => void,
};

const Compose = ({ onAddMessage }: ComposeProps) => {

    const saveMessageDataHandler = (enteredMessageData: any) => {
        const messageData = {
            ...enteredMessageData,
            id: Math.random().toString()
        };
        onAddMessage(messageData)
    }

    const ctx = useContext(PastMessageContext);

    return (
        <div className={classes.Compose}>
            {ctx.message.time === '' ? 
                (<Form onSaveMessageData={saveMessageDataHandler} />) : 
                (<PastMessage title={ctx.message.title} time={ctx.message.time} group={ctx.message.contactGroup} message={ctx.message.message} />)}
        </div>
    )
}


export default Compose;
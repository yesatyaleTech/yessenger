import React from 'react';
import classes from './Compose.module.css'
import Form from './Form/Form'

interface ComposeProps {
    onAddMessage: (data: any) => void,
};
 
const Compose = ({onAddMessage}: ComposeProps) => {

    const saveMessageDataHandler = (enteredMessageData: any) => {
        const messageData = {
            ...enteredMessageData,
            id: Math.random().toString()
        };
        onAddMessage(messageData)
    }

    return (
        <div className={classes.Compose}>
            <div className={classes.leftBox}></div>
            <div className={classes.middleBox}></div>
            <div className={classes.rightBox}></div>
            <Form onSaveMessageData={saveMessageDataHandler}/>
        </div>

    )
}
    

export default Compose;
import React, { useState, ChangeEvent, SyntheticEvent, BaseSyntheticEvent } from 'react'

import moment from "moment"

import classes from './Form.module.css'

const DUMMY_CONTACTS = [
    { label: "Group 1", value: "Group 1" },
    { label: "Group 2", value: "Group 2" },
    { label: "Group 3", value: "Group 3" }]

interface FormProps {
    onSaveMessageData: (data: any) => void,
};

const Form = ({onSaveMessageData}: FormProps) => {
    const [enteredTitle, setEnteredTitle] = useState('')
    const [selectedContact, setSelectedContact] = useState('')
    const [enteredMessage, setEnteredMessage] = useState('')

    const titleChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
        setEnteredTitle(event.currentTarget.value)
    };

    const selectedHandler = (event: BaseSyntheticEvent) => {
        setSelectedContact(event.currentTarget.value)
    };

    const messageChangeHandler = (event: BaseSyntheticEvent) => {
        setEnteredMessage(event.currentTarget.value)
    };

    const submitHandler = (event: SyntheticEvent) => {
        event.preventDefault();

        const messageData = {
            title: enteredTitle,
            contactGroup: selectedContact,
            message: enteredTitle,
            time: moment(moment().format("YYYY-MM-DD hh:mm:ss").toString()).toString()
        }
        console.log(messageData.time)

        onSaveMessageData(messageData)

        setEnteredTitle('')
        setSelectedContact('')
        setEnteredMessage('')
    };

    return (
        <form className={classes.start} onSubmit={submitHandler}>
            <div>
                <label htmlFor="title">Message Name (Recipient will not see):</label>
                <input type='text' id="title" value={enteredTitle} onChange={titleChangeHandler} maxLength={25} className={classes.titleBox} required />
            </div>
            <div className={classes.gap}>
                <label htmlFor='select' className={classes.contact}>Select Contact List:</label>
                <select name="plan" id="select" onChange={selectedHandler} className={classes.selectBox} value={selectedContact} required>
                    <option value='' hidden></option>
                    {DUMMY_CONTACTS.map((contact, index) => (
                        <option
                        key={index}
                        value={contact.value}
                        >
                        {contact.label}
                        </option>
                    ))}
                </select>
            </div>
            <div className={classes.gap}>
                <label htmlFor='message' className={classes.message}>Text Message:</label>
                <textarea onChange={messageChangeHandler} value={enteredMessage} id='message' className={classes.messageBox} required></textarea>
            </div>
            <div>
                <button className={classes.composeButton}>Send Message</button>
            </div>
            
        </form>
    )
}
    

export default Form;


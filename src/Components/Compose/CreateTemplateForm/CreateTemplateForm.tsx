import React, { useState, ChangeEvent, SyntheticEvent, BaseSyntheticEvent } from 'react'

import moment from "moment"

import classes from './CreateTemplateForm.module.css'

const DUMMY_VARIABLES = [
    { label: "Individual's Name", value: "contact.name" },
    { label: "Event Name", value: "event.name" }]

const CreateTemplateForm = () => {
    const [enteredTitle, setEnteredTitle] = useState('')
    const [enteredMessage, setEnteredMessage] = useState('')
    const [variableList, setVariableList] = useState([{replace: '', variable: ''}]);

    const titleChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
        setEnteredTitle(event.currentTarget.value)
    };

    const selectedHandler = (e: BaseSyntheticEvent, index: number) => {
        const { name, value } = e.target;
        let list: any = [...variableList];
        list[index][name] = value;
        setVariableList(list);
    };

    const messageChangeHandler = (event: BaseSyntheticEvent) => {
        setEnteredMessage(event.currentTarget.value)
    };

    const submitHandler = (event: SyntheticEvent) => {
        event.preventDefault();

        const TemplateData = {
            title: enteredTitle,
            replaceVariablesList: variableList,
            message: enteredTitle,
            time: moment(moment().format("YYYY-MM-DD hh:mm:ss").toString()).toString()
        }
        console.log(TemplateData)

        setEnteredTitle('')
        setVariableList([{replace: '', variable: ''}])
        setEnteredMessage('')
    };

    const handleVariableInputChange = (e: BaseSyntheticEvent, index: number) => {
        const { name, value } = e.target;
        let list: any = [...variableList];
        list[index][name] = value;
        setVariableList(list);
      };

    const handleRemoveClick = (index: number) => {
        const list = [...variableList];
        list.splice(index, 1);
        setVariableList(list);
    };

    const handleAddClick = () => {
        setVariableList([...variableList, {replace: "", variable: ""}])
    }

    const variableForms = variableList.map((input: any, i: number) => (
            <div className={classes.gap}>
                <input type='text' name="replace" value={input.replace} onChange={e => handleVariableInputChange(e, i)} maxLength={25} className={classes.variableInput} required />
                <select name="variable" onChange={e => selectedHandler(e, i)} className={classes.selectBox} value={input.variable} required>
                    <option value='' hidden></option>
                    {DUMMY_VARIABLES.map((variable, index) => (
                        <option
                        key={index}
                        value={variable.value}
                        >
                        {variable.label}
                        </option>
                    ))}
                </select>
                <button type="button" onClick={() => handleRemoveClick(i)} className={classes.removeButton}>-</button>
            </div>
        ))

    return (
        <form className={classes.start} onSubmit={submitHandler}>
            <div>
                <label htmlFor="title">Template Name:</label>
                <input type='text' id="title" value={enteredTitle} onChange={titleChangeHandler} maxLength={25} className={classes.titleBox} required />
            </div>
            <div className={classes.gap}>
                <label htmlFor='select' className={classes.contact}>Enter variable(s) you want replaced:</label>
                {variableForms}
            </div>
            <div className={classes.gap}>
                <button type="button" onClick={handleAddClick} className={classes.addButton}>+</button>
            </div>
            <br></br>
            <div className={classes.gap}>
                <label htmlFor='message' className={classes.message}>Template Body:</label>
                <textarea onChange={messageChangeHandler} value={enteredMessage} id='message' className={classes.messageBox} required></textarea>
            </div>
            <div>
                <button className={classes.composeButton}>Create Template</button>
            </div>
            
        </form>
    )
}
    

export default CreateTemplateForm;


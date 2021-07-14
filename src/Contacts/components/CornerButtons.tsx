import React, { useState } from 'react';

interface Props {
    updateDisplay: (value: string[]) => void;
}
const CornerButtons = (props: Props) => {
    const [displayPeople, updatePeople] = useState(true);
    const [displayTeams, updateTeams] = useState(true);
    const togglePeople = () => { //Handles hook for the button and parent contacts
        let display:string[] = []
        if(!displayPeople){
            display.push("people")
        }
        if(displayTeams){
            display.push("teams")
        }
        updatePeople(!displayPeople)
        props.updateDisplay(display)
    }
    const toggleTeams = () => { //Handles hook for the button and parent contacts
        let display:string[] = []
        if(displayPeople){
            display.push("people")
        }
        if(!displayTeams){
            display.push("teams")
        }
        updateTeams(!displayTeams)
        props.updateDisplay(display)
    }
    const getPersonIcon = () => { //Gets the correct icon (filled or not filled) based on displayPeople
        let path = displayPeople ? <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"/> : <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0zm4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4zm-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10z"/>
        let className = displayPeople ? "bi bi-person-fill" : "bi bi-person"
        return <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className={className} viewBox="0 0 16 16">{path}</svg>;
    }
    const getTeamIcon = () => { //Gets the correct icon (filled or not filled) based on displayTeams
        let path = displayTeams ? <React.Fragment><path d="M7 14s-1 0-1-1 1-4 5-4 5 3 5 4-1 1-1 1H7zm4-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"/><path fillRule="evenodd" d="M5.216 14A2.238 2.238 0 0 1 5 13c0-1.355.68-2.75 1.936-3.72A6.325 6.325 0 0 0 5 9c-4 0-5 3-5 4s1 1 1 1h4.216z"/><path d="M4.5 8a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5z"/></React.Fragment>:<React.Fragment><path d="M15 14s1 0 1-1-1-4-5-4-5 3-5 4 1 1 1 1h8zm-7.978-1A.261.261 0 0 1 7 12.996c.001-.264.167-1.03.76-1.72C8.312 10.629 9.282 10 11 10c1.717 0 2.687.63 3.24 1.276.593.69.758 1.457.76 1.72l-.008.002a.274.274 0 0 1-.014.002H7.022zM11 7a2 2 0 1 0 0-4 2 2 0 0 0 0 4zm3-2a3 3 0 1 1-6 0 3 3 0 0 1 6 0zM6.936 9.28a5.88 5.88 0 0 0-1.23-.247A7.35 7.35 0 0 0 5 9c-4 0-5 3-5 4 0 .667.333 1 1 1h4.216A2.238 2.238 0 0 1 5 13c0-1.01.377-2.042 1.09-2.904.243-.294.526-.569.846-.816zM4.92 10A5.493 5.493 0 0 0 4 13H1c0-.26.164-1.03.76-1.724.545-.636 1.492-1.256 3.16-1.275zM1.5 5.5a3 3 0 1 1 6 0 3 3 0 0 1-6 0zm3-2a2 2 0 1 0 0 4 2 2 0 0 0 0-4z"/></React.Fragment>;
        let className = displayTeams ? "bi bi-people-fill" : "bi bi-people"
        return <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className={className} viewBox="0 0 16 16">{path}</svg>;
    }
    return (
        <div id="cornerButtons" style={{
                backgroundColor: "#C4C4C4", 
                position: "absolute", 
                top: 0, 
                right: 0, 
                width:"10%", 
                height:"5%",
                borderRadius: "0px 0px 0px 25px"
        }}>                
            <div onClick={togglePeople}>{getPersonIcon()}</div>
            <div onClick={toggleTeams}>{getTeamIcon()}</div>
        </div>
    )
}
export default CornerButtons;
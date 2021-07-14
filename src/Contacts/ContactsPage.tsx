import React, { useState } from 'react';
import SideNav from './components/SideNav';
import getContacts from './RandomContactGenerator';
import { orderContacts, getTeamById, getPersonById } from './contactHelperFunctions';
import PersonRow from './components/PersonRow';
import CornerButtons from './components/CornerButtons'

import { Contacts, OrderedContacts, Person, Team } from './contactInterfaces';
const tableColors = ["rgba(0,0,0,0.1)", "rgba(0,0,0,0)"];
const ContactsPage = () => {
    const [display, updateDisplay] = useState(["people", "teams"])
    const [contacts, updateContacts] = useState(getContacts()); //This is where all the contacts are stored
    const [selected, updateSelected] = useState([]);
    var orderedContacts: OrderedContacts = orderContacts(contacts);
    var mainContent: JSX.Element[] = [];
    const keys: string[] = Object.keys(orderedContacts);
    keys.sort();
    for(let i = 0; i < keys.length; i++){
        let contactTeam = orderedContacts[keys[i]]
        let innerContacts: (Person | Team)[] = [];
        mainContent.push(<tr key={i}><th>{keys[i]}</th></tr>)
        
        if(display.includes("people")){
            innerContacts = innerContacts.concat(contactTeam.people);
        }
        if(display.includes("teams")){
            innerContacts = innerContacts.concat(contactTeam.teams);
        }
        innerContacts.sort((a, b) => a.name.localeCompare(b.name));
        for(let j = 0; j < innerContacts.length; j++){
            let person = innerContacts[j] as Person;
            let team = innerContacts[j] as Team;
            let content:JSX.Element;
            if(person.phone_number){ //This is how we detect that a contact is for a person
                let teamNames:string[] = [];
                person.teams.forEach((teamID) => {
                    teamNames.push(getTeamById(contacts, teamID));
                });
                content = <PersonRow person={person} teamNames={teamNames}/>;
            }
            else{ //Otherwise is a team
                content = <React.Fragment><th>{team.name}</th><th></th><th>{team.id}</th>
                    </React.Fragment>;
            }
            mainContent.push(<tr key={i+":"+j} style={{backgroundColor: tableColors[j%2], maxWidth: "40%"}}>{content}</tr>)
        }
        /*mainContent.push(<div key={i}>
            <table>
                <thead>
                    <tr>
                        <th>{keys[i]}: {contactTeam.people.length} People, {contactTeam.teams.length} Teams</th>
                    </tr>
                </thead>
                <tbody>
                    {innerRows}
                </tbody>
            </table>
        </div>);*/
    }
    return (
        <React.Fragment>
            <SideNav/>
            <div style={{marginLeft: "20%"}}>
                <CornerButtons updateDisplay={updateDisplay}/>
                <table>
                    <tbody>{mainContent}</tbody>
                </table>
            </div>
        </React.Fragment>
    )
}
export default ContactsPage;

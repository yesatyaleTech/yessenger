import React from 'react';
import { Person } from '../contactInterfaces';
interface Props {
    person: Person;
    teamNames: string[];
}
const PersonRow = (props: Props) => { //Stores a single row in the contact table
    const separate = (list:string[], separator:JSX.Element | string = <br key={"br"+props.person.id}/>) => {
        let returnString:(string|JSX.Element)[] = [];
        for(let i = 0; i < list.length; i++){
            returnString.push(list[i]);
            if(i < list.length-1){
                returnString.push(separator);
            }
        }
        return returnString;
    }
    return <React.Fragment>
        <th>{props.person.name}</th>
        <th>{props.person.phone_number}</th>
        <th>{separate(props.teamNames)}</th>
    </React.Fragment>
}
export default PersonRow;
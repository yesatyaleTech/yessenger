import { Contacts, Person, Team, OrderedContacts } from './contactInterfaces';
export const sortContacts = (contacts: Contacts) => { //Apparently there's a method for this, but I already made this before getting them
    contacts.people.sort((a, b) =>  a.name.localeCompare(b.name)); //Compares alphabet order
    contacts.teams.sort((a, b) =>  a.name.localeCompare(b.name));
    return contacts;
}
export const orderContacts = (contacts: Contacts) => {
    let orderedContacts: OrderedContacts = {};
    contacts.people.forEach((person) => {
        let letter = person.name[0];
        if(letter in orderedContacts){
            orderedContacts[letter].people.push(person);
        }
        else{
            orderedContacts[letter] = {people: [], teams: []}
        }
    });
    contacts.teams.forEach((team) => {
        let letter = team.name[0];
        if(letter in orderedContacts){
            orderedContacts[letter].teams.push(team);
        }
        else{
            orderedContacts[letter] = {people: [], teams: []}
        }
    });
    return orderedContacts;
}
export const getPersonById = (contacts: Contacts, id: string) => {
    for(let i = 0; i < contacts.people.length; i++){
        if(contacts.people[i].id == id){
            return contacts.people[i].name;
        }
    }
    return "User not found";
}
export const getTeamById = (contacts: Contacts, id: string) => {
    for(let i = 0; i < contacts.teams.length; i++){
        if(contacts.teams[i].id == id){
            return contacts.teams[i].name;
        }
    }
    return id
    return "Team not found";
}
export interface Contacts {
    people: Array<Person>;            
    teams: Array<Team>;
}
export interface Person {
    name: string;
    id: string;
    phone_number: string;
    teams: Array<string>;
}
export interface Team {
    name: string;
    id: string;
    people: Array<string>;
}
export interface OrderedContacts {
    [letter: string]: Contacts;
}
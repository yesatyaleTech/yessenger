import { Contacts, Person, Team } from './contactInterfaces';

const getContacts = (peopleCount:number=100, teamCount:number=10, maxPeoplePerTeam:number=10) => { //Just a sample for what a contacts json would look like
    var contacts: Contacts = {people: [], teams: []};
    for(let i = 0; i < peopleCount; i++){
        let person: Person = {
            name: sampleNameList[Math.floor(Math.random()*sampleNameList.length)],
            id: getRandomID(),
            phone_number: getRandomPhoneNumber(),
            teams: [],
        };
        contacts.people.push(person);
    }  
    for(let i = 0; i < teamCount; i++){            
        let team: Team = {
            name: sampleTeamList[Math.floor(Math.random()*sampleTeamList.length)]+Math.floor(Math.random()*10),
            id: getRandomID(),
            people: [],
        }
        for(let j = 0; j < Math.floor(Math.random()*maxPeoplePerTeam); j++){
            let person:Person;
            do{
                person = contacts.people[Math.floor(Math.random()*contacts.people.length)];
            }
            while(team.people.includes(person.id));
            team.people.push(person.id);
            person.teams.push(team.id);
        }
        contacts.teams.push(team);
    }
    return contacts;
}
const getRandomID = () => { //Generates a random *not technically* uuid. I'm too lazy to do the M and N char stuff
    const randChar = () => {
        return Math.floor(Math.random()*16).toString(16);
    }
    let id = "";
    for(let i = 0; i < 36; i++){
        if(i === 8 || i === 12 || i === 16 || i === 20){
            id += "-";
        }
        id += randChar();
    }
    return id;
}
const getRandomPhoneNumber = () => {
    let number = "(";
    for(let i = 0; i < 10; i++){
        if(i === 3){
            number += ") ";
        }
        if(i === 6){
            number += "-";
        }
        number += Math.floor(Math.random()*10);
    }
    return number;
}
//Just a list of sample names and teams for testing purposes
const sampleNameList = ["Marilyn Monroe", "Abraham Lincoln", "Mother Teresa", "John F. Kennedy", "Martin Luther King", "Nelson Mandela", "Winston Churchill", "Bill Gates", "Muhammad Ali", "Mahatma Gandhi", "Margaret Thatcher", "Charles de Gaulle", "Christopher Columbus", "George Orwell", "Charles Darwin", "Elvis Presley", "Albert Einstein", "Paul McCartney", "Plato", "Queen Elizabeth II", "Queen Victoria", "John M Keynes", "Mikhail Gorbachev", "Jawaharlal Nehru", "Leonardo da Vinci", "Louis Pasteur", "Leo Tolstoy", "Pablo Picasso", "Vincent Van Gogh", "Franklin D. Roosevelt", "Pope John Paul II", "Thomas Edison", "Rosa Parks", "Aung San Suu Kyi", "Lyndon Johnson", "Ludwig Beethoven", "Oprah Winfrey", "Indira Gandhi", "Eva Peron", "Benazir Bhutto", "Desmond Tutu", "Dalai Lama", "Walt Disney", "Neil Armstrong", "Peter Sellers", "Barack Obama", "Malcolm X", "J.K.Rowling", "Richard Branson", "Pele", "Angelina Jolie", "Jesse Owens", "Ernest Hemingway", "John Lennon", "Henry Ford", "Haile Selassie", "Joseph Stalin", "Lord Baden Powell", "Michael Jordon", "George Bush jnr", "V.Lenin", "Ingrid Bergman", "Fidel Castro", "Oscar Wilde", "Coco Chanel", "Pope Francis", "Amelia Earhart", "Sting", "Mary Magdalene", "Alfred Hitchcock", "Michael Jackson", "Madonna", "Mata Hari", "Cleopatra", "Grace Kelly", "Steve Jobs", "Ronald Reagan", "Lionel Messi", "Babe Ruth", "Bob Geldof", "Leon Trotsky", "Roger Federer", "Sigmund Freud", "Woodrow Wilson", "Mao Zedong", "Katherine Hepburn", "Audrey Hepburn", "David Beckham", "Tiger Woods", "Usain Bolt", "Carl Lewis", "Prince Charles", "Jacqueline Kennedy Onassis", "C.S. Lewis", "Billie Holiday", "J.R.R. Tolkien", "Tom Cruise", "Billie Jean King", "Anne Frank", "Simon Bolivar", "Marie Antoinette", "Christiano Ronaldo", "Emmeline Pankhurst ", "Emile Zatopek", "Lech Walesa", "Julie Andrews", "Florence Nightingale", "Marie Curie", "Stephen Hawking", "Tim Berners Lee", "Lance Armstrong", "Shakira", "Jon Stewart", "Wright Brothers", "Roman Abramovich", "Rupert Murdoch", "Al Gore", "Sacha Baron Cohen", "George Clooney", "Paul Krugman", "Jimmy Wales", "Brad Pitt", "Kylie Minogue", "Malala Yousafzai", "Stephen King"];
const sampleTeamList = ["Cool People", "Awesome People", "Super Cool People", "Super Duper Cool People", "Some Random People", "Some Nice People"]
export default getContacts;
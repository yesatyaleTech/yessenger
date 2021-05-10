import {combineReducers } from 'redux';
import { AuthReducer } from './reducers/auth.reducer';
import { ContactsReducer } from './reducers/contacts.reducer';
import { MessageReducer } from './reducers/messages.reducer';



const rootReducer = combineReducers(
    {
        user: AuthReducer,
        contacts: ContactsReducer,
        messages: MessageReducer,
    } as any
)

export default rootReducer;
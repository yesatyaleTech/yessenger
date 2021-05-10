import { combineReducers } from 'redux';
import { AuthReducer } from './reducers/auth.reducer';
import { ContactsReducer } from './reducers/contacts.reducer';
import { MessageReducer } from './reducers/messages.reducer';
import { NotificationReducer } from './reducers/notification.reducer';
import { AppState } from './state';



const rootReducer = combineReducers<AppState>(
    {
        user: AuthReducer,
        contacts: ContactsReducer,
        messages: MessageReducer,
        notifications: NotificationReducer,
    }
)

export default rootReducer;
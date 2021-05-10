import Contact from "../models/Contacts";
import Message from "../models/Message";

export interface AppState {
    user?: string | null,
    messages?: Array<Message>,
    contacts?: Array<Contact>,
    notifications: Array<String>,
    errorNotifications: Array<String>,
}

// the initial state of the application
export const initState: AppState = {
    user: null,
    messages: [],
    contacts: [],
    notifications: [],
    errorNotifications: [],
}


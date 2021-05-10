import Contact from "../models/Contacts";
import Message from "../models/Message";
import Notification from "../models/Notification";

export interface AppState {
    user?: string | null,
    messages?: Array<Message>,
    contacts?: Array<Contact>,
    notifications: Array<Notification>,
}

// the initial state of the application
export const initState: AppState = {
    user: null,
    messages: [],
    contacts: [],
    notifications: [],
}


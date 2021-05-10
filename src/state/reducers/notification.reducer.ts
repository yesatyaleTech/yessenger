import { action } from '../action';
import { AppState, initState } from '../state';
import { Reducer } from 'redux';


export const NotificationReducer: Reducer<AppState["notifications"]> = (state: AppState["notifications"] = initState["notifications"], action: action<any>) => {
    switch (action.type) {
        case ("USER_NOTIFICATION"): {
            return [...state, action.payload]
        }
        default: {
            return state;
        }
    }
}

export const ErrorNotificationReducer: Reducer<AppState["errorNotifications"]> = (state: AppState["errorNotifications"] = initState["errorNotifications"], action: action<any>) => {
    console.log(state);
    switch (action.type) {
        case ("ERROR_NOTIFICATION"): {
            return [...state, action.payload]

        }
        default: {
            return state;
        }
    }
}
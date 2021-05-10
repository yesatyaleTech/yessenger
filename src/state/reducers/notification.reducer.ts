import { action } from '../action';
import { AppState, initState } from '../state';
import { Reducer } from 'redux';


export const NotificationReducer: Reducer<AppState["notifications"]> = (state: AppState["notifications"] = initState["notifications"], action: action<any>) => {
    switch (action.type) {
        case ("USER_NOTIFICATION"): {
            return [...state, action.payload]
        }
        case ("ERROR_NOTIFICATION"): {
            return [...state, action.payload]
        }
        case("CLEAR_NOTIFICATIONS"): {
            console.log("ere")
            return [];
        }
        default: {
            return state;
        }
    }
}

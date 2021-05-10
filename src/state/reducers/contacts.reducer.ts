import {action} from '../action';
import {AppState, initState} from '../state';
import {Reducer} from 'redux';


export const ContactsReducer:Reducer<AppState> = (state: AppState = initState, action: action<any>) => {
    return {
        ...state
    }
}
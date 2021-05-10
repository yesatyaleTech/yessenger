import {action} from '../action';
import {AppState, initState} from '../state';
import {Reducer} from 'redux';


export const ContactsReducer:Reducer<AppState["contacts"]> = (state: AppState["contacts"] = initState["contacts"], action: action<any>) => {
    return state;
}
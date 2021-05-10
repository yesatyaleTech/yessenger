
import {action} from '../action';
import {AppState, initState} from '../state';
import {Reducer} from 'redux';


export const MessageReducer:Reducer<AppState["messages"]> = (state: AppState["messages"] = initState["messages"], action: action<any>) => {
    return state
}
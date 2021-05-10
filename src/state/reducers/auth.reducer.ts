import {action} from '../action';
import {AppState, initState} from '../state';
import {Reducer} from 'redux';



export const AuthReducer:Reducer<AppState> = (state: AppState = initState, action: action<any>) => {
    switch(action.type){
        case ("USER_LOGIN"): {
            return {
                ...state,
                user: action.payload,
            }
        }

        case ("USER_SIGNUP"): {
            return{
                ...state,
            } 
        }
        default: {
            return state
        }
    }
}


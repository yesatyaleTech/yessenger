import { ActionCreator, Dispatch } from 'redux';
import { action } from '../action';

export interface NotifierAction extends action<any> {
    type: action<any>["type"],
    payload: string,
}

export const createErrorNotification: ActionCreator<NotifierAction> = (message: string) => {
    return {
        type: "ERROR_NOTIFICATION",
        payload: message
    }
}

export const createUserNotification: ActionCreator<NotifierAction> = (message: string) => {
    return {
        type: "USER_NOTIFICATION",
        payload: message,
    }
}
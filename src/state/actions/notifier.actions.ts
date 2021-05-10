
import Notification from '../../models/Notification';
import { ActionCreator } from 'redux';
import { action } from '../action';

export interface NotifierAction extends action<any> {
    type: action<any>["type"],
    payload: Notification,
}

export const createErrorNotification: ActionCreator<NotifierAction> = (message: string) => {
    return {
        type: "ERROR_NOTIFICATION",
        payload: {
            isError: true,
            message
        }
    }
}

export const createUserNotification: ActionCreator<NotifierAction> = (message: string) => {
    return {
        type: "USER_NOTIFICATION",
        payload: {
            isError: false,
            message
        },
    }
}

export const clearNotifications: ActionCreator<action<any>> = () =>{
    return {
        type: "CLEAR_NOTIFICATIONS",
    }
}
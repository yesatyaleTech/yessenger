import {Action} from 'redux';

export interface action<PayloadType> extends Action<string> {
    type: string,
    payload?: PayloadType,
}
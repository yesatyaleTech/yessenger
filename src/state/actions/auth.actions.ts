import { ActionCreator, Dispatch } from 'redux';
import {action} from '../action';
import { ThunkAction } from 'redux-thunk';

export interface LoginAction extends action<string | null> {
    type: string,
    payload: string | null,
}

export interface SignUpAction extends action<undefined> {
    type: string,
}
export const createLoginAction: ActionCreator<LoginAction> = (id: string | null) => {
    let action: LoginAction = {
        type: "USER_LOGIN",
        payload: id,
    }
    return action;
}

export const createSignupAction: ActionCreator<SignUpAction> = (id: string | null) => {
    let action: SignUpAction = {
        type: "USER_SIGNUP",
    }
    return action;
}

const SignUpURL = "https://www.google.com";

const LoginURL = "https://www.google.com";

export const signupUser: ActionCreator<ThunkAction<Promise<SignUpAction>, string | null, { email: string, password: string }, SignUpAction>> = (email: string, password: string) => {
    return async (dispatch: Dispatch<SignUpAction>) => {
        //Could add a loading action here
        let res = await fetch(SignUpURL);
        if (res.status === 201) {
            let authBody = await res.json();
            const signupAction = createSignupAction(authBody);
            return dispatch(signupAction);
        } else {
            let parsed = await res.json();
            let authBody = await res.json();
            let message = parsed.message;
            //const errorAction = createErrorAction(message);
            const signupAction = createSignupAction(authBody);
            return dispatch(signupAction);
        }

    };
}

export const loginUser: ActionCreator<ThunkAction<Promise<LoginAction>, string | null, { email: string, password: string }, LoginAction>> = (email: string, password: string) => {
    return async (dispatch: Dispatch<action<any>>) => {
        //Could add a loading action here
        // let res = await fetch(LoginURL);
        // let authBody = await res.json();
        const loginAction = createLoginAction("brozay")
        return dispatch(loginAction);
    };
}
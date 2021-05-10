import { ActionCreator, Dispatch } from 'redux';
import { action } from '../action';
import { ThunkAction } from 'redux-thunk';
import { createErrorNotification, NotifierAction } from './notifier.actions';
import { AppState } from '../state';

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

export const signupUser: ActionCreator<ThunkAction<Promise<NotifierAction>, string, { email: string, password: string }, NotifierAction>> = (email: string, password: string) => {
    return async (dispatch: Dispatch<NotifierAction>) => {
        //Could add a loading action here
        try {


            let res = await fetch(SignUpURL);
            if (res.status === 201) {
                let authBody = await res.json();

                let message = "Account successfully created";
                return dispatch(createErrorNotification(message));
            } else {
                // let parsed = await res.json();
                // let authBody = await res.json();
                let message = "You already have an account";
                return dispatch(createErrorNotification(message));
                //const signupAction = createSignupAction(authBody);
                //return dispatch(signupAction);
            }
        } catch (err) {
            let message = "You already have an account";
            return dispatch(createErrorNotification(message));
        }

    };
}

export const loginUser: ActionCreator<ThunkAction<Promise<LoginAction>, AppState["user"], { email: string, password: string }, LoginAction>> = (email: string, password: string) => {
    return async (dispatch: Dispatch<action<any>>) => {
        //Could add a loading action here
        // let res = await fetch(LoginURL);
        // let authBody = await res.json();
        const loginAction = createLoginAction("brozay")
        return dispatch(loginAction);
    };
}
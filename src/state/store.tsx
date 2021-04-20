import {createStore} from 'redux';
import APP_STATE from './state';
import reducer from './reducer';

// the initial state of the application
const initState:APP_STATE  = {
    loggedIn: false,
    userId: null,
    messages: [],
}

// the central store of the application's state
const store = createStore(reducer, initState);


export default store
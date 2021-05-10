import { applyMiddleware, createStore } from '@reduxjs/toolkit';
import { action } from './action';
import { AppState, initState } from './state';
import reducer from './reducer';
import thunk from 'redux-thunk';



// the central store of the application's state
const store = createStore<AppState, action<any>, any, any>(reducer, initState, applyMiddleware(thunk));

export default store
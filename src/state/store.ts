import { applyMiddleware, createStore } from '@reduxjs/toolkit';
import { action } from './action';
import { AppState, initState } from './state';
import thunk from 'redux-thunk';
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import rootReducer from './reducer'

const persistConfig = {
    key: 'root',
    storage,
}

export const persistedReducer =  persistReducer<any, any>(persistConfig, rootReducer)




// the central store of the application's state
export const store = createStore<AppState, action<any>, any, any>(persistedReducer, initState, applyMiddleware(thunk));

//The persistor of the application's state
export const persistor = persistStore(store);
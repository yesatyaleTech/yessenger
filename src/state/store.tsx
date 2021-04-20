import {createStore} from 'redux'
import reducer from './reducer'

// the initial state of the application
const initState = {

}

// the central store of the application's state
const store = createStore(reducer, initState);


export default store
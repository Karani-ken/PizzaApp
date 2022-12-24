import {combineReducers} from 'redux'

import {createStore, applyMiddleWare} from 'redux'

import thunk from 'redux-thunk'
import {composeWithDevTools} from 'redux-devtools-extension'
import { getALLPizzasReducer } from './reducers/pizzaReducers'

const finalReducer = combineReducers({
    getALLPizzasReducer : getALLPizzasReducer
})

const initialState = {}
const composeEnhancers = composeWithDevTools({})
const store = createStore(finalReducer, initialState, composeEnhancers(applyMiddleWare(thunk)))

export default store
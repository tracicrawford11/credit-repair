import {createStore, combineReducers, applyMiddleware} from 'redux'
import promiseMiddleware from 'redux-promise-middleware'
import reducer from './reducer'
import cartReducer from './cartReducer'

const combineReducer = combineReducers ({
    reducer,
    cartReducer
})


export default createStore (combineReducer, applyMiddleware(promiseMiddleware))

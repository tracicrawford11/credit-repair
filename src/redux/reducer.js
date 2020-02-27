import axios from 'axios'

const initialState = {
    user: '',
    prod: '',
    cart: [],
    total: 0
}

const LOGIN = 'LOGIN'
const GETSTARTED = 'GETSTARTED'
const GET_USER = 'GET_USER'
const GET_PROD = 'GET_PROD'
const ADD_TO_CART = 'ADD_TO_CART'
const REMOVE_FROM_CART = 'REMOVE_FROM_CART'
const CHECKOUT = 'CHECKOUT'
const LOGOUT = 'LOGOUT'

export default function (state=initialState, action) {
    let {payload} = action
    switch (action.type) {
        case LOGIN + '_FULFILLED':
            return Object.assign({}, state, {user: payload.username, cart: payload.cart, total: payload.total})
        case GETSTARTED + '_FULFILLED':
            return Object.assign({}, state, {user: payload.username, cart: payload.cart, total: payload.total})
        case GET_USER + '_FULFILLED':
            return Object.assign({}, state, {user: payload.username, cart: payload.cart, total: payload.total})
        case GET_PROD + '_FULFILLED':
            return Object.assign({}, state, {prod: payload})
        case GET_PROD + '_REJECTED':
            return Object.assign({}, state, {prod: []})
        case ADD_TO_CART + '_FULFILLED':
            return Object.assign({}, state, {cart: payload.cart, total: payload.total})
        case REMOVE_FROM_CART + '_FULFILLED':
            return Object.assign({}, state, {cart: payload.cart, total: payload.total})
        case CHECKOUT + '_FULFILLED':
            return Object.assign({}, state, {cart: payload.cart, total: payload.total})
        case LOGOUT + '_FULFILLED':
            return {user: '', prod: [], cart: [], total: 0}
        default: return state
    }
}
export function login (obj, history) {
    return {
        type: LOGIN,
        payload: axios.post(URL.login, obj).then(response => {
            history.push('/profile')
            return response.data
        })
    }
}
export function getstarted (obj, history) {
    return {
        
    }
}

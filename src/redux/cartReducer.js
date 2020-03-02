import axios from 'axios'

const initialState = {
    cart: []
}
const ADD_TO_CART = 'ADD_TO_CART'

export const addToCart = (service)=> {
    return {
        type: ADD_TO_CART,
        payload: service
    }
}
export default function cartReducer(state=initialState, action) {
    const {type, payload} = action
    
    switch(type) {
        case ADD_TO_CART:
            const service = payload
            const newCart = [...state.cart, service]
            return {
                ...state,
                cart: newCart
            }
        default: return state
    }
}

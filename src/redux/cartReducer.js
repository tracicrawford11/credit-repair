import axios from 'axios'

const initialState = {
    services: [],
    cart: [],
    addedServices: [],
    total: 0
}

const GET_SERVICES = 'GET_SERVICES'

export const getServices = () => {
    console.log('hit')
    return {
        type: GET_SERVICES,
        payload: axios.get('/api/prod')
    }
}

const ADD_TO_CART = 'ADD_TO_CART'

export const addToCart = (service)=> {
    return {
        type: ADD_TO_CART,
        payload: service
    }
}
const REMOVE_SERVICE = "REMOVE_SERVICE"

export const removeService = (service) => {
    return {
        type: REMOVE_SERVICE,
        payload: service
    }
}
const ADD_QUANTITY = 'ADD_QUANTITY'

export const addQuantity = (service) => {
    return {
        type: ADD_QUANTITY,
        payload: service
    }
}
const SUB_QUANTITY = 'SUB_QUANTITY'

export const subQuantity = (service) => {
    return {
        type: SUB_QUANTITY,
        payload: service
    }
}

// export default function cartReducer(state=initialState, action) {
//     const {type, payload} = action
    
//     switch(type) {
//         case ADD_TO_CART:
//             const service = payload
//             const newCart = [...state.cart, service]
//             return {
//                 ...state,
//                 cart: newCart
//             }
//         default: return state
//     }
// }

export default function cartReducer (state=initialState, action) {
    if (action.type === `${GET_SERVICES}_FULFILLED`) {
        return { ...state, services: action.payload.data}
    }
    if (action.type === ADD_TO_CART) {
        console.log(action.payload.prod_id)
        console.log(state.services)
        let addedService = state.services.find(service => service.prod_id === action.payload.prod_id)
        let existed_service = state.addedServices.find (service => action.payload.prod_id === service.prod_id)
        console.log(addedService)
        if (existed_service) {
            addedService.quantity++
                return {...state, cart: state.cart + addedService}
            } else {
                addedService.quantity = 1
                let newTotal = state.total + addedService
                return {...state,
                addedServices: [...state.addedServices, addedService],
                total: newTotal
            }
        }
    }  
    if(action.type === REMOVE_SERVICE){
        let serviceToRemove= state.addedServices.find(service=> action.id === service.id)
        let new_services = state.addedServices.filter(service=> action.id !== service.id)
            
            //calculating the total
        let newTotal = state.total - (serviceToRemove.price * serviceToRemove.quantity )
        console.log(serviceToRemove)
        return{
            ...state,
            addedServices: new_services,
            total: newTotal
        }
    }
    if(action.type=== ADD_QUANTITY){
        let addedService = state.services.find(service=> service.id === action.id)
        addedService.quantity += 1 
        let newTotal = state.total + addedService.price
            return{
              ...state,
              total: newTotal
          }
        }
    if(action.type=== SUB_QUANTITY){  
        let addedService = state.services.find(service=> service.id === action.id) 
            //if the qt == 0 then it should be removed
        if(addedService.quantity === 1){
            let new_services = state.addedServices.filter(service=>service.id !== action.id)
            let newTotal = state.total - addedService.price
            return{
                ...state,
                addedServices: new_services,
                total: newTotal
            }
        } else {
            addedService.quantity -= 1
                let newTotal = state.total - addedService.price
                return{
                    ...state,
                    total: newTotal
                }
            }
    } else {
        return state
    }
}



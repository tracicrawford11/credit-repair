import React, {Component} from 'react'
import axios from 'axios'
import './Cart.scss'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import {removeService, addQuantity, subtractQuantity} from './../../redux/cartReducer'


class Cart extends Component {

  handleRemove = (id) => {this.props.removeService(id)
  }
  handleAddQuantity = (id) => {
    this.props.addQuantity(id)
  }
  handleSubtractQuantity = (id) => {
    this.props.subtractQuantity(id)
  }
  // constructor () {
  //   super()
  //   this.state = {
  //     cart: []
  //   }
  // }
  // componentDidMount() {
  //   axios.get('/api/cart').then(response => this.setState({cart: response.data}))
  // }
  
  render() {
    let addedServices = this.props.services.length ? 
    (this.props.services.map(service => {
      return (
        <div key={service.id}>
          <div className='description'>
            <span className='prod_name'>{service.prod_name}</span>
            <p>{service.description}</p>
            <p><b>Price: {service.price}$</b></p>
            <p><b>Quantity: {service.quantity}</b></p>
          </div>
        </div>
      )
    })
    ):(
      <></>
    )
    return (
      <div className='container'>
        <div className='cart'>
          <h3>You have ordered:</h3>
          <ul className='collection'>
            {addedServices}
          </ul>
        </div>
      </div>
    )
  }
}
const mapStateToProps = (state) => {
  return {
    services: state.cartReducer.addedServices
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    removeService: (id)=> {dispatch(removeService(id))},
    addQuantity: (id) => {dispatch(addQuantity(id))},
    // subtractQuantity: (id) => {dispatch(subtractQuantity(id))}
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Cart)

//   const mappedCart = this.state.cart.map((val, index) => {
//     return (
//       <div key={index}>
//         <h1>{val.cart}</h1>

//       </div>
//     )
//   })
//     return ( 
//       <div>
//         <h1>Cart</h1>
//         <section>
//           {mappedCart}
//         </section>
//       </div>
//     )
//   }
// }
// const mapStateToProps = state => {
//   return {
//     cart: state.cart
//   }
// }

//export default connect/*(mapStateToProps, {mappedCart}) */(Cart)

// import React, {PureComponent} from 'react'
// import { Provider } from "react-redux";
// import { createStore, combineReducers } from "redux";
// import {
//   Cart,
//   Product,
//   CheckoutButton,
//   cartLocalization,
//   cartReducer,
//   setCartCurrency
// } from "react-shopping-cart";

// import "bootstrap/dist/css/bootstrap.css"
// import "animate.css/animate.min.css"
//import "font-awesome/css/font-awesome.min.css"
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
  
  render() {
    let addedServices = this.props.services.length ? 
    (this.props.services.map(service => {
      return (
        <div key={service.id}>
          <div className='description'>
            <span className='prod_name'>{service.prod_name}</span>
            <p><b>Price: ${service.price}</b></p>
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
          <Link to='/checkout'><button>Continue to Checkout</button></Link>
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


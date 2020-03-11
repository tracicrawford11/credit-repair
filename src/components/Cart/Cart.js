import React, {Component} from 'react'
import axios from 'axios'
// import './Cart.scss'
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
            <button id='remove' onClick={this.handleRemove}>Remove Item from Cart</button>
            <br/>
          </div>
        </div>
      )
    })
    ):(
      <></>
    )
    return (
      <div className='container'>
        <header className='cart'>
          <h1 className='ordered'>You have ordered:</h1>
          <Link to='/checkout'><button className='checkout'>Continue to Checkout</button></Link>
        </header>
        <ul className='collection'>
          {addedServices}
          <br/>
        </ul>
        <section className='submit-btn'>
          <Link to='/'><button className='return-button'>Cancel and Return to Home</button></Link>
        </section>
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


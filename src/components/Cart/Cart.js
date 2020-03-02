import React, {Component} from 'react'
import axios from 'axios'
import './Cart.scss'
import {connect} from 'react-redux'


class Cart extends Component {
  constructor () {
    super()
    this.state = {
      cart: []
    }
  }
  componentDidMount() {
    axios.get('/api/cart').then(response => this.setState({cart: response.data}))
  }
  
render() {
  const mappedCart = this.state.cart.map((val, index) => {
    return (
      <div key={index}>
        <h1>{val.cart}</h1>

      </div>
    )
  })
    return ( 
      <div>
        <h1>Cart</h1>
        <section>
          {mappedCart}
        </section>
      </div>
    )
  }
}
// const mapStateToProps = state => {
//   return {
//     cart: state.cart
//   }
// }

export default connect/*(mapStateToProps, {mappedCart}) */(Cart)
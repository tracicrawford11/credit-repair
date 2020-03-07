import React, {Component} from 'react'
// import './Checkout.scss'
import {connect} from 'react-redux'
import {removeFromCart, Checkout} from '../../redux/reducer'

class Checkout extends Component {
    constructor () {
        super()
        this.backToServices = this.backToServices.bind(this)
    }
    backToServices() {
        const {history} = this.props
        history.push('/services')
    }

    render () {
        const {removeFromCart, checkout, cart, total, history} = this.props
        const cartProd = cart.map (prod => (
            <Prod key = {prod.id} id={prod.id} remove={removeFromCart} prod_name={prod.prod_name} />
        ))
    }
        return (
            

            
    )
}

export default connect (state => state, {removeFromCart, checkout}) (Checkout)
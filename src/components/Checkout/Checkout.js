import React, {Component} from 'react'
import './Checkout.scss'
import {connect} from 'react-redux'
import {removeFromCart, Checkout} from '../../redux/reducer'
import {BackArrow} from 'react-icons/lib/fa/arrow-left'

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
            //<div id="backToServices" onClick={this.backToServices}>
              //  <BackArrow id="backArrow" />
                //<span>Back to Services</span>
            //</div>

            
    )
}

export default connect (state => state, {removeFromCart, checkout}) (Checkout)
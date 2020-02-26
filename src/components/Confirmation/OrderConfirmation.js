import React, {Component} from 'react'
import {Link} from 'react-router-dom'

class OrderConfirmation extends Component {

render () {
    return (
        <div>
            <h1>Order Confirmed!</h1>
            <br />
            <br />
            <p>Thank you for your order! Please refer to your email for confirmation. A representative will be in touch within 24 business hours to get the process started.</p>
            <Link to='/'><button>Return to Home</button></Link>
        </div>
    )}
}

export default OrderConfirmation
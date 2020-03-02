import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import './Confirmation.scss'

class OrderConfirmation extends Component {

render () {
    return (
        <div>
            <h1 className='order-confirm'>Order Confirmed!</h1>
            <br />
            <br />
            <p className='order-thanks'>Thank you for your order! Please refer to your email for confirmation. A representative will be in touch within 24 business hours to get the process started.</p>
            <br/>
            <Link to='/'><button>Return to Home</button></Link>
        </div>
    )}
}

export default OrderConfirmation
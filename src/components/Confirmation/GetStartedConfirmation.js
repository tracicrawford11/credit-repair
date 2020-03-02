import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import './Confirmation.scss'

class GetStartedConfirmation extends Component {
  
render() {
    return ( 
      <div>
        <h1 className='getstarted-confirm'>Registration Confirmed!</h1>
        <br/>
        <br/>
        <p className='getstarted-thanks'>Congratulations on taking the first step towards a better financial future! A representative will contact you within 24 business hours.</p>
        <br/>
        <Link to='/'><button>Return to Home</button></Link>
      </div>
    )
  }
}

export default GetStartedConfirmation
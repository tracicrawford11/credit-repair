import React, {Component} from 'react'
import {Link} from 'react-router-dom'

class GetStartedConfirmation extends Component {
  
render() {
    return ( 
      <div>
        <h1>Registration Confirmed!</h1>
        <br/>
        <br/>
        <p>Congratulations on taking the first step towards a better financial future! A representative will contact you within 24 business hours.</p>
        <Link to='/'><button>Return to Home</button></Link>
      </div>
    )
  }
}

export default GetStartedConfirmation
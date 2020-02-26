import React, {Component} from 'react'
import {Link} from 'react-router-dom'

class ContactConfirmation extends Component {
  
render() {
    return ( 
        <div>
            <h1>Confirmation of Contact</h1>
            <br/>
            <br/>
            <h1>Thank you for contacting CCR. A representative will contact you via your preferred method within 24 business hours.</h1>
            <Link to="/"><button>Return to Home</button></Link>
        </div>

    )
  }
}

export default ContactConfirmation
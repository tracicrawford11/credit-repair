import React, {Component} from 'react'
import {Link} from 'react-router-dom'
// import './Confirmation.scss'

class ContactConfirmation extends Component {
  
render() {
    return ( 
        <div>
            <h1 className='contact-confirm'>Confirmation of Contact</h1>
            <br/>
            <br/>
            <h1 className='contact-thanks'>Thank you for contacting CRC. A representative will contact you via your preferred method within 24 business hours.</h1>
            <br/>
            <Link to="/"><button>Return to Home</button></Link>
        </div>

    )
  }
}

export default ContactConfirmation
import React, {Component} from 'react'
// import './Contact.scss'
//import axios from 'axios'
import {Link} from 'react-router-dom'

class Contact extends Component {
    constructor () {
        super ()
        this.state = {
           name: '',
           email: '',
           phone: '',
           message: '',
           preferredMethod: ['phone', 'email']
        }
    }
    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    handleClick = (e) => {
        console.log('hit')
        e.preventDefault()
        const {name, email, phone, message} = this.state
        let body = {
            name,
            email,
            phone,
            message
        }
        this.props.history.push('/contactconfirmation')
    }
render() {
    return ( 
        <div>
            <div>
                <header className='header'>
                    <h1 className='contact'>Contact Information</h1>
                    <Link to='/'><button className='sub'>Return to Home</button></Link> 
                </header>
                <section className='boxes'>
                    <a className='address'>
                        <h1>Address</h1>
                        <br/>
                        <br/>
                        <p>510 South Ervay</p>
                        <p>Dallas, TX 75201</p>
                        <br/>
                        <br/>
                        <img className='envelope' src='https://lh3.googleusercontent.com/proxy/HC5raZmNY2IfiAAls-XDYcC_Y3S5LfrRVO7yPPfNQpYBHzIZmRb8-03xjXx-STJ-P7Q_pmFiv1igihhaSrxqpS4oDS2bytNVSMd9RFgD6vX0wNCnqpoV' alt='envelope' />
                    </a>
                    <a className='phone'>
                        <h1>Phone</h1>
                        <br/>
                        <br/>
                        <p>(888) 897-0987</p>
                        <br/>
                        <br/>
                        <img className='phone-icon' src='https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSWtVLG1rHDMMxjnMwtLiImtFrDlVm6_qI9FjQLEB6vVqpbAnz8' alt='phone' />
                    </a>
                    <a className='email'>
                        <h1>Email</h1>
                        <br/>
                        <br/>
                        <p>info@crc.com</p>
                        <br/>
                        <br/>
                        <img className='email-icon' src='data:image/png;base64,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' alt='email' />
                    </a>
                    <a className='hours'>
                        <h1>Business Hours</h1>
                        <br/>
                        <br/>
                        <p>Mon - Sat</p>
                        <p>8:00am - 8:00pm</p>
                        <br/>
                        <br/>
                        <img className='hours-icon' src='https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSzZwP_w5y5d0MZL0IRR-S-aubsO-xjOBfZi5rckx3QR9-NjTSm' alt='clock'/>
                    </a>
                </section>
            </div>
         <div className='inputs'>
            <input onChange={this.handleChange} name ='name' placeholder='Name' />
            <input onChange={this.handleChange} name='email' placeholder='Email' />
            <input onChange={this.handleChange} name='phone' placeholder='Phone Number' />
            <input onChange={this.handleChange} name='message' placeholder='Message' />
            <select onChange={this.handleChange} name='method'>{this.state.preferredMethod.map(answer => (
                <option>{answer}</option>))}
            <option value="" disabled selected hidden>Preferred Contact Method</option>
            </select>
            <button className='sub' onClick={this.handleClick}>Submit</button>
        </div> 
        <div className='bureaus'>
            <h1 id='bureau'>For your convenience, bureau contact information is below.</h1>
            <img className='bureau-contact' src ='https://images.slideplayer.com/24/6948134/slides/slide_33.jpg' alt='bureau' />

        </div>
            
        
        </div>
    )
  }
}

export default Contact
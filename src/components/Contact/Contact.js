import React, {Component} from 'react'
import './Contact.scss'
//import axios from 'axios'
//import {Link} from 'react-router-dom'

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
                <h1>Contact Information</h1>
                <section className='boxes'>
                    <a className='address'>
                        <h1>Address</h1>
                        <p>510 South Ervay Street</p>
                        <p>Dallas, TX 75201</p>
                    </a>
                    <a className='phone'>
                        <h1>Phone</h1>
                        <p>(888) 897-0987</p>
                    </a>
                    <a className='email'>
                        <h1>Email</h1>
                        <p>info@ccr.com</p>
                    </a>
                    <a className='hours'>
                        <h1>Hours of Operation</h1>
                        <p>Mon - Sat, 8:00am - 8:00pm</p>
                    </a>
                </section>
            </div>
         <div>
            <input onChange={this.handleChange} name ='name' placeholder='Name' />
            <input onChange={this.handleChange} name='email' placeholder='Email' />
            <input onChange={this.handleChange} name='phone' placeholder='Phone Number' />
            <input onChange={this.handleChange} name='message' placeholder='Message' />
            <select onChange={this.handleChange} name='method'>{this.state.preferredMethod.map(answer => (
                <option>{answer}</option>))}
            <option value="" disabled selected hidden>Preferred Contact Method</option>
            </select>
            <button onClick={this.handleClick}>Submit</button>
        </div> 
            
        
        </div>
    )
  }
}

export default Contact
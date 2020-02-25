import React, {Component} from 'react'
import axios from "axios"
import { Redirect } from 'react-router-dom'
import { connect } from 'react-redux'

class GetStarted extends Component {
    constructor () {
        super ()
        this.state = {
            first_name: '',
            last_name: '',
            email: '',
            phone: '',
            state: '',
            goalAnswers: [
                'Purchase Home',
                'Buy a Car',
                'Get an apartment',
                'Get a loan',
                'Just want to increase my scores'
            ],
            shouldRedirect: false
        }
    }
    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    handleClick = () => {
        axios.post ('/auth/get-started', {...this.state}).then (response => {
            this.setState({ shouldRedirect: true})
        })
    }
    render () {
        if (this.state.shouldRedirect) {
            return <Redirect to = '/login' />
        }
        return (
            <div>
                <input onChange={this.handleChange} name ='first_name' placeholder='First Name' />
                <input onChange={this.handleChange} name ='last_name' placeholder='Last Name' />
                <input onChange={this.handleChange} name='email' placeholder='Email' />
                <input onChange={this.handleChange} name='phone' placeholder='Phone Number' />
                <input onChange={this.handleChange} name='state' placeholder='State Abbreviated' />
                <select onChange={this.handleChange} name='goal'>{this.state.goalAnswers.map(answer => (
                    <option>{answer}</option>
                ))}
                </select>
                <button onClick={this.handleClick}>Submit</button>
            </div>
        )
    } 
        
}
export default connect(null, {})(GetStarted)
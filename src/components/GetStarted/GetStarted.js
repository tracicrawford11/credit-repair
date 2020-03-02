import React, {Component} from 'react'
import axios from "axios"
import { Redirect, Link } from 'react-router-dom'
import { connect } from 'react-redux'
import './GetStarted.scss'

class GetStarted extends Component {
    constructor () {
        super ()
        this.state = {
            first_name: '',
            last_name: '',
            email: '',
            password: '',
            phone: '',
            state: '',
            goal_id: 0,
            goalAnswers: [],
            shouldRedirect: false
        }
    }
    componentDidMount() {
        axios.get('/auth/goals').then(response => this.setState({goalAnswers: response.data}))
    }
    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    handleClick = () => {
        axios.post('/auth/getstarted', {...this.state}).then(response => {
            this.setState({ shouldRedirect: true})
            // axios.post('/api/send', this.state.email)
        })
    }
    render () {
        if (this.state.shouldRedirect) {
            return <Redirect to = '/login' />
        }
        return (
            <div className="inputs">
                <input onChange={this.handleChange} name ='first_name' placeholder='First Name' />
                <input onChange={this.handleChange} name ='last_name' placeholder='Last Name' />
                <input onChange={this.handleChange} name='email' placeholder='Email' />
                <input onChange={this.handleChange} name='password' placeholder='Password' />
                <input onChange={this.handleChange} name='phone' placeholder='Phone Number' />
                <input onChange={this.handleChange} name='state' placeholder='State Abbreviated' />
                <select onChange={this.handleChange} name='goal_id'>{this.state.goalAnswers.map(answer => (
                    <option value={+answer.goal_id}>{answer.goal}</option>))}
                <option value="" disabled selected hidden>Select your goal</option>
                </select>
                <Link to='/getstartedconfirmation'><button onClick={this.handleClick}>Submit</button></Link>
            </div>
        )
    }
}
export default connect(null, {})(GetStarted)
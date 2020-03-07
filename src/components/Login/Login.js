import React from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { login } from '../../redux/reducer'
// import './Login.scss'

class Login extends React.Component {
    constructor (props) {
        super (props)
        this.state = {
            email: '',
            password: ''
        }
    }
    async componentDidMount() {
        let res = await axios.get('/auth/user-data')
        if (res.data.id) this.props.history.push('/profile')
    }
    login = async() => {
        //if (e) e.preventDefault()
        const {email, password} = this.state
        try {
            const res = await axios.post('/auth/login', {email, password})
            if (res.data.id) this.props.history.push('/profile')
        }catch (e) {
            alert ('Login failed. Please try again')
        }
    }
    render () {
        return (
            <div className='login'>
                <h1>Please enter your email and password to see your profile.</h1>
                <input placeholder="Email" onChange={(e) => this.setState({ email: e.target.value})} />
                <input placeholder="Password" onChange={(e) => this.setState({ password: e.target.value})} />
                <button type='submit' onClick={this.login}>Log In</button>
            </div>
        )
    }
}
export default Login
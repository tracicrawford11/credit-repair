import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'
import axios from 'axios'
import {getUserData} from './../../redux/reducer'

class Profile extends Component {
  constructor () {
    super()
    this.state = {
      profile: [],
      phone: ''
    }
  }
  componentDidMount() {
    axios.get('/api/profile').then(response => this.setState({profile: response.data}))
    this.props.getUserData()
  }
  updateUserPhone = () => {
    axios.put('/auth/profile', {phone: this.state.phone})
  }
render() {
  const mappedProfile = this.state.profile.map((val, index) => {
    return (
      <div key={index.id}>
        <h2>First Name: {val.first_name}</h2>
        <br/>
        <h2>Last Name: {val.last_name}</h2>
        <br/>
        <h2>Email: {val.email}</h2>
        <br/>
        <h2>Phone Number: {val.phone}</h2>
        <br/>
        <h2>State of Residence: {val.state}</h2>
        <br/>
        <h2>Goal: {val.goal}</h2>
      </div>
    )
  }) 
    return ( 
      <div>
        <header>
          <h1>Client Profile</h1>
        </header>
        <section className='mapped-profile'>
          {mappedProfile}
        </section>
        <section className='update-phone'>
          <button className='update'>Update Phone Number</button>
          <input placeholder ='Enter New Phone Number, if needed.' name="phone" onChange={e => this.setState({phone: e.target.value})}></input>
          <button type='submit' className='sub' onClick ={this.updateUserPhone}>Submit</button>
        </section>
        <section className='submit-btn'>
          <Link to='/'><button className='return-button'>Logout and Return to Home</button></Link>
        </section>
      </div>
    )
  }
}
const mapStateToProps = (state) => {
  return {
    val: state.val,
    profile: state.reducer.profile
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    getUserData: () => {dispatch(getUserData())}
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Profile)
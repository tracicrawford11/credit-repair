import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'
import axios from 'axios'
import './Profile.scss'
import {getUserData} from './../../redux/reducer'

class Profile extends Component {
  constructor () {
    super()
    this.state = {
      profile: []
    }
  }
  componentDidMount() {
    axios.get('/api/profile').then(response => this.setState({profile: response.data}))
    this.props.getUserData()
  }
render() {
  const mappedProfile = this.state.profile.map((val, index) => {
    return (
      <div key={index.id}>
        <h2>{val.first_name}</h2>
        <h2>{val.last_name}</h2>
        <h2>{val.email}</h2>
        <h2>{val.phone}</h2>
        <h2>{val.state}</h2>
        <h2>{val.goal}</h2>
      </div>
    )
  }) 
    return ( 
      <div>
        <header>
          <h1>User Profile</h1>
        </header>
        <section>
          {mappedProfile}
        </section>
        <Link to='/'><button>Return to Home</button></Link>

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
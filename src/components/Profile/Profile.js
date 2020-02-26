import React, {Component} from 'react'
import {Link} from 'react-router-dom'

class Profile extends Component {
  
render() {
    return ( 
      <div>
        <h1>User Profile</h1>
        <Link to='/'><button>Return to Home</button></Link>

      </div>
    )
  }
}

export default Profile
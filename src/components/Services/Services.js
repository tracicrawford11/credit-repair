import React, {Component} from 'react'
import axios from 'axios'
import {Link} from 'react-router-dom'
import './Services.scss'
import {addToCart} from './../../redux/cartReducer'
import {connect} from 'react-redux'

class Services extends Component {
  constructor () { 
    super()
  this.state = {
    services: []
  }
}
  componentDidMount() {
    axios.get('/api/prod').then(response => this.setState({services: response.data}))
  }
render() {
  console.log(this.props.cart)
  const mappedServices = this.state.services.map((val, index) => {
    
    return (
      <div key={index}>
        <h2>{val.prod_name}</h2>
        <h2>{val.description}</h2>
        <h2>${val.price}</h2>
        <button onClick={() => this.props.addToCart(val)}>Add to Cart</button>
      </div>
    )
  })
    return (
      <div>

        <header>
        <h1>SERVICES</h1>
        <img src='https://www.charge.com/wp-content/uploads/2015/12/cart.png' alt='Cart' height='75px' width='75px' />
        </header>
        <br />
        <section>
          {mappedServices}
        </section>
        
        <section className='tradelines'>
          <h1>Trade-Lines</h1>
          <h2>Contact us for a list of available trade-lines and prices.</h2>
        </section>
        <Link to='/cart'><button>Continue to Cart</button></Link>
        <Link to='/'><button>Return to Home</button></Link>
      
      </div>
        
    )
  }
}
const mapStateToProps = state => {
  return {
    cart: state.cartReducer.cart
  }
}

export default connect(mapStateToProps, {
  addToCart
})(Services)
import React, {Component} from 'react'
import axios from 'axios'
import {Link} from 'react-router-dom'
// import './Services.scss'
import {addToCart, getServices} from './../../redux/cartReducer'
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
    this.props.getServices()
  }
render() {
  console.log(this.props.services)
  const mappedServices = this.state.services.map((val, index) => {
    
    return (
      <div key={index.id}>
        
        <h1>{val.prod_name}</h1>
        <button className='add-cart'onClick={() => this.props.addToCart(val)}>Add to Cart</button>
        <br/>
        <h2>{val.description}</h2>
        <h2>${val.price}</h2>
        <br/>
        
        
      </div>
    )
  })
    return (
      <div>

        <header className='services'>
          <h1 className='services-h1'>SERVICES</h1>
            <section className='services-links'>
              <Link to='/cart'><button>Continue to Cart</button></Link>
              <Link to='/'><button>Return to Home</button></Link>
            </section>
        </header>
        <br />
        <section className='mapped-services'>
          {mappedServices}
        {/* </section>
        
        <section className='tradelines'> */}
          <h1>Trade-Lines</h1>
          <h2>Contact us for a list of available trade-lines and prices.</h2>
        </section>
        
      
      </div>
        
    )
  }
}
// const mapStateToProps = state => {
//   return {
//     cart: state.cartReducer.cart
//   }
// }

const mapStateToProps = (state) => {
  return {
    val: state.val,
    services: state.cartReducer.services
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    addToCart: (id) => {dispatch(addToCart(id))},
    getServices: () => {dispatch(getServices())}
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Services)


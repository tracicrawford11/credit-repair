import React from 'react';
import {HashRouter} from 'react-router-dom'
import './reset.css'
import './App.css';
import routes from './routes'

//Stripe imports
import {StripeProvider, Elements} from '@stripe/react-stripe-js'
import {loadStripe} from '@stripe/stripe-js'
import CheckoutForm from './components/Checkout/CheckoutForm'

const stripePromise = loadStripe("pk_test_5gn92Mb40DliudeSP5vs5plq00Udsv8b4p")

/*class App extends React.Component {
  constructor () {
    super()
    this.state = {

    }
  }
  render () {*/
  function App(props) { 
    console.log(props)
    return (
      <HashRouter>
        {/* <Elements stripe={stripePromise}> */}
      <div className="App">
        {routes}
      </div>
        {/* </Elements> */}
      </HashRouter>
    );
  }

  

export default App;

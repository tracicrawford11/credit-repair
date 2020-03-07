import React from 'react';
import ReactDOM from 'react-dom';
//import './index.scss';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { Provider } from 'react-redux'
import store from './redux/store'
import './styles/main.css'

// //Stripe imports
import { StripeProvider, Elements } from '@stripe/react-stripe-js'
import { loadStripe } from '@stripe/stripe-js'
import CheckoutForm from './components/Checkout/CheckoutForm'

const stripePromise = loadStripe("pk_test_5gn92Mb40DliudeSP5vs5plq00Udsv8b4p")

function App2() {
    return (
        // <StripeProvider>
        <Elements stripe={stripePromise}>
            <CheckoutForm stripe={stripePromise}/>
        </Elements>
        // </StripeProvider>

    )
}


ReactDOM.render(
    <Provider store={store}>
            <Elements stripe={stripePromise}>
                <App />
            </Elements>
    </Provider>
    , document.getElementById('root'));


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();


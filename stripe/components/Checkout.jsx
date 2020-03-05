import React, { useEffect } from 'react'
import { StripeProvider, Elements } from 'react-stripe-elements'
import CheckoutForm from './CheckoutForm'

const Checkout = ({ selectedService, history }) => {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <StripeProvider apiKey="pk_test_5gn92Mb40DliudeSP5vs5plq00Udsv8b4p">
      <Elements>
        <CheckoutForm selectedProduct={selectedProduct} history={history} />
      </Elements>
    </StripeProvider>
  )
}

export default Checkout
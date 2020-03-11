import React from 'react';
import { ElementsConsumer, CardElement } from '@stripe/react-stripe-js';
import {Link} from 'react-router-dom';


class CheckoutForm extends React.Component {
  handleSubmit = async (event) => {
    // We don't want to let default form submission happen here,
    // which would refresh the page.
    event.preventDefault();

    const { stripe, elements } = this.props;

    const result = await stripe.createPaymentMethod({
      type: 'card',
      card: elements.getElement(CardElement),
      billing_details: {
        // Include any additional collected billing details.
        name: 'Traci Forte',
      }
    });

    this.handlePaymentMethodResult(result);
  };

  handlePaymentMethodResult = async (result) => {
    if (result.error) {
      // An error happened when collecting card details,
      // show `result.error.message` in the payment form.
    } else {
      // Otherwise send paymentMethod.id to your server (see Step 3)
      const response = await fetch('/pay', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          payment_method_id: result.paymentMethod.id,
        }),
      });

      const serverResponse = await response.json()

      this.handleServerResponse(serverResponse);
    }
  }

  handleServerResponse = (serverResponse) => {
    if (serverResponse.error) {
      // An error happened when charging the card,
      // show the error in the payment form.
    } else {
      // Show a success message
    }
  }

  handleCardChange = (event) => {
    if (event.error) {
      // Show `event.error.message` in the payment form.
    }
  }

  render() {
    const { stripe } = this.props;

    return (
        <div>
          <header>
            <h1>Enter Card Information for Checkout</h1>
          </header>
          <form onSubmit={this.handleSubmit}>
            <CardElement onChange={this.handleCardChange} />
            <br/>
            <button className='sub-pmt' type="submit" disabled={!stripe}>
              Submit Payment
          </button>
          <section className='submit-btn'>
            <Link to='/'><button className='return-button'>Cancel and Return to Home</button></Link>
          </section>
          </form>
        </div>
        
    );
    
  }
}

export default function InjectedCheckoutForm() {
  return (
    <ElementsConsumer>
      {({ stripe, elements }) => (
        <CheckoutForm stripe={stripe} elements={elements} />
      )}
    </ElementsConsumer>
  );
}

// export default CheckoutForm;
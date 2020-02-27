import React, {Component} from 'react'
import axios from 'axios'
import {Link} from 'react-router-dom'

class Services extends Component {
  
render() {
    return (
      <div>

        <header>
        <h1>SERVICES</h1>
        <img src='https://www.charge.com/wp-content/uploads/2015/12/cart.png' alt='Cart' height='75px' width='75px' />
        </header>
        <br />

        <section className='consult'>
          <h1>Credit Consultation</h1>
          <h1>Description:</h1>
          <p>Credit Consultation is required prior to beginning any service. We will discuss your credit reports and goals. Together, we will design a plan of action for you to reach those goals.
          </p>
          <h2>Price: $</h2>
          <button>Add to Cart</button>
          <p>*** Prior to the consultation, you will be required to sign up for credit monitoring services with the provider of your choice. We can recommend services with free trial periods, but you will be required to keep the service throughout your program so that we can access the most current reports from all of the 3 major credit bureaus.</p>
        </section>
        
        <section className='letter'>
          <h1>DIY Letter Generator</h1>
          <h1>Description:</h1>
          <p>DIY Letter Generator is best suited for the client that has 1 to 2 items that require dispute. After your initial consultation, you can use the client portal to populate a dispute form letter with your specific information. You will then print each letter and mail it to the appropriate credit bureau. Remember, there are 3 major bureaus and each must be contacted separately. You will be responsible for tracking each delivery and response, as well as confirming that the changes actually take place on your reports. Our Customer Support staff will be available answer questions in an advisory capacity.
          </p>
          <h2>Price: $</h2>
          <button>Add to Cart</button>
        </section>
        
        <section className='basic'>
          <h1>Basic Credit Repair</h1>
          <h1>Description:</h1>
          <p>Basic Credit Repair is best suited for the client that has 1 to 2 items that require dispute with all 3 of the major credit bureaus. After your initial consultation, you can leave the heavy lifting to us. We will generate all required letters. We then send each one certified mail, for delivery tracking and exact monitoring of a timed response. We review your 3 credit reports to verify corrections and take the next course of action. Updates will be added to the client portal for your review at anytime.  
          </p>
          <h2>Price: $</h2>
          <button>Add to Cart</button>
        </section>
        
        <section className='moderate'>
          <h1>Moderate Credit Repair</h1>
          <h1>Description:</h1>
          <p>Moderate Credit Repair is best suited for the client that has 3 to 5 items that require dispute with all 3 of the major credit bureaus. After your initial consultation, you can leave the heavy lifting to us. We will generate all required letters. We then send each one certified mail, for delivery tracking and exact monitoring of a timed response. We review your 3 credit reports to verify corrections and take the next course of action. Updates will be added to the client portal for your review at anytime.
          </p>
          <h2>Price: $</h2>
          <button>Add to Cart</button>
        </section>
        
        <section className='aggressive'>
          <h1>Aggressive Credit Repair</h1>
          <h1>Description:</h1>
          <p>Aggressive Credit Repair is best suited for the client that has over 5 items that require dispute with all 3 of the major credit bureaus. After your initial consultation, you can leave the heavy lifting to us. We will generate all required letters. We then send each one certified mail, for delivery tracking and exact monitoring of a timed response. We review your 3 credit reports to verify corrections and take the next course of action. Updates will be added to the client portal for your review at anytime.
          </p>
          <h2>Price: $</h2>
          <button>Add to Cart</button>
        </section>
        
        <section className='inquiries'>
          <h1>Removal of Inquiries Only</h1>
          <h1>Description:</h1>
          <p>Removal of Inquiries is best suited for the client that has excessive inquiries bringing scores down. This service is included with our Basic, Moderate, and Aggressive Repair packages.</p>
          <h2>Price: $</h2>
          <button>Add to Cart</button>
        </section>
        
        <section className='tradelines'>
          <h1>Trade-Lines</h1>
          <h2>Contact us for a list of available trade-lines and prices.</h2>
        </section>
        <Link to='/'><button>Return to Home</button></Link>
      
      </div>
        
    )
  }
}

export default Services
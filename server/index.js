const express = require ('express')
const massive = require ('massive')
const session = require ('express-session')
const dotenv = require ('dotenv')
dotenv.config()
const checkForSession = require ('./middlewares/checkForSession')
const prodController = require('./controllers/prodController')
const authController = require('./controllers/authController')
const cartController = require ('./controllers/cartController')
const goalsController = require('./controllers/goalsController')
const profileController = require('./controllers/profileController')

const sgMail = require('@sendgrid/mail')
const {resolve} = require('path')

const app = express()

const {SERVER_PORT, SESSION_SECRET, CONNECTION_STRING} = process.env

massive(CONNECTION_STRING).then(db => {
    app.set ('db', db)
    console.log ('DB Connected:)')
}).catch(error => {
    console.log(error)
})
app.use(session({
    resave: false,
    saveUninitialized: true,
    secret: SESSION_SECRET,
    cookie: {
        maxAge: 1000*60*60*24*7
    }
}))
app.use(express.json())

// app.post('/api/send', (req, res) => {
//     sgMail.setApiKey(process.env.SENDGRID_API_KEY);
//     console.log('hit')
//     console.log(req.body)
//     const msg = {
//       to: req.body.email,
//       from: 'tracicrawford11@yahoo.com',
//       cc: 'tracicrawford11@yahoo.com',
//       subject: 'Sending with Twilio SendGrid is Fun',
//       text: 'and easy to do anywhere, even with Node.js',
//       html: '<strong>and easy to do anywhere, even with Node.js</strong>',
//     };
//     //ES6
//     sgMail
//       .send(msg)
//       .then(() => console.log('Message Sent'))
// })

app.use(checkForSession)

app.get("/", (req, res) => {
    // Display checkout page
    const path = resolve("./index.html");
    res.sendFile(path);
  });
const stripe = require('stripe')('sk_test_4KczTZBIWKbZyPvWep1dFuKD00TyMuq9jZ')
// Endpoint for when `/pay` is called from client
app.post('/pay', async (request, response) => {
    console.log('hit')
    try {
      // Create the PaymentIntent
      let intent = await stripe.paymentIntents.create({
        amount: 1099,
        currency: 'usd',
        payment_method: request.body.payment_method_id,
  
        // A PaymentIntent can be confirmed some time after creation,
        // but here we want to confirm (collect payment) immediately.
        confirm: true,
  
        // If the payment requires any follow-up actions from the
        // customer, like two-factor authentication, Stripe will error
        // and you will need to prompt them for a new payment method.
        error_on_requires_action: true
      });
      return generateResponse(response, intent);
    } catch (e) {
      if (e.type === 'StripeCardError') {
        // Display error on client
        return response.send({ error: e.message });
      } else {
        // Something else happened
        return response.status(500).send({ error: e.type });
      }
    }
  });
  function generateResponse(response, intent) {
    if (intent.status === 'succeeded') {
      // Handle post-payment fulfillment
      return response.send({ success: true });
    } else {
      // Any other status would be unexpected, so error
      return response.status(500).send({error: 'Unexpected status ' + intent.status});
    }
  }

app.post('/auth/getstarted', authController.getStarted)
app.post('/auth/login', authController.login)
app.post('/auth/logout', authController.logout)
app.get('/auth/user', authController.getUser)

app.get('/api/prod', prodController.getServices)

app.post('/api/cart/checkout', cartController.checkout)
app.post('/api/cart/:id', cartController.add)
app.delete('/api/cart/:id', cartController.delete)

app.get('/auth/goals', goalsController.getGoals)
app.get('/api/profile/', profileController.getUserData)

app.listen(SERVER_PORT, () => console.log (`Listening on Port: ${SERVER_PORT}`))
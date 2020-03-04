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
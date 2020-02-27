const express = require ('express')
const massive = require ('massive')
const session = require ('express-session')
const dotenv = require ('dotenv')
dotenv.config()
const checkForSession = require ('./middlewares/checkForSession')
const prodController = require('./controllers/prodController')
const authController = require('./controllers/authController')
const cartController = require ('./controllers/cartController')

const app = express()

massive(process.env.CONNECTION_STRING).then(db => {
    app.set ('db', db)
    console.log ('DB Connected:)')
})
app.use(express.json())

app.use(session({
    resave: false,
    saveUninitialized: true,
    secret: process.env.SESSION_SECRET,
    cookie: {
        maxAge: 1000*60*60*24*7
    }
}))
app.use(checkForSession)

app.post('/api/getstarted', authController.getStarted)
app.post('/api/login', authController.login)
app.post('/api/logout', authController.logout)
app.get('/api/user', authController.getUser)

app.get('/api/prod', prodController.read)

app.post('/api/cart/checkout', cartController.checkout)
app.post('/api/cart/:id', cartController.add)
app.delete('/api/cart/:id', cartController.delete)

app.listen(6000, () => console.log (`Listening on Port: 6000`))
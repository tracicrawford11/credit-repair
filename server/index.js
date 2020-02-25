const express = require ('express')
const massive = require ('massive')
const session = require ('express-session')
const dotenv = require ('dotenv')
dotenv.config()

const app = express()

app.use(express.json())

massive(process.env.CONNECTION_STRING).then(db => {
    app.set ('db', db)
    console.log ('DB Connected:)')
})

app.use(session({
    resave: false,
    saveUninitialized: true,
    secret: process.env.SESSION_SECRET,
    cookie: {
        maxAge: 1000*60*60*24*7
    }
}))

app.get('/asd/dasd', (req, res) => res.json('hi hello'))

app.listen(6000, () => console.log (`Listening on Port: 6000`))
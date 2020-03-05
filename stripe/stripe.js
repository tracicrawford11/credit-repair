const path = require('path')
const express = require('express')
const bodyParser = require('body-parser')
const postCharge = require('./stripe')
require('dotenv').config()

const app = express()
const router = express.Router()
const port = process.env.SERVER_PORT || 6000

router.post('/stripe/charge', postCharge)
router.all('*', (_, res) =>
    res.json({message: 'please make a POST request to /stripe/charge'})
)
app.use((_, res, next) => {
    res.header('Access-Control-Allow-Origin', '*')
    res.header(
        'Access-Control-Allow-Headers',
        'Origin, X-Requested-With, Content-Type, Accept'
    )
    next()
})
app.use(bodyParser.json())
app.use('/api', router)
app.use(express.static(path.join(_dirname, '../build')))

app.get('*', (_, res) => {
    res.sendFile(path.resolve(_dirname, '../build/index.html'))
})
app.listen(SERVER_PORT, () => console.log(`server running on port ${SERVER_PORT}`))
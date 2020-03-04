require('dotenv').config()
const bcrypt = require('bcryptjs')
const users = require('../models/users')

const getUserData = (req, res) => {
    const db = req.app.get('db')
    db.auth.getUserData(req.session.user.id).then(response => res.status(200).json(response))

}
module.exports = {
    getUserData
}
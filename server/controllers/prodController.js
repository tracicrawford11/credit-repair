const prod = require ('../models/prod')

module.exports = {
    read: (req, res, next) => {
        res.status(200).json(prod)
    }
}
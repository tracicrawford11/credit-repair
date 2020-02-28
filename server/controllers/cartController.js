const prod = require ('../models/prod')

module.exports = {
    add: (req, res) => {
        const {id} = req.params
        const {user} = req.session
        const index = prod.findIndex(prod => prod.id == id)
        if (index !== -1) {
            const selectedProd = prod[index]

            user.cart.push(selectedProd)
            user.total += selectedProd.price
        }
        res.status(200).json(user)
    },
    delete: (req, res) => {
        const {id} = req.params
        const {user} = req.session
        const index = user.cart.findIndex(prod => prod.is == id)
        const selectedProd = prod.find(prod => prod.id == id)
        if (index !== -1) {
            user.cart.splice(index, 1)
            user.total -= selectedProd.price
        }
        res.status(200).json(user)
    },
    checkout: (req, res) => {
        const {user} = req.session
        user.cart = []
        user.total = 0
        res.status(200).json(user)
    }
}

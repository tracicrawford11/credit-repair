const getServices = (req, res) => {
    const db = req.app.get('db')
    db.auth.getServices().then(response => res.status(200).json(response))
}

module.exports = {
    getServices
}
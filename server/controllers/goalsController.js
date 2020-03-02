const getGoals = (req, res) => {
    const db  = req.app.get('db')
    db.auth.getGoals().then(response => res.status(200).json(response))

}
module.exports = {
    getGoals
}
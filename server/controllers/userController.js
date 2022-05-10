const users = require('../data/user.js')

const controller = {
index: (req, res) => res.render('users', {title: 'Usuários', users})
}

module.exports = controller
const users = require('../data/user.js')

const controller = {
index: function(req, res, next) {
    res.send('respond with a resource');
  }
}

module.exports = controller
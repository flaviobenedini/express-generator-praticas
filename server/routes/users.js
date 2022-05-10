var express = require('express');
const controller = require('../controllers/userController')
var router = express.Router();

/* GET users listing. */
router.get('/', controller.index)

module.exports = router;

var express = require('express')
var router = express.Router()
const {signIn, signUp, getOne} = require('../controllers/user.controller')
const {loginAuth} = require('../middleware/auth')

/* GET users listing. */
//tes auth udah login apa belum
router.post('/signin', signIn)
      .post('/signup', signUp)

module.exports = router;

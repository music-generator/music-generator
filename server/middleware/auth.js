const jwt = require('jsonwebtoken')
const Users = require('../models/user.model')
const pwdtoken = process.env.pwdtoken

module.exports = {
  loginAuth: function(req, res, next){

    //cek token
    if(req.headers.token){
      let token = req.headers.token
      jwt.verify(token, pwdtoken, function(err, decoded) {
        console.log('Error : ',err);
        console.log('Decoded :', decoded)
        req.decoded = decoded
        if(err){
          res.status(500).json({
            message: 'Something went wrong / token is invalid'
          })
        }else{
          //cek id dan email di db user ada belum
          cekEmail(req, res, next, decoded)
          // next()
        }
      });
    }else{
      res.status(403).json({
        message: 'Anda harus Login'
      })
    }
  }
}

function cekEmail(req, res, next, decoded){
  Users.findOne({_id:decoded.id, email:decoded.email})
       .then(users =>{
         if(!users){
           // console.log('user dan email ga ada di data user');
           res.status(401).json({
             message: "Anda harus Login"
           })
         }else{
           next()
         }
       })
       .catch(err => {
         res.status(500).json({
           message: err
         })
       })
}

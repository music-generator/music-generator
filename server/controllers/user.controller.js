const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const Users = require('../models/user.model.js')
const saltRounds = 10
const pwdtoken = process.env.pwdtoken

module.exports = {
  signUp: function(req, res){
    let name = req.body.name
    let email = req.body.email
    let password = req.body.password
    // console.log('Name', name);
    // console.log('Email Login',email);
    // console.log('Password Login', password);
    // cek ada angka atau engga
    // let cekPass = password.match(/[0-9]/g)

    Users.findOne({email})
         .then(users =>{
           //cek kalo email sudah dipakai belum
           if(users){
             res.status(406).json({
               message: "email sudah dipakai"
             })
           }else{
             bcrypt.hash(password, saltRounds, function(err, hash){
               let newUser = {
                 name,
                 email,
                 password: hash
               }

               //panngil function untuk save di paling bawah
               saveUser(newUser, req, res)
               // console.log(newUser);
             })
           }
         })
         .catch(err => {
           res.status(500).json({
             message: err
           })
         })
  },
  signIn: function(req, res){
    let email = req.body.email
    let password = req.body.password
    Users.findOne({email})
         .then(user => {
           //cek email ada di db atau ga?
           if(!user){
             res.status(404).json({
               message: 'email / password salah'
             })
           }else{
             //cek password sama ga
             bcrypt.compare(password, user.password, function(err, result){
               if(err){
                 res.status(500).json({
                   message: "Something went wrong"
                 })
               }else{

                 //apabila password true
                 if(result){
                   let token = jwt.sign({id:user._id, email:user.email}, pwdtoken)
                   res.status(200).json({
                     message: "User Berhasil Sign In",
                     token
                   })
                 }else{
                   res.status(406).json({
                     message: "Password Salah"
                   })
                 }
               }
             })
           }
         })
         .catch(err => {
           res.status(500).json({
             message: "email / Password Salah",
             err
           })
         })
    // console.log('Email Login',email);
    // console.log('Password Login', password);
  }
}

function saveUser(objUser, req, res){

  let newUser = new Users(objUser)

  newUser.save((err, user) => {
    if(err){
      res.status(500).json({
        message: err
      })
    }else{
      res.status(201).json({
        message: `User Berhasil di Tambahkan`,
        input: user
      })
    }
  })
}

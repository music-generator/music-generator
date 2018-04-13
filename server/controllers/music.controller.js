const Music = require('../models/music.model')
const Comment = require('../models/comment.model')
const jwt = require('jsonwebtoken')
const pwdtoken = process.env.pwdtoken

module.exports = {
    getAll: function (req, res) {
        Music.find()
            .populate('comments')
            .populate('userId')
            .exec()
            .then(response => {
                res.status(200).json({
                    message: 'success get data',
                    data: response
                })
            }).catch(err => {
                res.status(500).json({
                    message: 'get data failed',
                    err
                })
            })
    },

    getOne: function (req, res) {
        Music.findById(req.params.id).exec().then(response => {
            res.status(200).json({
                message: 'success get data by id',
                data: response
            })
        }).catch(err => {
            res.status(500).json({
                message: 'get data by id failed',
                err
            })
        })
    },

    add: function (req, res) {
        let token = req.headers.token
        let decoded = jwt.verify(token, pwdtoken)

        let newMusic = new Music({
            name: req.body.name,
            music: req.body.music,
            picture: req.body.picture,
            userId: decoded.id,

            // $push: { comments: { $each: [ req.body.comments ] } },
            // $push: { likes: { $each: [ req.body.likes ] } }
        })

        newMusic.save().then(response => {
            res.status(200).json({
                message: 'success insert data',
                data: response
            })
        }).catch(err => {
            res.status(500).json({
                message: 'insert error',
                err
            })
        })
    },

    remove: function (req, res) {
        Music.findByIdAndRemove(req.params.id).then(response => {
            res.status(200).json({
                message : 'delete success',
                data: response
            })
        }).catch(err => {
            res.status(500).json({
                message: 'delete error',
                err
            })
        })
    },

    update: function (req, res) {
        console.log(req.params);
        let name = req.body.name
        Music.update({ _id: req.params.id }, {
            $set: { name }

        }).then(response => {
            res.status(200).json({
                message: 'update success',
                data: response
            })
        }).catch(err => {
            res.status(500).json({
                message: 'update error',
                err
            })
        })

    },

    addComment: function (req, res) {


        let token = req.headers.token
        let decoded = jwt.verify(token, pwdtoken)
        let newComment = new Comment({
            word: req.body.word,
            userId: decoded.id,

            // $push: { comments: { $each: [ req.body.comments ] } },
            // $push: { likes: { $each: [ req.body.likes ] } }
        })

        newComment.save().then(response => {

            Music.update({ _id: req.params.id }, {

                $addToSet: { comments: { $each: [response._id] } },

            }).then(response => {
                res.status(200).json({
                    message: 'update music comment success',
                    data: response
                })
            }).catch(err => {
                res.status(500).json({
                    message: 'update music comment error',
                    err
                })
            })

            res.status(200).json({
                message: 'success insert comment',
                data: response
            })


        }).catch(err => {
            res.status(500).json({
                message: 'insert error',
                err
            })
        })
    },



    getLike: function (req, res) {
        let token = req.headers.token
        let decoded = jwt.verify(token, pwdtoken)
        Music.update({ _id: req.params.id }, {

            $addToSet: { likes: { $each: [decoded.id] } },
            // $addToSet: { likes: { $each: [{ hitLike:req.body.hitLike,userId:req.body.userId }] } }

        }).then(response => {
            res.status(200).json({
                message: 'like success',
                data: response
            })
        }).catch(err => {
            res.status(500).json({
                message: 'like error',
                err
            })
        })

    },
    uploadFile: function (req, res) {
        console.log('masuk contrlr upload')
        console.log(req.body,'====input upload')
        let input = {
          name: req.body.name,
          music: req.files.music[0].cloudStoragePublicUrl,
          picture: req.files.picture[0].cloudStoragePublicUrl,
          userId: req.headers.userId
        }
        Music.findOne({
          name: req.body.name
        })
        .exec()
        .then(dataMusic =>{
          if(dataMusic) {
            res.status(400).json({
              message: 'title already registered!',
              dataMusic
            })
          }else{
            Music.create(input, (error, newMusic) =>{
              if(error){
                res.status(400).json({
                  message: 'failed add new music file',
                  error
                })
              }else{
                res.status(201).json({
                  message: 'success add new music file',
                  newMusic
                })
              }
            })
          }
        }).catch(error => {
          res.status(400).json({
            error
          })
        })
      }




}
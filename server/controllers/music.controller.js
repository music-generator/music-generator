const Music = require('../models/music.model')
const Comment = require('../models/comment.model')

module.exports = {
    getAll: function (req, res) {
        Music.find()
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

        let newMusic = new Music({
            name: req.body.name,
            path: req.body.path,
            picture: req.body.picture,
            userId: req.body.userId,

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
                name: req.body.name,
                path: req.body.path,
                picture: req.body.picture,
                userId: req.body.userId,
                comments: req.body.comments,
                likes: req.body.likes,
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

        Music.update({ _id: req.params.id }, {
            name: req.body.name,
            path: req.body.path,
            picture: req.body.picture,
            userId: req.body.userId,

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
        let newComment = new Comment({
            word: req.body.word,
            userId: req.body.userId,
            
            // $push: { comments: { $each: [ req.body.comments ] } },
            // $push: { likes: { $each: [ req.body.likes ] } }
        })
        
        newComment.save().then(response => {
            
            Music.update({ _id: req.params.id }, {

                $push: { comments: { $each: [response._id] } },
    
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
        console.log(req.body.userId);

        Music.update({ _id: req.params.id }, {
            
            $push: { likes: { $each: [req.body.userId] } },
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





}
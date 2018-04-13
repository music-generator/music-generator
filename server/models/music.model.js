const mongoose = require('mongoose')
const Schema = mongoose.Schema

let musicSChema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'name cannot be empty']
    },
    music: {
        type: String,
    },
    picture: {
        type: String, 
    },
    userId: {
        type: Schema.Types.ObjectId,
        ref: "User"
    },
    comments: [{
        type: Schema.Types.ObjectId,
        ref: "Comment"
    }],
    likes: [{
        type: Schema.Types.ObjectId,
        ref: "User"
    }]
    // comments: [{
    //     word: {
    //         type: String,
    //     },
    //     userId: {
    //         type: Schema.Types.ObjectId,
    //         ref: "Users"
    //     }
    // }],
    // likes: [{
    //     hitLike:{
    //         type: Boolean
    //     },
    //     userId: {
    //         type: Schema.Types.ObjectId,
    //         ref: "Users"
    //     }
    // }]

}, {
        timestamps: true
    })

let Music = mongoose.model('Music', musicSChema)

module.exports = Music

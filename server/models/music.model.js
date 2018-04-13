const mongoose = require('mongoose')
const Schema = mongoose.Schema

let musicSChema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'name cannot be empty']
    },
    path: {
        type: String,
    },
    picture: {
        type: String, 
    },
    userId: {
        type: Schema.Types.ObjectId,
        ref: "Users"
    },
    comments: [{
        type: Schema.Types.ObjectId,
        ref: "Comments"
    }],
    likes: [{
        type: Schema.Types.ObjectId,
        ref: "Users"
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

let Music = mongoose.model('Musics', musicSChema)

module.exports = Music

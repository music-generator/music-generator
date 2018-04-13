const mongoose = require('mongoose')
const Schema = mongoose.Schema

let commentSchema = new mongoose.Schema({
    word: {
        type: String,
        required: [true, 'name cannot be empty']
    },
    userId: {
        type: Schema.Types.ObjectId,
        ref: "User"
    },
    
}, {
        timestamps: true
    })

let Comment = mongoose.model('Comment', commentSchema)

module.exports = Comment

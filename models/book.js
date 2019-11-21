const mongoose = require('mongoose')
const Author = require('../models/author.js')

//"name" is the name of the column in the table(schema in mongoose)
const bookSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String
    },
    publishDate: {
        type: Date,
        required: true,     
    },
    pageCount: {
        type: Number,
        required: true
    },
    createdAt: {
        type: Date,
        required: true,
        default: Date.now
    },
    coverImage: {
        type: Buffer,
        required: true
    },
    coverImageType: {
        type: String,
        required: true
    },
    author: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'Author'
    }
})

// encoding the Buffer data of image to the base64 string
bookSchema.virtual('coverImagePath').get(function(){
    if (this.coverImage != null && this.coverImageType != null) {
        return `data:${this.coverImageType};charset=utf-8;base64,
        ${this.coverImage.toString('base64')}`
    }
})


//'Author' is the name of the table
module.exports = mongoose.model('Book', bookSchema)
const mongoose = require('mongoose')

//"title" is the name of the column in the table(schema in mongoose)
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
        required: true
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
        //telling mongoose that this is an object inside
        //our collections
    type: mongoose.Schema.Types.ObjectId, 
    required: true,
    //this shows that we reference it from Author collection
    // (author.js in models folder)
    ref: 'Author'
    }

})

bookSchema.virtual('coverImagePath').get(function(){
    if (this.coverImage != null && this.coverImageType != null) {
        return `data:${this.coverImageType};charset=utf-8;base64,
        ${this.coverImage.toString('base64')}`
    }
})

//instead of passing images itselves in the database, we
// will just pass the name of the image, so we can just 
// store as single small string and then we can store actual
// image itself on the server in the file system


//'Book' is the name of the table
module.exports = mongoose.model('Book', bookSchema)

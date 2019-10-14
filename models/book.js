const mongoose = require('mongoose')
const path = require('path')
//this is going to be the path to where our cover images
// are going to be stored
const coverImageBasePath = 'uploads/bookcovers'

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
    coverImageName: {
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
    if (this.coverImageName != null) {
        return path.join('/', coverImageBasePath, this.coverImageName)
    }
})

//instead of passing images itselves in the database, we
// will just pass the name of the image, so we can just 
// store as single small string and then we can store actual
// image itself on the server in the file system


//'Book' is the name of the table
module.exports = mongoose.model('Book', bookSchema)
module.exports.coverImageBasePath = coverImageBasePath
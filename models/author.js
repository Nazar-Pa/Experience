const mongoose = require('mongoose')
const Book = require('./book')

//"name" is the name of the column in the table(schema in mongoose)
const authorSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    }
})

authorSchema.pre('remove', function(next) {
    Book.find({ author: this.id}, (err, books) => {
        if (err){
            next(err)
        } else if (books.length > 0) {
            next( new Error('This author has books still'))
        } else {
            next()
        }
    })
})

//'Author' is the name of the table
module.exports = mongoose.model('Author', authorSchema)
const mongoose = require("mongoose")
const Schema = mongoose.Schema;

const bookSchema = new Schema ({
    title: { type: [String], required: true },
    title: { type: [String], required: true },
    description: String,
    href: String,
    thumbnail: String, 
})

const Book = mongoose.model("Book", bookSchema)


module.exports = Book;

const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema({
    Nom: {
        type: String,
        required: true
    },
    Auteur: {
        type : String,
        required : true
    },
    Genre: {
        type: String,
        required : true
    }
});

export default mongoose.model('Book', bookSchema);
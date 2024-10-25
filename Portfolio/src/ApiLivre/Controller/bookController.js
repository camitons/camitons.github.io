// bookController.js
const { client } = require('../database');
const Book = require('../modele/Books.js')


// Ajouter un nouveau livre
async function addBook(bookData) {
    try {
        const database = client.db("DBLivre");
        const booksCollection = database.collection("books");
        const result = await booksCollection.insertOne(bookData);
        return result;
    } catch (err) {
        throw new Error("Erreur lors de l'ajout du livre : " + err.message);
    }
}

// Récupérer tous les livres
async function getAllBooks() {
    try {
        const database = client.db("DBLivre");
        const booksCollection = database.collection("books");
        const books = await booksCollection.find().toArray();
        return books;
    } catch (err) {
        throw new Error("Erreur lors de la récupération des livres : " + err.message);
    }
}

async function getSpecificBook(nameBook){ //on utilise mongoose ici
    try {
        const books = await Book.find({
            name:{ $regex:'^' + nameBook, $options: 'i'}
        });
        return books;
    } catch (error){
        throw new Error("Erreur lors de la recherche d'un livre : " + error.message);
    }
}

//rajouter récupérer un seul livre / par catégorie / ...
// modifier/supprimer (juste par moi, faudrait un truc admin ?)


// Exporter les fonctions
module.exports = { addBook, getAllBooks, getSpecificBook};

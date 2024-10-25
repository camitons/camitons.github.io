const express = require('express');
const { connectToMongoDB, client } = require('./database'); // Importer la connexion MongoDB

const app = express();
app.use(express.json());

const cors = require("cors");
const {getSpecificBook} = require("@/ApiLivre/Controller/bookController");
app.use(cors()); // Ajouter cette ligne dans ton fichier server.js

// Connecter à MongoDB au démarrage du serveur
connectToMongoDB();

// Exemple de route pour ajouter un livre
app.post('/api/books', async (req, res) => {
    try {
        const database = client.db("DBLivre");
        const books = database.collection("books");

        const newBook = req.body;
        const result = await books.insertOne(newBook);

        res.status(201).json({ message: "Livre ajouté avec succès", bookId: result.insertedId });
    } catch (err) {
        res.status(500).json({ message: "Erreur lors de l'ajout du livre", error: err.message });
    }
});

// Route pour récupérer tous les livres
app.get('/api/books', async (req, res) => {
    try {
        const database = client.db("DBLivre");
        const books = database.collection("books");

        const allBooks = await books.find({}).toArray(); // Récupérer tous les livres
        res.json(allBooks); // Répondre avec un tableau de livres en JSON
    } catch (err) {
        res.status(500).json({ message: "Erreur lors de la récupération des livres", error: err.message });
    }
});

app.get('/api/books', async (req, res) => {
   const nameBook=req.query.nameBook || '';
    try {
        const books=await getSpecificBook(nameBook);
        res.json(books);
    } catch (error){
        res.status(500).json({ error : error.message});
    }
});

// Démarrer le serveur
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Serveur en cours d'exécution sur le port ${PORT}`);
});

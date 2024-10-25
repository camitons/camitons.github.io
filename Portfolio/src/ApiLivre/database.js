// db.js
const { MongoClient, ServerApiVersion } = require('mongodb');

// Chaîne de connexion MongoDB
const uri = "mongodb+srv://albin:IBOLkZB8cqdbLOzy@dblivre.l5gom.mongodb.net/?retryWrites=true&w=majority&appName=DBLivre";

// Création du client MongoDB
const client = new MongoClient(uri, {
    serverApi: {
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true,
    }
});

// Fonction pour connecter à MongoDB
async function connectToMongoDB() {
    try {
        await client.connect();
        console.log("Connexion à MongoDB réussie");
    } catch (err) {
        console.error("Erreur lors de la connexion à MongoDB", err);
    }
}

module.exports = { client, connectToMongoDB };

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
import {MongoClient, ServerApiVersion} from "mongodb";

const uri= "mongodb+srv://lejajjajeri:0MonAJi8qD0BtnL4@mangadb.gjlaiv7.mongodb.net/?retryWrites=true&w=majority&appName=MangaDB";


const client = new MongoClient(uri, {
    serverApi: {
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true,
    }
});

async function run() {
    try {
        // Connect the client to the server	(optional starting in v4.7)
        await client.connect()
        console.log("Pinged your deployment. You successfully connected to MongoDB!");
    } finally {
        await client.close();
    }
}
run().catch(console.dir);


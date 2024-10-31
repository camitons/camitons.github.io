<template>
  <input
      type="text"
      v-model="searchTerm"
      @input="searchBooks"
      placeholder="Un livre en tête ?"
  />
  <div class="book-list">
    <!-- Boutons de tri -->
    <div class="sort-buttons">
      <button @click="sortBooks('title')">Trier par Titre</button>
      <button @click="sortBooks('author')">Trier par Auteur</button>
      <button @click="sortBooks('category')">Trier par Catégorie</button>
    </div>

    <!-- Liste des livres -->
    <table>
      <thead>
      <tr>
        <th>Titre</th>
        <th>Auteur</th>
        <th>Catégorie</th>
      </tr>
      </thead>
      <tbody>
      <tr v-for="book in sortedBooks" :key="book._id">
        <td>{{ book.Nom }}</td>
        <td>{{ book.Auteur }}</td>
        <td>{{ book.Genre }}</td>
      </tr>
      </tbody>
    </table>
  </div>
    <!-- Formulaire pour ajouter un nouveau livre -->
    <h1> Conseillez moi un livre juste ici </h1>
    <form @submit.prevent="addBook">
      <div>
        <label for="title">Titre :</label>
        <input v-model="newBook.title" id="title" required />
      </div>
      <div>
        <label for="author">Auteur :</label>
        <input v-model="newBook.author" id="author" required />
      </div>
      <div>
        <label for="category">Catégorie :</label>
        <input v-model="newBook.category" id="category" required />
      </div>
      <button type="submit">Ajouter un livre</button>
    </form>


  <ManaClicker/>

</template>

<script>
import axios from "axios";
import ManaClicker from "@/composants/Sous-vues/ManaClicker.vue";

export default {
  components: {ManaClicker},
  data() {
    return {
      searchTerm : '',
      books: [], // Liste des livres
      newBook: {
        Nom: "",
        Auteur: "",
        Genre: "",
      }, // Nouveau livre à ajouter
      sortKey: "", // Clé de tri (titre, auteur, catégorie)
    };
  },
  computed: {
    // Tri dynamique des livres
    sortedBooks() {
      if (this.sortKey) {
        return [...this.books].sort((a, b) =>
            a[this.sortKey].localeCompare(b[this.sortKey])
        );
      }
      return this.books;
    },
  },
  methods: {
    // Charger les livres depuis l'API
    async fetchBooks() {
      try {
        const response = await fetch("http://localhost:5000/api/books");
        const text = await response.text(); // Get raw text response
        console.log(text); // Log the raw response
        const data = JSON.parse(text); // Parse JSON manually
        this.books = data;
      } catch (err) {
        console.error("Erreur lors du chargement des livres :", err);
      }
    },
    // Ajouter un livre via l'API
    async addBook() {
      try {
        const response = await fetch("http://localhost:5000/api/books", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(this.newBook),
        });

        if (response.ok) {
          const result = await response.json();
          this.books.push({ ...this.newBook, _id: result.bookId });
          this.newBook = { title: "", author: "", category: "" }; // Réinitialiser le formulaire
        } else {
          console.error("Erreur lors de l'ajout du livre :", await response.json());
        }
      } catch (err) {
        console.error("Erreur lors de l'ajout du livre :", err);
      }
    },
    async searchBooks(){
      if (this.searchTerm.length === 0){
        await this.fetchBooks();
      }
      try {
        const response = await axios.get(`http://localhost:5000/api/books?nameBook=${this.searchTerm}`);

        this.books= response.data;
      }catch(error){
        console.error("Erreur dans la vue pour la recherche de livre : ", error);
      }
    },
    // Trier les livres par la clé donnée (titre, auteur, catégorie)
    sortBooks(key) {
      this.sortKey = key;
    },
  },
  mounted() {
    // Charger les livres à l'initialisation de la vue
    this.fetchBooks();
  },
};
</script>

<style scoped>
.book-list {
  max-width: 600px;
  margin: 0 auto;
}

form {
  margin-bottom: 20px;
}

table {
  width: 100%;
  border-collapse: collapse;
  margin-top: 20px;
}

table th,
table td {
  border: 1px solid #ddd;
  padding: 8px;
  text-align: left;
}

table th {
  background-color: #f4f4f4;
}

.sort-buttons {
  margin-bottom: 10px;
}
</style>

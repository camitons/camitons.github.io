<script setup>
import books from "@/ApiLivre/modele/Books.js";

import axios from 'axios';

export default {
  data () {
    return {
      searchTerm : '',
      books : []
    };
    },
  methods:{
    async searchBooks(){
      if (this.searchTerm.length === 0){
        fetchBooks();
      }
      try {
         const response = await axios.get(`http://localhost:5000/api/books?nameBook=${this.searchTerm}`);

         this.books= response.data;
      }catch(error){
        console.error("Erreur dans la vue pour la recherche de livre : ", error);
      }
    }
  }
}
</script>

<template>
  <div>
    <input
      type="text"
      v-model="searchTerm"
      @input="searchBooks"
      placeholder="Un livre en tête ?"
    />
    <ul v-if="books.length">
      <li v-for="book in books" :key="book._id">
        {{ book.Nom}} - {{book.Auteur}} </li>
    </ul>
  </div>
</template>

<style scoped>

</style>
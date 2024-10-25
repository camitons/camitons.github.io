<script setup>

import axios from 'axios';

export default {
  data () {
    return {
      books : []
    };
    },
  methods:{

  }
}
</script>

<template>
  <div>

    <ul v-if="books.length">
      <li v-for="book in books" :key="book._id">
        {{ book.Nom}} - {{book.Auteur}} -  </li>
    </ul>
  </div>
</template>

<style scoped>

</style>
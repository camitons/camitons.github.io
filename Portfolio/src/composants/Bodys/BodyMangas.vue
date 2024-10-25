<script>
import axios from 'axios';

export default {
  data() {
    return {
      searchQuery: '',
      mangaResults: [],
    };
  },
  methods: {
    searchManga: async function () {
      const searchUrl = `https://sushiscan.net/?s=${encodeURIComponent(this.searchQuery)}`;
      try {
        const response = await axios.get(searchUrl);
        const html = response.data;
        const $ = cheerio.load(html);

        // Chercher les éléments contenant les titres et liens des mangas
        const results = [];
        $('.bsx > a').each((index, element) => {
          const title = $(element).attr('title');
          const link = $(element).attr('href');
          results.push({title, link});
        });

        this.mangaResults = results;
      } catch (error) {
        console.error('Erreur lors de la récupération des mangas :', error);
      }
    },
  },
};
</script>

<template>
  <div>
    <h1>Recherche de Manga</h1>
    <input v-model="searchQuery" placeholder="Rechercher un manga..." @keyup.enter="searchManga" />
    <button @click="searchManga">Rechercher</button>

    <div v-if="mangaResults.length > 0">
      <h2>Résultats de la recherche</h2>
      <ul>
        <li v-for="manga in mangaResults" :key="manga.title">
          <a :href="manga.link" target="_blank">{{ manga.title }}</a>
        </li>
      </ul>
    </div>
  </div>
</template>

<style scoped>

</style>
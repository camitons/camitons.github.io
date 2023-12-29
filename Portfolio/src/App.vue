<script>
import Header from './composants/Header.vue'
import BodyHome from "./composants/BodyHome.vue";
import Footer from "./composants/Footer.vue";

export default {
  components: {
    Footer,
    BodyHome,
    Header
  }
};

</script>

<template>
  <div id="app">
  <Header/>
  <body>
  <BodyHome/>
  </body>

   <footer>
      <Footer/>
   </footer>
  </div>
</template>
<style>

all {
  overflow-y: visible;
}

body {
  top: 20px;
  height: 100vh;
  width: 100%;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  overflow: hidden;
  display: flex;
  flex-direction: column;
}

</style>

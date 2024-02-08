<script>
import Header from './composants/Header.vue'
import BodyHome from "./composants/Bodys/BodyHome.vue";
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
  <div id="app" class="container">
    <Header/>
    <div>
    <BodyHome/>
    </div>
    <footer>
      <Footer/>
    </footer>
  </div>

</template>

<style>

all {
  overflow-y: visible;
}

#app div {
  top : 5%;
  height: 100%;
  width: 100%;
  position: absolute;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>

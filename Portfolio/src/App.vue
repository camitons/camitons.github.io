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

.container{
  background-image: repeating-radial-gradient(  #0c0a0a 80%,#2f312f 90%,#3f4549 90%);
  background-size: 65px 65px;
  background-repeat: repeat-x;
  overflow: visible;
}

</style>

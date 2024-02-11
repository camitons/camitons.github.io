<script>
import Header from './composants/Header.vue'
import BodyHome from "./composants/Bodys/BodyHome.vue";
import BodyDessin from "./composants/Bodys/BodyDessin.vue";
import BodyQuiJeSuis from "./composants/Bodys/BodyQuiJeSuis.vue";
import BodyOueskonVa from "./composants/Bodys/BodyOueskonVa.vue";
import BodyBonCHance from "./composants/Bodys/BodyBonChance.vue";
import BodyCompetences from "./composants/Bodys/BodyCompetences.vue";

import Footer from "./composants/Footer.vue";

export default {
  components: {
    Header
  },
  data() {
    return {
      currentView: BodyHome
    };
  },
  methods: {
    gererChangementBody(viewName) {
      switch (viewName) {
        case 'BodyHome':
          this.currentView = BodyHome;
          break;
        case 'BodyDessin':
          this.currentView = BodyDessin;
          break;
        case 'BodyQuiJeSuis':
          this.currentView = BodyQuiJeSuis;
          break;
        case 'BodyOueskonVa':
          this.currentView = BodyOueskonVa;
          break;
        case 'BodyBonCHance':
          this.currentView = BodyBonCHance;
          break;
        case 'BodyCompetences':
          this.currentView = BodyCompetences;
          break;
        default:
          this.currentView = BodyHome;
      }
    }
  },
};

</script>

<template>
  <div id="app" class="container">
    <Header @changer-vue-body="gererChangementBody" />
    <div>
    <component :is="currentView"> </component>
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

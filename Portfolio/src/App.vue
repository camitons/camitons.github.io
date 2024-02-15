<script>
import Header from './composants/Header.vue';
import FooterInitial from "./composants/Footer.vue";
import BodyHome from "./composants/Bodys/BodyHome.vue";
import BodyDessin from "./composants/Bodys/BodyCompetences.vue";
import BodyQuiJeSuis from "./composants/Bodys/BodyQuiJeSuis.vue";
import BodyOueskonVa from "./composants/Bodys/BodyOueskonVa.vue";
import BodyBonCHance from "./composants/Bodys/Contactez moi.vue";
import BodyCompetences from "./composants/Bodys/BodyCompetences.vue";
import Footer from "@/composants/Footer.vue";


export default {
  components: {
    Footer,
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
    <div id="body">
      <component :is="currentView"> </component>
    </div>
    <div>
      <footer>
        <Footer />
      </footer>
    </div>

  </div>

</template>

<style>





#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  /* Supprimez ou modifiez la propriété overflow */
  /* overflow: hidden; */
  display: block;
  align-items: center;
  width: 100%;

}

footer{
  bottom: 0;
}
* {
  margin: 0;
}

#body {
  min-height: 100%;
  margin-bottom: -142px;
  margin-top: 100px;
}
#body:after {
  content: "";
  display: block;
}
footer, #body:after {
  height: 142px;
}


</style>

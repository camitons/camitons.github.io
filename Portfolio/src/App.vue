<script>
import Header from './composants/Header.vue';
import BodyHome from "./composants/Bodys/BodyHome.vue";
import BodyDessin from "./composants/Bodys/BodyCompetences.vue";
import BodyCompetences from "./composants/Bodys/BodyCompetences.vue";
import BodyQuiJeSuis from "./composants/Bodys/BodyQuiJeSuis.vue";
import BodyOueskonVa from "./composants/Bodys/BodyOueskonVa.vue";
import BodyContactezMoi from "./composants/Bodys/BodyContactezMoi.vue";
import Footer from "@/composants/Footer.vue";
import BodyIUT from "@/composants/Bodys/BodyIUT.vue";


export default {

  components: {
    Footer,
    Header
  },
  mounted() {
    document.title = "Portfolio Albin Caminade";
  },
  data() {
    return {
      currentView: BodyHome,
    };
  },
  methods: {
    gererChangementBody(viewName) {
      switch (viewName) {
        case 'BodyHome':
          this.currentView = BodyHome;
          break;
        case 'BodyQuiJeSuis':
          this.currentView = BodyQuiJeSuis;
          break;
        case 'BodyOueskonVa':
          this.currentView = BodyOueskonVa;
          break;
        case 'BodyIUT':
          this.currentView = BodyIUT;
          break;
        case 'BodyContactezMoi':
          this.currentView = BodyContactezMoi;
          break;
        case 'BodyCompetences':
          this.currentView = BodyCompetences;
          break;
        default:
          this.currentView = BodyHome;
      }
    }
  },
  directives: {
    'scroll-show': {
      bind(el, binding) {
        window.addEventListener('scroll', () => {
          const scrollPosition = window.scrollY;
          const triggerPosition = binding.value;
          if (scrollPosition >= triggerPosition) {
            binding.expression = true;
          }
        });
      }
    }
  }
};

</script>

<template>
  <div id="app" class="container">
    <Header @changer-vue-body="gererChangementBody" />
    <div id="body">
      <component :is="currentView"> </component>
    </div>
<!--    <img v-scroll-show="500" src="/img/flechebas.png" alt="fleche permettant de remonter la page" id="fleche_remonter">-->
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


#fleche_remonter {
  background-color: #00bd7e;
  width: 50px;
  height: 50px;
  margin: 10px;
  border-radius: 50%;
  animation: 2s infinite alternate;
  animation-name: move;
  position: fixed;
  bottom: 20px;
  right: 15px;
  z-index: 100;
  cursor: pointer;
  display: flex;
}

</style>

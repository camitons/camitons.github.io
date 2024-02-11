<script>
export default {
  methods: {
    changerVue(viewName) {
      this.$emit('changer-vue-body', viewName); // Émet un événement personnalisé avec le nom de la vue
    }
  }
}

</script>
<template>
  <!-- html -->
  <nav class="container">
    <button>
      <a @click="changerVue('BodyHome')"><span>Home</span></a>
    </button>
    <button>
      <a @click="changerVue('BodyDessin')"><span>Dessin</span></a>
    </button>
    <button>
      <a @click="changerVue('BodyQuiJeSuis')"><span>Qui je suis</span></a>
    </button>
    <button>
      <a @click="changerVue('BodyOueskonVa')"><span>Oueskon va</span></a>
    </button>
    <button>
      <a @click="changerVue('BodyBonCHance')"><span>BonChance</span></a>
    </button>
  </nav>

</template>

<style scoped>
/* CSS */

nav {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  padding: 20px 0;
  background-color: #212121;
  z-index: 2;
  display: flex;
  justify-content: space-around;
  align-items: center;
}

.container {
  background-image: repeating-radial-gradient(  #0c0a0a 80%,#2f312f 90%,#3f4549 90%);
  background-size: 50px 50px;
  overflow: hidden;
  background-repeat: repeat;
}

a {
  position: relative;
  display: inline-block;
  padding: 15px 30px;
  border: 2px solid #fefefe;
  text-transform: uppercase;
  color: #fefefe;
  text-decoration: none;
  font-weight: 600;
  font-size: 20px;
}

a::before {
  content: '';
  position: absolute;
  top: 6px;
  left: -2px;
  width: calc(100% + 4px);
  height: calc(100% - 12px);
  background-color: #212121;
  transition: 0.3s ease-in-out;
  transform: scaleY(1);
}

a:hover::before {
  transform: scaleY(0);
}

a::after {
  content: '';
  position: absolute;
  left: 6px;
  top: -2px;
  height: calc(100% + 4px);
  width: calc(100% - 12px);
  background-color: #212121;
  transition: 0.3s ease-in-out;
  transform: scaleX(1);
  transition-delay: 0.5s;
}

a:hover::after {
  transform: scaleX(0);
}

a span {
  position: relative;
  z-index: 3;
}

button {
  text-decoration: none;
  background-color: #212121;
  border: none;
}

</style>

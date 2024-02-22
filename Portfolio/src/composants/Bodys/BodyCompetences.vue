<template>
  <div id="BodyPrincipaleCompétences">
    <div class="left">
      <button class="boutonCompétences" v-for="(langue, index) in langues" :key="index" @click="afficherCompetence(langue)">
        {{ langue.nom }}
      </button>
    </div>
    <div class="right">
      <div class="conteneurimg">
        <img src="" alt="arbres dofus" id="arbre">
      </div>
      <div id="projets">
        <div class="conteneurtxt">
        <h2 id="titreprojet">Projets réalisés</h2>
        </div>
          <ul>
          <li v-for="(projet, index) in projets" :key="index" @click="afficherProjet(projet)">
            <a href="#">{{ projet }}</a>
          </li>
        </ul>
      </div>
    </div>
  </div>
  <div id="Projetaffiché">
    <component :is="vueProjet" v-if="vueProjet" id="vueProjet"></component>
  </div>
</template>

<script>
export default {
  data() {
    return {
      langues: [
        { nom: 'HTML', projets: ['1', '2', "3"] },
        { nom: 'CSS', projets: ["1", "2"] },
        { nom: 'JAVA', projets: ['Aventurier du Rail', 'Mastermind', "1","2","3"] },
        { nom: 'JAVASCRIPT', projets: ["1"] },
        { nom: 'VUEJS', projets: ["Portfolio"] },
        { nom: 'SQL+', projets: ["1","2","3"] },
        { nom: 'PHP', projets: ["1","2","3"] },
        { nom: 'PYTHON', projets: ["1","2"] },
        { nom: 'C', projets: ["1","2"] },
        { nom: 'SCRUM', projets: ["1"] }
      ],
      projets:[],
      vueProjet: null
    };
  },
  methods: {
    afficherCompetence(langue) {
      const arbre = document.getElementById('arbre');
      this.projets=langue.projets;
      if (langue.nom!=='SCRUM') {
        document.getElementById('titreprojet').innerText = `Projets réalisés en ${langue.nom}`;
      }
      else {
        document.getElementById('titreprojet').innerText = `Projets réalisés en utilisant la méthode ${langue.nom}`;
      }
      if (langue.projets.length>3){
        arbre.src='/img/arbres/arbre4dofus.png';
      }
      else {
        arbre.src = `/img/arbres/arbre${langue.projets.length}dofus.png`;
      }
      this.vueProjet = null;
      arbre.style.display = 'block';
    },


    afficherProjet(nomProjet) {
      // Générer le nom de la vue en fonction du nom du projet
      const nomVue = 'Projet' + nomProjet.toLowerCase().split(" ").join(""); // Enlève les espaces du nom du projet

      // Dynamiquement importer la vue du projet
      import(`../Projets/${nomVue}.vue`).then(module => {
        // Assigner la vue du projet au composant dynamique
        this.vueProjet = module.default;
      }).catch(error => {
        console.error('Erreur lors du chargement de la vue du projet :', error);
      });
    }
  }
}
</script>

<style>

#BodyPrincipaleCompétences {
  display: flex;
  justify-content: space-between;
  top: 0;
}
.left {
  flex: 1;
  padding: 20px;
  border-right: 1px solid #000;
  justify-content: center;
}
.right {
  flex: 1;
  padding: 20px;
  display: flex;
  flex-direction: row;
  justify-content: center;
}

#arbre {
  width: 200px;
  height: 260px;
  border-radius: 50%;
  display:none;
  user-select: none;
  pointer-events: none;

}

.boutonCompétences  {
  background: none;
  border: 2px solid;
  font: inherit;
  line-height: 1;
  margin: 0.5em;
  padding: 1em 2em;
  color: #00bd7e;
  cursor: pointer;
  transition: 0.25s;
}
.boutonCompétences:hover {
  background: #00bd7e;
  color: #fff;
  border-color: #05855a;
  transition: 0.25s;
}

#projets * {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
}

.conteneurimgtxt{
  width: 150px;
  height: 200px;
}
.conteneurtxt{
  width: 200px;
  height: 150px;
  align-items: start;
}

</style>

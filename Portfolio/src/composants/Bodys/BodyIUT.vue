<template>
  <div class="portfolio">
    <h1>Les compétences obtenues en BUT 2</h1>
    <br><br><br>
    <div class="container">
      <div class="center">
        <div class="grid">
          <div v-for="(competence, index) in competences" :key="index" class="grid-item">
            <h3>{{ competence.nom }}</h3>
            <div class="sub-categories">
              <div class="apprentissages">
                <h4>AC*</h4>
                <div v-for="(apprentissage, i) in competence.apprentissagesCritiques" :key="i" class="value">
                  <a @click="showPopup(apprentissage, 'bottom')">{{ apprentissage.contenu }}</a>
                </div>
              </div>
              <div class="composantes">
                <h4>CE*</h4>
                <div v-for="(composante, i) in competence.composantesEssentielles" :key="i" class="value">
                  <a @click="showPopup(composante, 'bottom')">{{ composante.contenu }}</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <br><br>
    <p>* Légende :</p>
    <p>AC : Apprentissage critique</p>
    <p>CE : Composante essentielle</p>
    <!-- Bulle d'informations -->
    <div v-if="popupVisible" :class="['bubble', {'bubble-bottom': popupPosition === 'bottom', 'bubble-right': popupPosition === 'right'}]">
      <div class="bubble-content">
        <span class="close" @click="closePopup">&times;</span>
        <p>{{ popupContent }}</p>
      </div>
    </div>
  </div>
</template>




<script>
export default {
  data() {
    return {
      competences: [
        {
          nom: "Réaliser un développement dʼapplication",
          apprentissagesCritiques: [
            {
              contenu: "Élaborer et implémenter les spécifications fonctionnelles et non fonctionnelles à partir des exigences",
              popupContent: " J'ai pu implémenter les spécifications fonctionnelles et non fonctionnelles à partir des exigences du client durant mes projets Agiles. "
            },
            {
              contenu: "Adopter de bonnes pratiques de conception et de programmation",
              //principes solides, diagrammes UML
              popupContent: " J'ai appris à adopter de bonnes pratiques de conception et de programmation en utilisant des principes solides et des diagrammes UML."
            },
            {
              contenu: "Vérifier et valider la qualité de l'application par les tests",
              popupContent: "J'ai pu déployer différents types de test, pilotés par les données, les tests unitaires ou d'intégration... J'ai également utilisé des outils de tests comme JUnit ou Mockito."
            }
          ],
          composantesEssentielles: [
            {
              contenu: "En respectant les besoins décrits par le client",
              popupContent: "Dans le cadre des méthodes agiles, le client nous fait des retours réguliers sur l'état du projet et ses besoins. Nous avons appris à respecter ces besoins (tout en connaissant nos limites)."
            },
            {
              contenu: "En appliquant les principes algorithmiques",
              popupContent: " J'ai pu utiliser des algorithmes de tri (tri fusion, quicksort), de parcours de graphes et recherches de chemin (dijkstra)."
            },
            {
              contenu: "En veillant à la qualité du code et à sa documentation",
              popupContent: " J'ai documenté mon code en utilisant des commentaires (j'ai découvert l'importance de ces derniers durant certains gros projets de groupe). J'ai également appris à respecter les conventions de nommage."
            }
          ]
        },{
        nom : "Optimiser des applications",
          apprentissagesCritiques: [
          {
            contenu: "Choisir des structures de données complexes adaptées au problème",
            popupContent: "J'ai appris à choisir des structures de données complexes adaptées au problème en étudiant les arbres, les graphes, listes chainées, etc."
          },
          {
            contenu: "Comprendre les enjeux et moyens de sécurisation des données et du code",
            popupContent: "J'ai étudié les enjeux et moyens de sécurisation des données et du code en implémentant du chiffrement asymétrique (RSA) dans une application. J'ai également été sensibilisé aux injections SQL, aux failles de protocoles tels que HTTP..."
          },
          {
            contenu: "Évaluer l'impact environnemental et sociétal des solutions proposées ",
            popupContent: "Durant certains cours de management des systèmes d'information, j'ai pu abordé les enjeux environnementaux et surtout sociétaux liés à l'informatique. Il est important de prendre en compte ces aspects lors de la conception d'une application. On peut facilement citer les développeurs de l'algorithme de TIKTOK qui regrettent aujourd'hui de ne pas avoir compris l'impact de leur travail."
          }
        ],
        composantesEssentielles: [
          {
            contenu: "En formalisant et modélisant des situations complexes",
            popupContent: "J'ai appris à modéliser des situations complexes en utilisant des diagrammes de classes, des diagrammes de séquences, etc."
          },
          {
            contenu: "En recensant les algorithmes et les structures de données usuels",
            popupContent: "J'ai étudié des algorithmes et des structures de données classiques comme les arbres, les graphes, les algorithmes de tri, de recherche, etc."
          },
          {
            contenu: "En s'appuyant sur des schéma de raisonnement",
            popupContent: "J'ai mis en place des schémas de raisonnement par récurrence afin de justifier l'utilisation de fonctions récursives."
          }
        ]
        },{
        nom : "Conduire un projet",
          apprentissagesCritiques: [
          {
            contenu: "Formaliser les besoins du client et de lʼutilisateur",
            popupContent: " Pour formaliser les besoins, j'ai utilisé des diagrammes de cas d'utilisation ainsi que des diagrammes de séquences."
          },
          {
            contenu: "Identifier les critères de faisabilité dʼun projet informatique",
            popupContent: " J'ai appris à identifier les critères de faisabilité d'un projet informatique en étudiant les coûts, les délais, les ressources nécessaires, etc."
          },
          {
            contenu: "Définir et mettre en oeuvre une démarche de suivi de projet",
            popupContent: "J'ai étudié des méthodes de suivi de projet comme les méthodes agiles (méthode SCRUM) dans différents projets. Ma place a été celle de SCRUM MASTER, une position de gestion de l'équipe, très complexe pour moi."
          }
        ],
        composantesEssentielles: [
          {
            contenu: " En communiquant efficacement avec les différents acteurs d'un projet",
            popupContent: "Durant nos projets Agiles, la communication avec le 'client' était primordiale. J'ai appris à communiquer efficacement avec ce dernier, de manière à poser les bonnes questions et à comprendre ses besoins."
          },
          {
            contenu: "En respectant les règles juridiques et les normes en vigueur",
            popupContent: " J'ai étudié les normes en vigueur, notamment le RGPD, et les règles juridiques à respecter lors de la conception d'une application. La CNIL distribue énormément d'informations sur le sujet."
          },
          {
            contenu: "En sensibilisant à une gestion éthique, responsable, durable et interculturelle",
            popupContent: "J'ai abordé des sujets de gestion éthique, responsable, durable et interculturelle lors de cours de management des systèmes d'information. Il est important pour moi de prendre en compte ces aspects lors des travaux de groupe."
          }
        ]
        }
      ],
      popupVisible: false,
      popupContent: "",
      popupPosition: ""
    };
  },
  methods: {
    showPopup(item, position) {
      this.popupContent = item.popupContent;
      this.popupPosition = position;
      this.popupVisible = true;
    },
    closePopup() {
      this.popupVisible = false;
    }
  }
};
</script>

<style>
.portfolio {
  font-family: Arial, sans-serif;
  padding: 20px;
  background-color: #212121; /* Couleur de fond sombre */
  color: #ffffff; /* Couleur de texte blanche */
}

.container {
  display: flex;
  justify-content: center;
}

.center {
  text-align: center;
}

h1, h2, h3, h4 {
  color: #ffffff; /* Couleur de texte blanche */
}

h1 {
  text-align: center;
}

h2 {
  margin-bottom: 20px;
}

h3 {
  margin-bottom: 10px;
}

h4 {
  margin-bottom: 5px;
}

.sub-categories {
  display: flex;
  justify-content: space-around;
  align-items: center; /* Centrer verticalement les sous-catégories */
}

.grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(400px, 1fr)); /* Taille minimale de 400px */
  gap: 20px;
}

.grid-item {
  background-color: #424242; /* Couleur de fond plus foncée */
  padding: 30px; /* Augmentation de la marge intérieure */
  border-radius: 10px;
  width: 800px; /* Augmentation de la largeur */
  max-width: 90%; /* Limite la largeur maximale à 90% de la largeur de son conteneur */
  min-height: 200px; /* Augmentation de la hauteur minimale */
  display: grid; /* Utiliser grid pour positionner les éléments */
  grid-template-columns: auto; /* Chaque colonne prendra la taille nécessaire */
}


.value {
  margin-bottom: 10px; /* Augmentation de l'espacement entre les valeurs */
  min-height: 50px; /* Hauteur minimale des valeurs (CE et AC) */
}


.close {
  position: absolute;
  top: 10px;
  right: 10px;
  cursor: pointer;
  color: #fff; /* Couleur de texte blanche */
}

.value a {
  cursor: pointer; /* Ajouter un curseur de type pointer aux liens */
}

.value a:hover {
  text-decoration: underline; /* Ajouter un soulignement lorsqu'on survole le lien */
}
.bubble {
  position: fixed;
  top: 50%;
  right: 10%; /* Ajustez la valeur selon votre préférence */
  //transform: translateY(-50%);
  background-color: rgba(0, 0, 0, 0.8);
  color: white;
  padding: 10px;
  border-radius: 5px;
  z-index: 9999;
}


.bubble-content {
  max-width: 300px;
}

.close {
  position: absolute;
  top: 5px;
  right: 5px;
  cursor: pointer;
  color: white;
}


</style>
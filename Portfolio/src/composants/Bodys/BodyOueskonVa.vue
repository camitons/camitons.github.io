<script setup>
import Construction from "@/composants/Sous-vues/Construction.vue";
</script>

<template>
  <section>
    <h2>De l'empesé de la jeunesse</h2>
    <div class="poeme">
      <p>
        D'une simple discussion à la compréhension d'un phénomène de masse, une soirée bière, vomie, débauche.<br>
        "Trop sale" me dit-on. Refusant cet état de fait je m'en tenais à dire que cela m'intéressait.<br>
        Faisons l'effort chaque jour de ces deux choses : nous sommes des animaux, nous allons mourir.<br>
        Allons marcher sur des sols imbibés d'alcool, hilares et cons. Pourquoi accepter l'inhibition ?
      </p>
    </div>
  </section>

  <section>
    <h1>Visions du futur</h1>
    <p>Cette partie représentera diverses visions du futur, positives ou non, plausibles ou non.</p>
  </section>

  <section>
    <h2>Un avenir radieux</h2>

    <h3>L'énergie</h3>
    <p>
      Dans ce monde, l'énergie n'est plus un problème : plus besoin de métaux rares, d'énergie fossile, aucune création de CO2.<br>
      En un mot, la fusion parfaite. Fusion - Fission. Des normes de sécurité sans faille.
    </p>

    <h3>Le transport</h3>
    <p>
      Le tram et le train deviennent les uniques moyens de transport à l'échelle mondiale.<br>
      Les routes laissent place à des rails, un travail gigantesque est accompli pour permettre à l'immense majorité des gens un accès au reste de la civilisation.
    </p>

    <h3>La nourriture</h3>
    <p>
      Aucune énergie fossile signifie aucun tracteur : l'agriculture intensive est officiellement terminée.<br>
      La permaculture est appliquée à l'échelle mondiale.<br>
      Les fruits et légumes d'anciennes variétés, moins belles mais plus simples à planter, refont surface.<br>
      Une sélection complète des souches permet la suppression des pesticides.<br>
      Un travail humain énorme est alors demandé, ce qui nous amène au point suivant.<br>
      La viande devient plus rare, et les gens sont priés de faire leur propre élevage de poules ; les animaux deviennent chose commune dans les villes.
    </p>

    <h3>La gestion humaine</h3>
    <p>
      Les villes s'allègent, les gens se rapprochent des villages pour avoir leur propre coin de terre.<br>
      L'utopie étant parfaite, les amateurs du capitalisme n'ont plus d'outils pour manipuler les masses.<br>
      Pas de propagande, pas de peur massive de pénurie menant à des rébellions armées.<br>
      Chaque citoyen est convié trois semaines par an à travailler la terre, dès cinq ans.<br>
      Les écoles sont divisées en deux groupes : travaux manuels et école théorique.<br>
      Rapprocher les humains de la terre leur permet de comprendre la simplicité des choses et la chance qu'offre la technologie.
    </p>

    <h3>La technologie</h3>
    <p>
      Les technologies comme le téléphone sont strictement régulées.<br>
      Impossible d'avoir plusieurs téléphones ou plusieurs ordinateurs.<br>
      La sobriété est la clé du succès de cette utopie.<br>
      La réparation et l'amélioration des objets connectés remplacent la surconsommation.<br>
      La recherche n'est pas oubliée, mais la compétition n'est plus au centre du sujet : seule compte l'amélioration de l'environnement dans lequel l'espèce évolue.
    </p>

    <h3>Le système économique</h3>
    <p>
      Le capitalisme ayant montré ses limites, un système sans monnaie est mis en place.<br>
      L'accomplissement personnel devient l'objectif des humains errant sur cette terre.<br>
      L'existence de pays pauvres et riches n'a plus de sens car l'économie telle que nous la connaissons n'existe plus.<br>
      Le troc remplace la monnaie, mais sans logique quantitative ou qualitative.<br>
      Prendre une bière au bar est encore possible : un barman ou un cuisinier obtient satisfaction par le plaisir de ses clients.<br>
      Le travail n'est plus une obligation pour survivre, mais simplement un droit.
    </p>
  </section>

  <section>
    <h2>Travail et justice sociale</h2>
    <h3>Que répondre à ceux qui pensent qu'un travailleur de 12 heures par jour mérite plus qu'un autre ?</h3>
    <p>
      Il est vrai que certains travaux sont plus ardus que d'autres.<br>
      Un conducteur de tramway est-il l'égal d'un maçon ?
    </p>
  </section>
</template>

<style scoped>
.poeme {
  font-style: italic;
  margin-bottom: 20px;
  padding: 10px;
}

section {
  margin-bottom: 50px;
  padding: 20px;
  border: 2px solid white;
}

h1, h2, h3 {
  margin-top: 20px;
  color: #ffffff;
  text-decoration: underline;
}
</style>

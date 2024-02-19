<template>
  <div id="BodyPrincipaleCompétences">
    <div class="left">
        <button class="boutonCompétences" @click="afficherArbre(2)">HTML</button>
        <button class="boutonCompétences" @click="afficherArbre(1)">CSS</button>
        <button class="boutonCompétences" @click="afficherArbre(4)">JAVA</button>
        <button class="boutonCompétences" @click="afficherArbre(1)">JAVASCRIPT</button>
        <button class="boutonCompétences" @click="afficherArbre(2)">VUEJS</button>
        <button class="boutonCompétences" @click="afficherArbre(2)">SQL+</button>
        <button class="boutonCompétences" @click="afficherArbre(2)">PHP</button>
        <button class="boutonCompétences" @click="afficherArbre(2)">PYTHON</button>
        <button class="boutonCompétences" @click="afficherArbre(1)">C</button>
        <button class="boutonCompétences" @click="afficherArbre(2)">SCRUM</button>
    </div>
    <div class="right">
      <img src="" alt="arbres dofus" id="arbre">
      <div id="projets">
        <h2>Projets réalisées</h2>
      <li>
        <a href="">Projet 1</a>
        <a href="">Projet 2</a>
        <a href="">Projet 3</a>
      </li>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    afficherArbre(i) {
      const arbre = document.getElementById('arbre');
      arbre.src = `../../../public/img/arbres/arbre${i}dofus.png`;
      arbre.style.display = 'block';
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
  color: #ffa260;
  cursor: pointer;
  transition: 0.25s;
}
.boutonCompétences:hover {
  background: #ffa260;
  color: #fff;
  border-color: #ffa260;
  transition: 0.25s;
}

#projets * {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
}
</style>

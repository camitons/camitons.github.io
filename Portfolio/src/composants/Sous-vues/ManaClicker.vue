<script setup>


import {ref, onMounted} from "vue";

const mana = ref(0);

var manaparclick=1;

const farmers = ref([
  {name: "Soldat de l'ombre", cost : 5, count : 0 },
  {name: "Iop", cost : 30, count : 0 },
  {name: "Insecte de marbre", cost : 100, count : 0 },
  {name: "Chevalier à la lame pourpre", cost : 200, count : 0 },
  {name: "Yggdrasil", cost : 1000, count : 0 },
])

const clickMana = () => {
  mana.value+=manaparclick;
};

const verifassezmana = (quantmanarequis) => {
  return quantmanarequis > mana.value;
}

const acheterFarmer = (index) => {
  const farmer = farmers.value[index];
  if (mana.value >= farmer.cost){
    farmer.count+=1
    farmer.cost+=farmer.cost*0.2;
  }
}

let leManaParSeconde =0;
function generManaPerSec () {
  let manaparsecond = 0;
  farmers.value.forEach(farmer=> {
    manaparsecond += farmer.count
  })
  mana.value += manaparsecond;
  leManaParSeconde= manaparsecond;
}

onMounted(() => {
  setInterval(generManaPerSec, 1000)
})

</script>

<template>

  <div>
    <br><br><br><br>
    <h1> Mana-rock clicker </h1>
    <h3> Obtenez le plus de mana possible ! </h3>


    <label> Mana : </label>
    <label v-text=mana>  </label>
    <br>
    <label> Mana par seconde : </label>
    <label v-text="leManaParSeconde"></label>
    <button @click="clickMana()"> Clic </button>

    <br><br><br><br><br>

    <div v-for="(farmer, index) in farmers" key="index" >
      <button
        v-if="mana>=farmer.cost"
        @click="acheterFarmer(index)"
        >
        Acheter {{farmer.name}} ( pour seulement {{farmer.cost}} mana )
      </button>

      <p v-if="farmer.count>0"> {{farmer.count}}  {{farmer.name}} possédés : </p>
    </div>


  </div>
</template>

<style scoped>

</style>
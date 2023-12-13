<script>
// javascript
var btnnav = document.getElementsByClassName('btndesc');
btnnav.addEventListener("mouseover", reactionhover, false);
btnnav.addEventListener("mouseout", reactionsortie, false);

function reactionhover() {
  btnnav.style.color = "white";
}

function reactionsortie() {
  btnnav.style.color = "black";
}



</script>

<template>
<!-- html -->
 <li class="btndesc"> Home </li>
 <li class="btndesc"> Dessin </li>
 <li class="btndesc"> Qui je suis </li>
 <li class="btndesc"> Où le monde va </li>
 <li class="btndesc"> Que faire pour changer ça </li>

</template>

<style>
/* CSS */

.btndesc {
  display: inline-block;
  margin: 0 10px;
  padding: 10px 20px;
  border: 1px solid black;
  border-radius: 5px;
  background-color: white;
  color: black;
  font-family: 'Roboto', sans-serif;
  font-size: 20px;
  font-weight: bold;
  text-decoration: none;
  text-transform: uppercase;
  transition: 0.5s;
}
</style>

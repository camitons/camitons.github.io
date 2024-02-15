<script setup>

</script>

<template>
  <div>
    <p>
      <br>
      Mes réseaux sociaux !

    </p>
    <a href="https://www.linkedin.com/in/albin-caminade-069526197/">
      <p> LINKEDIN</p>
      <img alt='Logo Linkedin' src="/img/logos/linkedinlogo.png" id="linkedin">
    </a>
    <a href="https://github.com/camitons">
      <p> GITHUB</p>
      <img alt='Logo Github' src="/img/logos/githublogo.png" id='github'>
    </a>
    <a href="">
      <p> DISCORD</p>
      <img alt='Logo discord' src="/img/logos/discordlogo.webp" id='discord'>
    </a>
  </div>

</template>

<style scoped>

#linkedin, #github, #discord {
  width: 50px;
  height: 50px;
  margin: 10px;
  border-radius: 50%;
}

div{
  user-select: none;
background-color: #2c3e50;
}

a{
  display: inline-block;
  padding: 15px;
}

</style>
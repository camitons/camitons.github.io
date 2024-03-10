<style scoped>


* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  -webkit-font-smoothing: antialiased;
  -moz-font-smoothing: antialiased;
  -o-font-smoothing: antialiased;
  font-smoothing: antialiased;
  text-rendering: optimizeLegibility;
}

/*  */
body {
  font-family: "Roboto", Helvetica, Arial, sans-serif;
  font-weight: 100;
  font-size: 12px;
  line-height: 30px;
  color: #777;
  /* background: #4CAF50; */
  background: #FFF;
}
.container {
  max-width: 700px;
  max-height: 700px;
  width: 100%;
  margin: 0 auto;
  position: relative;
}
#contact input[type="text"],
#contact input[type="email"],
#contact input[type="tel"],
#contact input[type="url"],
#contact textarea,
#contact button[type="submit"] {
  font: 400 12px/16px "Roboto", Helvetica, Arial, sans-serif;
}
#contact {
  background: #F9F9F9;
  padding: 25px;
  margin: 150px 0;
  box-shadow: 0 0 20px 0 rgba(0, 0, 0, 0.2), 0 5px 5px 0 rgba(0, 0, 0, 0.24);
}
#contact h3 {
  display: block;
  font-size: 30px;
  font-weight: 300;
  margin-bottom: 10px;
  color: #2c3e50;
}
#contact h4 {
  margin: 5px 0 15px;
  display: block;
  font-size: 13px;
  font-weight: 400;
}
fieldset {
  border: medium none !important;
  margin: 0 0 10px;
  min-width: 100%;
  padding: 0;
  width: 100%;
}
#contact input[type="text"],
#contact input[type="email"],
#contact input[type="tel"],
#contact input[type="url"],
#contact textarea {
  width: 100%;
  border: 1px solid #ccc;
  background: #FFF;
  margin: 0 0 5px;
  padding: 10px;
}
#contact input[type="text"]:hover,
#contact input[type="email"]:hover,
#contact input[type="tel"]:hover,
#contact input[type="url"]:hover,
#contact textarea:hover {
  -webkit-transition: border-color 0.3s ease-in-out;
  -moz-transition: border-color 0.3s ease-in-out;
  transition: border-color 0.3s ease-in-out;
  border: 1px solid #aaa;
}
#contact textarea {
  height: 100px;
  max-width: 100%;
  resize: none;
}
#contact button[type="submit"] {
  cursor: pointer;
  width: 100%;
  border: none;
  /*   background: #4CAF50; */ /* Submit button - green */
  background: grey;
  color: #FFF;
  margin: 0 0 5px;
  padding: 10px;
  font-size: 15px;
}
#contact button[type="submit"]:hover {
  /*   background: #43A047; */ /* Submit button - darker green when hover */
  background: lightgrey;
  -webkit-transition: background 0.3s ease-in-out;
  -moz-transition: background 0.3s ease-in-out;
  transition: background-color 0.3s ease-in-out;
}
#contact button[type="submit"]:active {
  box-shadow: inset 0 1px 3px rgba(0, 0, 0, 0.5);
}

#contact input:focus,
#contact textarea:focus {
  outline: 0;
  border: 1px solid #aaa;
}

::-webkit-input-placeholder {
  color: #888;
}

:-moz-placeholder {
  color: #888;
}

::-moz-placeholder {
  color: #888;
}

:-ms-input-placeholder {
  color: #888;
}
</style>
<template>
  <!-- idées pour le backend -->

<!--  Service de stockage en ligne : Vous pouvez utiliser des services de stockage en ligne comme Firebase Realtime Database ou Firestore. Ces services vous permettent de stocker des données sous forme de JSON et fournissent une API simple pour lire et écrire des données. Avec Firebase, par exemple, vous pouvez utiliser Firestore pour stocker les données et Firebase SDK pour JavaScript pour les récupérer côté frontend.-->

<!--  Utilisation de services de formulaires en ligne : Des services comme Google Forms vous permettent de créer rapidement des formulaires et de récupérer les réponses via une interface Web ou en exportant les données. Vous pouvez intégrer un formulaire Google directement dans votre application Vue.js.-->

<!--  Stockage local dans le navigateur : Si les données ne nécessitent pas de persistance entre les sessions, vous pouvez simplement stocker les données dans le navigateur du client à l'aide du stockage local (localStorage ou sessionStorage). Cela évite complètement l'utilisation d'un backend.-->

<!--  Utilisation de services de microservices sans serveur (serverless) : Des services comme AWS Lambda ou Google Cloud Functions vous permettent d'exécuter du code sans avoir à gérer des serveurs. Vous pouvez créer une fonction simple pour gérer la récupération des données du formulaire.-->

  <div class="background">
    <div class="container">
      <form id="contact" action="" method="post">
        <h3>Un mot doux, une info ? N'hésitez pas </h3>
        <fieldset>
          <input placeholder="Your name" type="text" tabindex="1" required autofocus>
        </fieldset>
        <fieldset>
          <input placeholder="Your Email Address" type="email" tabindex="2" required>
        </fieldset>
        <!--     <fieldset>
              <input placeholder="Your Phone Number (optional)" type="tel" tabindex="3" required>
            </fieldset> -->
        <!--     <fieldset>
              <input placeholder="Your Web Site (optional)" type="url" tabindex="4" required>
            </fieldset> -->
        <fieldset>
          <textarea placeholder="Type your message here...." tabindex="5" required></textarea>
        </fieldset>
        <fieldset>
          <button name="submit" type="submit" id="contact-submit" data-submit="...Sending">Submit</button>
        </fieldset>
      </form>
    </div>
  </div>
</template>


<script>

// Grâce à l'adresse proton.mail je vais envoyer un mail à lejaj, j'ai l'alias.
// les mails seront donc envoyés entre mes deux adresses mails. Un utilisateur ne devra pouvoir qu'envoyer un seul
// mail par jour. (adresse ip ?)


//import nodemailer from "nodemailer";
//
//async function sendEmail({ to, subject, text, html }) {
//  // Créer un transporter
//  let transporter = nodemailer.createTransport({
//    host: "votre.smtp.host",
//    port: 587, // Le plus souvent 587 pour TLS
//    secure: false, // true pour le port 465, false pour d'autres ports
//    auth: {
//      user: "votre@adresse.email", // votre adresse email
//      pass: "votreMotDePasse", // votre mot de passe
//    },
//  });
//
//  // Envoyer l'email
//  let info = await transporter.sendMail({
//    from: '"Nom Expéditeur" <votre@adresse.email>', // adresse de l'expéditeur
//    to: to, // liste des destinataires
//    subject: subject, // Ligne de sujet
//    text: text, // corps du texte
//    html: html, // corps du html
//  });
//
//  console.log("Message envoyé: %s", info.messageId);
//}
//
//module.exports = { sendEmail };
</script>
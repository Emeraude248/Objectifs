// Il y a plusieurs façon de sélectionner un nœud DOM ; ici on récupère
// le formulaire et le champ d'e-mail ainsi que l'élément span
// dans lequel on placera le message d'erreur




//message erreur
//coordonnées
var form = document.getElementsByTagName('form')[0];
var email = document.getElementById('email');
var error = document.querySelector('.error');
var reset = document.getElementById('reset');




form.addEventListener("reset", function (event) {

  if (email.validity.valid||!email.validity.valid){
    error.innerHTML = ""; 
    error.className = "error";
  }

  if (secu.validity.valid||!secu.validity.valid){
    errorsecu.innerHTML = ""; 
    errorsecu.className = "error";
  }
  
  if (cp.validity.valid||!cp.validity.valid){
    errorcp.innerHTML = ""; 
    errorcp.className = "error";
  }
  
  if (pass1.validity.valid||!pass1.validity.valid){
    errorpass1.innerHTML = ""; 
    errorpass1.className = "error";
  }

  if (pass2.validity.valid||!pass2.validity.valid){
    errorpass1.innerHTML = ""; 
    errorpass1.className = "error";
  }

  if (pass3.validity.valid||!pass3.validity.valid){
    errorpass1.innerHTML = ""; 
    errorpass1.className = "error";
  }

}, false);



email.addEventListener("input", function (event){

  if (email.validity.valid){
    // S'il y a un message d'erreur affiché et que le champ
    // est valide, on retire l'erreur
    error.innerHTML = ""; // On réinitialise le contenu
    error.className = "error"; // On réinitialise l'état visuel du message
  }
  
}, false);

form.addEventListener("submit", function (event) {
  // Chaque fois que l'utilisateur tente d'envoyer les données
  // on vérifie que le champ email est valide.
  if (!email.validity.valid) {

    // S'il est invalide, on affiche un message d'erreur personnalisé
    error.innerHTML = "L'adresse mail n'est pas valide";
    error.className = "error active";
    // Et on empêche l'envoi des données du formulaire
    event.preventDefault();
  }
}, false);

//sécu

var secu = document.getElementById('secu');
var errorsecu = document.querySelector('.errorsecu');

secu.addEventListener("input", function (event){

  if (secu.validity.valid) {
    errorsecu.innerHTML = "";
    errorsecu.className = "error";
  }
}, false);

form.addEventListener("submit", function (event) {
  if (!secu.validity.valid) {
    errorsecu.innerHTML = "Le numéro de sécu n'est pas valide";
    errorsecu.className = "error active";
    event.preventDefault();
  }
}, false);



//code postal

var cp = document.getElementById('cp');
var errorcp = document.querySelector('.errorcp');

cp.addEventListener("input", function (event) {

  if (cp.validity.valid) {
    // S'il y a un message d'erreur affiché et que le champ
    // est valide, on retire l'erreur
    errorcp.innerHTML = ""; // On réinitialise le contenu
    errorcp.className = "error"; // On réinitialise l'état visuel du message
  }
}, false);

form.addEventListener("submit", function (event) {
  // Chaque fois que l'utilisateur tente d'envoyer les données
  // on vérifie que le champ email est valide.
  if (!cp.validity.valid) {

    // S'il est invalide, on affiche un message d'erreur personnalisé
    errorcp.innerHTML = "Le code postal n'est pas valide";
    errorcp.className = "error active";
    // Et on empêche l'envoi des données du formulaire
    event.preventDefault();
  }
}, false);


//passeport

var pass1 = document.getElementById('pass1');
var pass2 = document.getElementById('pass2');
var pass3 = document.getElementById('pass3');
var errorpass1 = document.querySelector('.errorpass1');

pass1.addEventListener("input", function (event){

  if (pass1.validity.valid){
    errorpass1.innerHTML = "";
    errorpass1.className = "error";
  }
}, false);

form.addEventListener("submit", function (event) {
  if (!pass1.validity.valid){
    errorpass1.innerHTML = "Le numéro de passeport n'est pas valide";
    errorpass1.className = "error active";
    event.preventDefault();
  }
}, false);

pass2.addEventListener("input", function (event){

  if (pass2.validity.valid){
    errorpass1.innerHTML = "";
    errorpass1.className = "error";
  }
}, false);

form.addEventListener("submit", function (event) {
  if (!pass2.validity.valid){
    errorpass1.innerHTML = "Le numéro de passeport n'est pas valide";
    errorpass1.className = "error active";
    event.preventDefault();
  }
}, false);

pass3.addEventListener("input", function (event){

  if (pass2.validity.valid){
    errorpass1.innerHTML = "";
    errorpass1.className = "error";
  }
}, false);

form.addEventListener("submit", function (event) {
  if (!pass3.validity.valid){
    errorpass1.innerHTML = "Le numéro de passeport n'est pas valide";
    errorpass1.className = "error active";
    event.preventDefault();
  }
}, false);


/*
let données = document.getElementsByTagName("input");
console.log(données);

for (let i=0; i <données.length; i++) {
  console.log(données[i].innerHTML);
}
*/

/*
//récup value dans console
var nom = document.getElementsByName('nom');

for (let i = 0; i < nom.length; i++) {
  console.log(nom[i].value);
}*/

function getValue(){

var nom = document.getElementById("nom").value;
console.log(nom);

var prenom = document.getElementById("prenom").value;
console.log(prenom);

var age = document.getElementById("age").value;
console.log(age);

var sexe = document.getElementById("sexe").value;
console.log(sexe);

var nation = document.getElementById("nation").value;
console.log(nation);

var dateN = document.getElementById("dateN").value;
console.log(dateN);

var paysN = document.getElementById("paysN").value;
console.log(paysN);

var job = document.getElementById("job").value;
console.log(job);

var secu = document.getElementById("secu").value;
console.log(secu);

var email = document.getElementById("email").value;
console.log(email);

var ad = document.getElementById("ad").value;
console.log(ad);

var cp = document.getElementById("cp").value;
console.log(cp);

var ville = document.getElementById("ville").value;
console.log(ville);

var pass1 = document.getElementById("pass1").value;
var pass2 = document.getElementById("pass2").value;
var pass3 = document.getElementById("pass3").value;
var pass = pass1 + pass2 + pass3
console.log(pass);

var dateon = document.getElementById("dateon").value;
console.log(dateon);

var dateoff = document.getElementById("dateoff").value;
console.log(dateoff);

}


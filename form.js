// Il y a plusieurs façon de sélectionner un nœud DOM ; ici on récupère
// le formulaire et le champ d'e-mail ainsi que l'élément span
// dans lequel on placera le message d'erreur

var form  = document.getElementsByTagName('form')[0];
var email = document.getElementById('email');
var error = document.querySelector('.error');

email.addEventListener("input", function (event) {

  if (email.validity.valid) {
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
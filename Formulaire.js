
  // Validation de formilaire avec les evenements 


     

     document.getElementById("inscription").addEventListener("submit", function(e) {
     e.preventDefault();
        
     var error;
     var nom = document.getElementById("nom");
     var Prenom = document.getElementById("prenom");
     var laDate = document.getElementById("date");
     var Email = document.getElementById("email");
     var telephoneNumber = document.getElementById("telephone");
     var Adress = document.getElementById("adresse");
     var PostalCode = document.getElementById("postal");



     if (!nom.value) {

        error = "Veulillez saisir votre nom dans le champ de saisie de formulaire !";

     }

     if (!prenom.value) {

        error = "Veulillez saisir votre prenom dans le champ de saisie de formulaire !";
        
     }
     if (!date.value) {

        error = "Veulillez saisir votre date dans le champ de saisie de formulaire !";
        
     }
     if (!email.value) {

        error = "Veulillez saisir votre émail dans le champ de saisie de formulaire !";
        
     }
     if (!telephone.value) {

        error = "Veulillez saisir votre telephone dans le champ de saisie de formulaire !";
        
     }
     if (!nom.value) {

        error = "Veulillez saisir votre nom dans le champ de saisie de formulaire !";
        
     }
     if (!adresse.value) {

        error = "Veulillez saisir votre adresse dans le champ de saisie de formulaire !";
        
     }
     if (!code-postal.value) {

        error = "Veulillez saisir votre code postale dans le champ de saisie de formulaire !";
        
     }
     

     if (error) {
        e.preventDefault();
        document.getElementById("Error").innerHTML = error;
        return false;
     } else {

        alert('Votre formulaire a été bien envoyé ! Merci pour votre confiance');

    }

     
    });



     











  // Validation de formilaire avec les evenements en java-script






     

     document.getElementById("inscription").addEventListener("submit", function(e) {
     
     e.preventDefault();
        
     var erreur;

     var nom = document.getElementById("nom");
     var prenom = document.getElementById("prenom");
     var date = document.getElementById("date");
     var email = document.getElementById("email");
     var telephone = document.getElementById("telephone");
     var adresse = document.getElementById("adresse");
     var postale = document.getElementById("postal");
     var message = document.getElementById("precisions");


    
     if (!nom.value) {

       erreur = "Veulillez saisir votre nom dans le champ de saisie de formulaire !";

     }

     if (!prenom.value) {

      erreur = "Veuillez saisir votre prenom dans le champ de saisie de formulaire !"

     }

     if (!date.value) {
      
      erreur = "Veuillez saisir votre date de naissance dans le champ de saisie de formulaire !"
      
     }


     
     

     if (erreur) {
        e.preventDefault();
        document.getElementById("erreur").innerHTML = erreur;
        return false;
     } else {

        alert('Votre formulaire a été bien envoyé ! Merci pour votre confiance');

    }

     
    });



     










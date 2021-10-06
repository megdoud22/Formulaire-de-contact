
  // Validation de formilaire avec les evenements 


     

     document.getElementById("inscription").addEventListener("submit", function(e) {
     
     e.preventDefault();
        
     var erreur;
     var nom = document.getElementById("nom");
    
     if (!nom.value) {

       erreur = "Veulillez saisir votre nom dans le champ de saisie de formulaire !";

     }

     
     

     if (erreur) {
        e.preventDefault();
        document.getElementById("erreur").innerHTML = erreur;
        return false;
     } else {

        alert('Votre formulaire a été bien envoyé ! Merci pour votre confiance');

    }

     
    });



     










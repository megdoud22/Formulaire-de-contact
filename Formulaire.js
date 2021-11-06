


document.getElementById("email2").addEventListener("input", function() {

   var paragrapheErreur = document.getElementById("erreur");

   if (this.value != document.getElementById("email").value) {

      paragrapheErreur.innerHTML = "Les deux adresses émail ne correspondent pas !";

   } else {

      paragrapheErreur.innerHTML = "";
   }

});

document.Forms["inscription"].addEventListener("submit", function(e) {

   var erreur;

   var inputs = this;

//Traitement cas par cas (input unique)

if (inputs["email"].value != "fatah.megdoud@yahoo.fr") {

   erreur = "Votre adresse émail est incorrect";
}

// Traitement générique
for (var i = 0; i < inputs.length; i++) {
   console.log(inputs[i]);
   if (!inputs[i].value) {

      erreur ="Veuillez remplir tous les champs";
      break;
   }
}

if (erreur) {

      e.preventDefault();
      
      document.getElementById("erreur").innerHTML = erreur;

      return false;

      } else {

        alert('Votre formulaire a été bien envoyé ! Merci pour votre confiance');
     }
});






// Validation de formulaire avec les évenements en java-script


document.getElementById("inscription").addEventListener("submit", function(e) {

var erreur;

var inputs = this.getElementsByTagName("input");

for (var i = 0; i < inputs.length; i++) {

   console.log(inputs[i]);

   if (!inputs[i].value) {

         erreur = "Veuillez remplir tous les chmaps de saisie !!";
       }

     }

   if (erreur) {

      e.preventDefault();

      document.getElementById("erreur").innerHTML = erreur;
      return false;

      } else {
         alert('Votre formulaire a été bien envoyé ! Merci pour votre confiance');
     }


     

/* 
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

        erreur = "Veulillez saisir votre prenom dans le champ de saisie de formulaire !";
        
     }

     if (!date.value) {

        erreur = "Veulillez saisir votre date dans le champ de saisie de formulaire !";
        
     }
     if (!email.value) {

        error = "Veulillez saisir votre émail dans le champ de saisie de formulaire !";
        
     }
     if (!telephone.value) {

        error = "Veulillez saisir votre telephone dans le champ de saisie de formulaire !";
        
     }
     
     if (!adresse.value) {

        error = "Veulillez saisir votre adresse dans le champ de saisie de formulaire !";
        
     }

      if (!postale.value) {

        error = "Veulillez saisir votre adresse dans le champ de saisie de formulaire !";
        
     }

      if (!message.value) {

        error = "Veulillez saisir votre adresse dans le champ de saisie de formulaire !";
        
     }

   


      if (erreur) {

      e.preventDefault();

      document.getElementById("erreur").innerHTML = erreur;
      return false;
      } else {

        alert('Votre formulaire a été bien envoyé ! Merci pour votre confiance');
     }

     
    });
*/


     










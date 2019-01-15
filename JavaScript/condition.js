// alert('hi')

// Structure de base IF

/*if(true){/*par défaut la condition à vérifier le IF vérifie si elle est vraie 
}

var nb1 = 10;

if(nb1 < 50){
    console.log('nb1 est bien inférieur à 50')
}
if(true){/*code si vrai... 
}
else{  code si faux
}

if(nb1 > 50) {
    console.log('nb1 est bien supérieur à 50')
}
else{
    console.log('nb1 n\'est pas supérieur à 50')
}*/

/* EXERCICE */

/* var age =Number(prompt('Veuillez entrer votre âge'));

if(age >= 18){
    alert('Bienvenue à vous !')
 break;}

else(age <= 18);{
    alert('Il vous est interdit de rentrer sur ce site car vous êtes mineur. Vous allez être redirigé vers un autre site');
    document.location.href=("http://www.google.fr");
} */

// Correction

var MajoriteFR = 18;
// Demander l'âge en s'assurant que nous avons bien un NUMBER
var age = parseInt(prompt("Indiquez votre âge"));

if(age >= MajoriteFR){
    alert('Bienvenue sur le site, vous êtes majeur');
} else{
    // Si il est mineur je lui signale
    alert('Allez voir un autre site ...')
    document.location.href=('https://www.google.com/webhp?client=firefox-b-ab')
}

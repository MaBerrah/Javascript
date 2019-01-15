// L'opérateur de comparaison == signifie 'égal à'
// Il permet de vérifier que les VALEURS de 2 variables sont identiques 
var nb1 = 123;
var nb2 = '123';
console.log(nb1 == nb2) //Retourne true

// L'opérateur de comparaison === signifie 'strictement égal à'
// Il permet de vérifier la valeur et le type
console.log(nb1 === nb2) //Retourne false

// L'opérateur != signifie 'différent de... en VALEUR'
console.log(nb1 != nb2) //Retourne false

// L'opérateur !== signifie 'strictement différent de ... en VALEUR et en TYPE'
console.log(nb1 !== nb2); //Retourne true

// var prenom, monAge;
// prenom = "Mathieu";
// monAge = 19;

// // 1 --Demander son prénom à l'utilisateur avec un prompt
// var prenomLogin = prompt("Quel est votre prénom ?");
// // 2 -- Je vérifie si le prénom saisi (prenomLogin) correspond à celui en base de donnée (prenom)
// if(prenomLogin === prenom) {
//     // 2a. Si tout est ok, je continue la vérification avec l'âge
//    // 2a1. Demande a mon utilisateur son âge via un PROMPT

//    var ageLogin = parseInt(prompt("Votre âge ?"));
//    if (ageLogin === monAge) {
//        alert("bienvenue" + " " + prenomLogin);
//    } else {
//        // 2a2. Si les AGEs ne correspondent pas, je lance une ALERT.
//        alert("Erreur d'âge");
//    }
//    } else {
//          // 2b. Sinon, les prénoms ne correspondent pas, je lance une ALERT.
//          alert("Attention, prénom non reconnu");
//    }

var prenom, monAge;
prenom = "Mathieu";
monAge = 19;
mdp = "Apéro";

var prenomLogin = prompt("Quel est votre prénom ?");
if ( prenomLogin === prenom){
    var ageLogin = parseInt(prompt("Votre âge ?"));
    if(ageLogin === monAge) {
        var mpdLogin = prompt("Le mot de passe ?");
        if(mpdLogin === mdp){
            alert("Bienvenue" + " " + prenomLogin);
        }else{
            alert("pb de mot de passe !");
        }
    }else{
        alert("Erreur d'âge");
    }
}else{
    alert("Attention, Prénom non reconnu");
}
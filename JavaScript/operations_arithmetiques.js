// alert('hi');

// --1 : Addition
// INFO --- Je peux déclarer plusieurs variables à la suite
var nb1, nb2, resultat;
nb1 = 10;
nb2 = 5;

// -- Addition de nb1 et nb2
resultat = nb1 + nb2;
console.log(resultat);

// --2 : Soustraction
// Soustraction de nb1 - nb2
resultat = nb1-nb2;
console.log(resultat);

// --3 : Multiplication
// Multiplication de nb1 - nb2
resultat = nb1 * nb2;
console.log(resultat);

// --4 : Division 
// Division de nb1 - nb2

resultat = nb1 / nb2;
console.log(resultat);

// -- 5 : Modulo
// Modulo de nb1 - nb2

resultat = nb1 % nb2;
console.log(resultat);

// -- Et maintenant je ré-affecte une valeur à nb1

nb1 = 11;
resultat = nb1 % nb2;
console.log("Le reste de la division de " + nb1 + " par " + nb2 + " est égal à : " + resultat);

/*LES ECRITURES SIMPLIFIEES*/

nb1 = 15;
nb1 = nb1 + 5;
console.log(nb1);

nb1 += 10; //nb1 lui même + quelque chose
console.log(nb1);
// le raccourci est le même avec les autres opérateurs +, -, *, /, %

/// FIN ///
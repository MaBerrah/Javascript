//Opérateur ET : && ou AND 

// Si je cumule 2 conditions

//=> prenom === prenomLogin
//=> monAge === ageLogin
// pour que les 2 correspondent pour être validés il faut les associer

if((prenomLogin ===prenom) && (ageLogin === monAge)){
    /*---code---*/
    /*je ne rentre ici que si les 2 conditions sont vraies */
}

if ((A) && (B)){...}
=> si; A; est ;FAUX ;et ;B ;est ;VRAI => FAUX;
=> si; A; est ;VRAI ;et ;B ;est ;FAUX => FAUX;
=> si ;A; est ;FAUX ;et; B ;est ;FAUX => FAUX;
=> si ;A; est ;VRAI ;et ;B ;est ;VRAI => VRAI;

/*L'opérateur OU : || ou OR (| pipe => alt gr + 6)
 */

 var utilisateurLog = true;
 if(!utilisateurLog){
     //Si l'utilisateur n'est pas loggé.
 }
 //Ce qui revient à écrire :
 if (utilisateurLog == false){
     //Si l'utilisateur n'est pas loggé
 }
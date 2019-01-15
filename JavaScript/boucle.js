

/* Les boucles*/

// -- La boucle FOR

/* for (3 arguments){
        //code//
}*/

/*
1. Initialise un compteur à partir de combien je compte (par défaut le compteur est la variable 'i')
2. La condition à vérifier qui doit donc être VRAI (TRUE)
3; Le 'pas' d'incrémentation (combien j'ajoute à chaque tour, généralement 1 donc i++^)*/

for (var i=1; i <=10; i+=2){
    document.write("<p>Instruction éxécutée : "+ i + "</p>")
}

// -- La boucle WHILE (tant que)
// très utilisée quand on ne connaît pas le nombre de tours de la boucle à l'avance
var j = 1;
while (j <=10){
    document.write('<hr/> <p> Instruction éxécutée : ' + j + '</p>');
    j++;
}

//Exercice

var monCompte = 1000;
var temps = 0;
while(monCompte < 2000){
    monCompte += 50;
    temps++;
}
document.write('<h3>Sous sur mon compte : ' + monCompte + '</h3>');
document.write('<h3>Jusqua 2000€, il me faut : ' + temps + 'mois </h3')


// Avec la boucle FOR

var tps = 0;
for (var mesSous = 1000; mesSous <2000; mesSous +=50){
    document.write("<h3>Le mois suivant j'ai : " + mesSous + "</h3>");
    tps++
}
document.write('<h3> il aura fallu : ' + tps + "mois.</h3>");
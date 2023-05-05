function changeTexte() {
    var paragraphe = document.getElementById("monParagraphe");
    // Modification du texte de
    paragraphe.innerHTML = "Pour relier un fichier javascript au document HTML, il faut inserer une balise script juste avant la fermeture du body de la page!";
};


function sayHi() {
    console.log("hi")
};

sayHi();
sayHi();

/*Addition*/
console.log (1+1);
/*Soustraction*/
console.log (18-3);
/*Multiplication*/
console.log (5*5);
/*Division*/
console.log (10/2);
/*Modulo*/
console.log (23%3);
/*Puissance*/
console.log (25**25);

/*Operateurs raccourcis*/
var a = 5;
var b = 3;
var c = a+b;

c+=2;
console.log(c);

c-=2;
console.log(c);

c*=2;
console.log(c);

c/2;
console.log(c);

/*Les conditions*/

var TailleMathis = 183;
var TailleKillian = 185;
var TaillePrici = 159;

if("TailleMathisDans2ans" < "TailleKillian") {
    console.log('Mathis est toujours plus petit que Killian');
}

var TailleMathisDans2ans = 186;
if("TailleMathisDans2ans" < "TailleKillian") {
    console.log('Mathis est toujours plus petit que Killian');
}
else {
    console.log('Mathis est devenu plus grand que Killian');
}

var TailleMathisDans3ans = 188;
if("TailleMathisDans3ans" > "TailleKillian") {
    console.log('Mathis est plus grand que Killian');
}
else if ("TailleMathisDans3ans" < "TailleKillian") {
    console.log('Mathis est devenu encore plus grand que Killian');
}

else {
    console.log('Mathis est devenu plus grand que Killian')
}

/*Les Opérateurs de logique*/
if(TaillePrici < TailleKillian && TailleMathis < TailleKillian) {
    console.log('Prici est plus petite que Mathis qui est lui même plus petit que Killian');
}
else {
    console.log("Je n\'y comprend plus rien")
};

// alert('Bonjour et bienvenue sur ma page!');

// confirm('Avez vous compris ?');

// prompt ('Comment alllez vous ce matin ?');

// affiche le texte dans le document courant
// document.write ('Coucou');

// document.write ('<p>Je suis un paragraphe</p>');

console.log('Je suis là!');

// Déclarer une variable

var maVariables;

// Affecter une valeur et une varible
maVariables = 'Je suis du text dans une variable';
// = ou opéarteur d'affection permet d'affecter une valeur à une variable

console.log(maVariables);

var maVariable2 = 'Je suis une nouvelle variable';

var variable1 = 'Quel est mon type à moi?';

console.log(variable1);
console.log(typeof variable1); 
// Affiche 'string'

var string = 'je suis une variable colorée';
console.log(string);

var string2 = 'je suis colorée, c\'est le printemps';
console.log(string2);

var string3 = 'je suis aussi une variable colorée';
console.log(string3);

var string4 = 'Au printemps, les fueilles de l\'arbre repousssent';
console.log(string4);

// Integer
var killianId = 125;
console.log(typeof killianId);
// Double ou float
var killianId = 59.2;
console.log(typeof killianId);
// string
var killianId = "59";
console.log(typeof killianId);
// Boolean
var vrai = true;
console.log(typeof vrai);
// type Null
var aucuneValeur = null;
console.log(aucuneValeur);
// Objet
console.log(typeof aucuneValeur);
// Undefined
var x;
console.log(x);

/* Le type Array */
var myArray = "";
console.log(myArray);

var myArray2 = Array();
console.log(myArray2);

var myArray = [65, 'Zonaira', true, undefined, 22.2, [1, 2, 3]];
console.log(myArray);
console.log(typeof myArray);

// Concaténation
var serie1 = 'the night agent';
var serie2 = 'Les demoiselles du téléphone';
var serie3 = 'Malcolm';
var serie4 = 'Snowfall';
var serie5 = 'Power';

var serieChoisie = serie4;
console.log('La serie qui sera à l\'affiche en salle 3 pendant 1 semaine est: ' + serieChoisie);

// Ajouter des guillemets à une texte par concaténation
console.log("La serie '" + serieChoisie + "' arrive en tête du classement suivie de '" + serie1 + "' qui...s");

// les literaux de gabarits
console.log(`La serie '${serieChoisie}' arrive en tête du classement suivie de '${serie1}' et  '${serieChoisie}'`);

var liberation = 'Nous sommes libérés,';
var liberation = 'C\'est la pause!';

// oppérateur de logique 
var heure = 9.10;
var groupeComplet = false;


if(heure >= 9 || groupeComplet == true) {
    console.log("le cours commence");
}
else if (heure >= 9 || groupeComplet == false) {
    console.log("On attend que tout le monde arrive ou qu'il soit 9h");
}
else {
    console.log("On attend que tout le monde arrive ou qu'il soit 9h");
};

 /* Exercices */

var prenom = "Killian";
var prenom = "";

if(prenom == "Killian" || prenom == "" ) {
    console.log("Bonjour Killian");
}
else if(prenom == "" || prenom == "Killian" ) {
    console.log("Bienvenue sur ma page");
}
else {
    console.log("Bonjour jeune discordien");
};

var username;
var defaultName = username || "jeune discordien";

console.log("Bonjour " + defaultName);

var marathon = 42;
var positionActuelle = 30;

if (positionActuelle < marathon) {
    console.log("Vous n\'avez pas encore fini la course");
}
else if (positionActuelle == marathon) {
    console.log("Tu as terminée la course");
}
else if (positionActuelle > marathon) {
    console.log("Holala");
}
else {
    console.log("Ta position par rapport à la course");
};

var couleur = "violet";

if (couleur == "blue") {
    console.log("Couleur est violet");
}
else if (couleur == "rose") {
    console.log("couleur non repertoriée");
}
else if (couleur == "orange") {
    console.log("couleur non repertoriée");
}
else {
    console.log("Votre couleur est le violet-bleu-orange");
};

var temperature = -10;

if (temperature <= 0) {
  console.log("It's very cold");
};

var num = 3;
if (num > 0) {
  console.log("num is a positive number.");
};

var temperature = 20;
if (temperature <= 0) {
  console.log("It's very cold");
} else {
  console.log("It's not that cold");
};

//outputs: "It's not that cold"

var temperature = 30;

if (temperature <= 0) {
  console.log("It's very cold");
} else if (temperature >= 28) {
  console.log("It's really warm");
} else {
  console.log("It's not that cold");
};
//outputs: "It's really warm"

var temperature = 30;

var message = temperature < 0 ? "It's cold" : "It's hot"
console.log(message);
//outputs: It's hot

// var i = 1;

// while (i < 5 ) {
//   console.log(i);
//   i++;
// };

// var number = 1;

// do {
//   number += 1;
// } 
// while(number <= 5);

var i = 1;

while (i <= 26 ) {
  console.log(i + " Avril 2023 ");
  i++;
};

var time =10;
if (time == 0) {
    console.log ("Bon appétit");
}
else if (time == 1) {
    console.log (" Il reste " + time + " minutse avant exécution ");
} 
else {
    console.log (" Il reste "  + time + " minutse avant exécution ");
}
time--;

var prenom = 'Mireille';
console.log(prenom);
console.log(prenom.length);

prenom = prenom.toUpperCase();
console.log(prenom);

prenom = prenom.toLowerCase();
console.log(prenom);

// Methode replace

var salle = "Dans cette salle il fait froid";
console.log(salle.replace("froid","chaud"));

// Fonction parseInt et parseFloat

var chiffre = "22.10";
console.log(parseInt(chiffre));
console.log(parseFloat(chiffre));

function printMessage() {
    console.log("Hello World!");
  };

  function sayHello(name = 'Guest') {
    console.log('Hello, ' + name);
  }
  
  sayHello();
  //outputs: Hello, Guest
  sayHello('John');
  //outputs: Hello, John

  var helloAlert = function(text) {
    alert(`Hello ${text}`);
  };

  function creerParagraphe(play) {
    document.write('<p>' + play + '</p>');
  }

  creerParagraphe("Voici mon premier paragraphe");
  creerParagraphe("Voici mon deuxième paragraphe");
  creerParagraphe("Elle est précédée d'un mot clé (const, var, let) qui prermet de le déclarer. Elle a un nom, Elle peut stocker différents types de données elle se termine par un point virgule.");


function elementHTML(element1, texte) {
    document.write("<"+element1+">"+texte+"</"+element1+">");
  }

  elementHTML("h1, ceci est un titre h2");
  elementHTML("p", "mon paragraphe");
  
  
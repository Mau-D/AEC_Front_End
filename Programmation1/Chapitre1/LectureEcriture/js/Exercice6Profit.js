//Faites un programme qui lit le nom d’un article et son prix de détail.Votre programme doit afficher le prix de
// gros (66% du prix de détail) ainsi que le profit attendu.

//Variables d'entrée et de sortie
var nom;
var prix;


var prixGros;
var profit;

//Lecture du nom et du prix de l'article
nom = prompt("Inscrire le nom de l'article svp");
prix = Number(prompt("Inscrire le prix de cet article svp (format $$.$$)"))

//Calcul du profit et du prix en gros
prixGros  = 0.66 * prix;
profit = prix - prixGros;

//Afficher le prix de gros et le profit
console.log("Pour cet article: "+ nom + ",le prix du gros est de "+ prixGros + "$" + "pour un profit attendu de "+ profit, "$");
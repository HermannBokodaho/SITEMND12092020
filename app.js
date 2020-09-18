function presser(touche){
document.getElementById('resultat').innerHTML += touche;
}
function calculer(){
    var expression = document.getElementById('resultat').innerHTML;
    var resultat_a_afficher = math.evaluate(expression);
    document.getElementById('resultat').innerHTML = resultat_a_afficher;
}
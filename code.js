localStorage.setItem('code', false);
var code1 = localStorage.getItem('code');
var code2 = localStorage.getItem('start');
GoodCode = "8cd40d3fecc6d57f2b8d2b8bcd605c4d";

if (code1 !== code2) {
    console.log("vous devez renseigner le code !")
    alert("vous devez rensegner le code");
    // #1 demander le password //
    var go = prompt("Quell est le code ?");
    // #2 hash la réponse //
    var HashCode = md5(go);

    // #3 vérifier si le hash correspond au hash du résultat //
    while (HashCode !== GoodCode) {
    // #4 si non alert("Accès refuser") //
    // #6 while tant que "HashCode !== GoodCode" prompt("Quell est le code ?"); si "HashCode !== GoodCode" resultat relancer #4,#1,#2 //
      alert("Accès refuser");
    // #1 demander le password //
      var go = prompt("Quell est le code ?");
    // #2 hash la réponse //
      var HashCode = md5(go);
    }
    // #7 si  est correct break de la boucle et continuer le code //
    // #5 si oui alert ("Accès autoriser") //
    alert("Accès autoriser");
    localStorage.setItem('start', false);
}else{
    console.log("vous avez déja renseigner le code !");
}
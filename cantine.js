let client = "Awa";
let codePlat = 1;
let prixunitaire = 1500;
let quantite = Number("3");
let montantVerse = 5000;
if (codePlat = 1) {
    console.log("le prix est 1500 FCFA");
}
else if (codePlat = 2) {
    console.log("le prix est 2000 FCFA")
}
else if (codePlat = 3) {
    console.log("le prix est 2500 FCFA");
}
else {
    console.log("le code du plat est non reconnu");
}
function calculertotal (prixunitaire, quantité) {
    return prixunitaire * quantité;
}
let montantTotal = calculertotal(prixunitaire, quantite);
console.log(`le montant Total est ${montantTotal} FCFA`);
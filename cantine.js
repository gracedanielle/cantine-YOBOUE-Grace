let client = "Awa";
let codePlat = 3;
let prixunitaire = 0;
let quantite = Number("1");
let montantVerse = 4000;
if (codePlat === 1) {
    prixunitaire = 1500;}
    else if (codePlat === 2) {
    prixunitaire = 2000;}
    else if (codePlat=== 3) {
    prixunitaire = 1000}
    else {
    console.log("le code du plat est non reconnu");}


function calculertotal (prixunitaire, quantité) {
    return prixunitaire * quantité;
}
let montantTotal = calculertotal(prixunitaire, quantite);
console.log(`le montant Total est ${montantTotal} FCFA`);
for (let portioncommandee = 1; portioncommandee <= quantite; portioncommandee++) {
    console.log(`la portion commandée est la n° ${portioncommandee}`)

}  
    console.log(`le nom du client est ${client} le total à payer est ${montantTotal} FCFA`);
let monnaiearendre = montantVerse - montantTotal;
let montantmanquant = montantTotal - montantVerse
if (montantVerse > montantTotal) {
    console.log(` la monnaie à rendre est ${monnaiearendre} FCFA`);   
} 
else{
    console.log(`le montant manquant est: ${montantmanquant}`);
} 
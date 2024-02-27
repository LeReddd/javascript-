const form = document.getElementById("form");
const select = document.getElementById("selection");
const select2 = document.getElementById("selection2");
const select3 = document.getElementById("selection3");
const banane1 = document.getElementById("Banane");
const pomme1 = document.getElementById("Pomme");
const result = document.getElementById("result");
const orange1 = document.getElementById("Orange ")

const pomme = [];
const orange = [];
const banane = [];

let totalPomme = 0;
let totalOrange = 0;
let totalBanane = 0;

form.onsubmit = (event) => {
    event.preventDefault();

    pomme.push(select.value);

    const pommeV = parseFloat(pomme1.value) || 0;
    totalPomme += pommeV;

    result.innerText = "Pomme Montant -- " + totalPomme + ", Orange Montant -- " + totalOrange + ", Banane Montant -- " + totalBanane;
};

const orangeV = parseFloat(orange1.value) || 0;
totalOrange += orangeV;

const bananeV = parseFloat(banane1.value) || 0;
totalBanane += bananeV;

orange.push(select2.value);
banane.push(select3.value);
var EUR2008 = 4965.7;
var EUR2018 = 4209.3;
var SAM2008 = 1132.6;
var SAM2018 = 1261.5;
var NAM2008 = 6600.4;
var NAM2018 = 6035.6;
var AFR2008 = 1028;
var AFR2018 = 1235.5;
var ASI2008 = 12954.7;
var ASI2018 = 16274.1;
var AUS2008 = 1993;
var AUS2018 = 2100.5;
var ALL2018 = EUR2018 + SAM2018 + NAM2018 + AFR2018 + ASI2018 + AUS2018;
var difeur = EUR2018 - EUR2008;
var difsam = SAM2018 - SAM2008;
var difnam = NAM2018 - NAM2008;
var difafr = AFR2018 - AFR2008;
var difasi = ASI2018 - ASI2008;
var difaus = AUS2018 - AUS2008;
var eu1 = (EUR2018 / ALL2018) * 100;
var eu2 = EUR2018 / EUR2008;
var sa1 = (SAM2018 / ALL2018) * 100;
var sa2 = SAM2018 / SAM2008;
var na1 = (NAM2018 / ALL2018) * 100;
var na2 = NAM2018 / NAM2008;
var af1 = (AFR2018 / ALL2018) * 100;
var af2 = AFR2018 / AFR2008;
var as1 = (ASI2018 / ALL2018) * 100;
var as2 = ASI2018 / ASI2008;
var au1 = (AUS2018 / ALL2018) * 100;
var au2 = AUS2018 / AUS2008;
console.log("Die Emission weltweit ist: " + ALL2018, " kg CO2");
function europe() {
    console.log("Die Emission von Europa ist:, " + EUR2018, " kg CO2. Relativ zur Gesamtemission der Welt verursacht Europa damit, " + (EUR2018 / ALL2018) * 100, "%. Für Europa hat sich 2018 im Vergleich zu 2008 die Emission um " + EUR2018 / EUR2008, "% verändert. 2018 im Vergleich zu 2008 sind das " + difeur, " kg CO2");
    document.querySelector(".title").innerHTML = "Carbon Dioxide Emissions in Europe";
    document.querySelector(".absoluteContinent").innerHTML = "Emission absolute of Europe in 2018";
    document.querySelector(".absoluteEmission").innerHTML = EUR2018 + "";
    document.querySelector(".relativePercentage").innerHTML = eu1.toFixed(2) + "%" + "";
    document.querySelector(".growthPercentage").innerHTML = eu2.toFixed(2) + "%" + "";
    document.querySelector(".growthEmission").innerHTML = difeur.toFixed(2) + "kg" + "";
    document.querySelector(".chart").setAttribute("style", "height:" + (EUR2018 / ALL2018) * 100 + "%");
}
window.addEventListener('load', function () {
    document.querySelector(".europe").addEventListener('click', europe);
});
function southamerica() {
    console.log("Die Emission von Südamerika ist:, " + SAM2018, " kg CO2. Relativ zur Gesamtemission der Welt verursacht Südamerika damit, " + (SAM2018 / ALL2018) * 100, "%. Für Südamerika hat sich 2018 im Vergleich zu 2008 die Emission um " + SAM2018 / SAM2008, "% verändert. 2018 im Vergleich zu 2008 sind das " + difsam, " kg CO2");
    document.querySelector(".title").innerHTML = "Carbon Dioxide Emissions in Southamerica";
    document.querySelector(".absoluteContinent").innerHTML = "Emission absolute of Southamerica in 2018";
    document.querySelector(".absoluteEmission").innerHTML = SAM2018 + "";
    document.querySelector(".relativePercentage").innerHTML = sa1.toFixed(2) + "%" + "";
    document.querySelector(".growthPercentage").innerHTML = sa2.toFixed(2) + "%" + "";
    document.querySelector(".growthEmission").innerHTML = difsam.toFixed(2) + "kg" + "";
    document.querySelector(".chart").setAttribute("style", "height:" + (SAM2018 / ALL2018) * 100 + "%");
}
window.addEventListener('load', function () {
    document.querySelector(".southamerica").addEventListener('click', southamerica);
});
function northamerica() {
    console.log("Die Emission von Nordamerika ist:, " + NAM2018, " kg CO2. Relativ zur Gesamtemission der Welt verursacht Nordamerika damit, " + (NAM2018 / ALL2018) * 100, "%. Für Nordamerika hat sich 2018 im Vergleich zu 2008 die Emission um " + NAM2018 / NAM2008, "% verändert. 2018 im Vergleich zu 2008 sind das " + difnam, " kg CO2");
    document.querySelector(".title").innerHTML = "Carbon Dioxide Emissions in Northamerica";
    document.querySelector(".absoluteContinent").innerHTML = "Emission absolute of Northamerica in 2018";
    document.querySelector(".absoluteEmission").innerHTML = NAM2018 + "";
    document.querySelector(".relativePercentage").innerHTML = na1.toFixed(2) + "%" + "";
    document.querySelector(".growthPercentage").innerHTML = na2.toFixed(2) + "%" + "";
    document.querySelector(".growthEmission").innerHTML = difnam.toFixed(2) + "kg" + "";
    document.querySelector(".chart").setAttribute("style", "height:" + (NAM2018 / ALL2018) * 100 + "%");
}
window.addEventListener('load', function () {
    document.querySelector(".northamerica").addEventListener('click', northamerica);
});
function africa() {
    console.log("Die Emission von Afrika ist:, " + AFR2018, " kg CO2. Relativ zur Gesamtemission der Welt verursacht Afrika damit, " + (AFR2018 / ALL2018) * 100, "%. Für Afrika hat sich 2018 im Vergleich zu 2008 die Emission um " + AFR2018 / AFR2008, "% verändert. 2018 im Vergleich zu 2008 sind das " + difafr, " kg CO2");
    document.querySelector(".title").innerHTML = "Carbon Dioxide Emissions in Africa";
    document.querySelector(".absoluteContinent").innerHTML = "Emission absolute of Africa in 2018";
    document.querySelector(".absoluteEmission").innerHTML = AFR2018 + "";
    document.querySelector(".relativePercentage").innerHTML = af1.toFixed(2) + "%" + "";
    document.querySelector(".growthPercentage").innerHTML = af2.toFixed(2) + "%" + "";
    document.querySelector(".growthEmission").innerHTML = difafr.toFixed(2) + "kg" + "";
    document.querySelector(".chart").setAttribute("style", "height:" + (AFR2018 / ALL2018) * 100 + "%");
}
window.addEventListener('load', function () {
    document.querySelector(".africa").addEventListener('click', africa);
});
function asia() {
    console.log("Die Emission von Asien ist:, " + ASI2018, " kg CO2. Relativ zur Gesamtemission der Welt verursacht Asien damit, " + (ASI2018 / ALL2018) * 100, "%. Für Asien hat sich 2018 im Vergleich zu 2008 die Emission um " + ASI2018 / ASI2008, "% verändert. 2018 im Vergleich zu 2008 sind das " + difasi, " kg CO2");
    document.querySelector(".title").innerHTML = "Carbon Dioxide Emissions in Asia";
    document.querySelector(".absoluteContinent").innerHTML = "Emission absolute of Asia in 2018";
    document.querySelector(".absoluteEmission").innerHTML = ASI2018 + "";
    document.querySelector(".relativePercentage").innerHTML = as1.toFixed(2) + "%" + "";
    document.querySelector(".growthPercentage").innerHTML = as2.toFixed(2) + "%" + "";
    document.querySelector(".growthEmission").innerHTML = difasi.toFixed(2) + "kg" + "";
    document.querySelector(".chart").setAttribute("style", "height:" + (ASI2018 / ALL2018) * 100 + "%");
}
window.addEventListener('load', function () {
    document.querySelector(".asia").addEventListener('click', asia);
});
function australia() {
    console.log("Die Emission von Australien ist:, " + AUS2018, " kg CO2. Relativ zur Gesamtemission der Welt verursacht Australien damit, " + (AUS2018 / ALL2018) * 100, "%. Für Australien hat sich 2018 im Vergleich zu 2008 die Emission um " + AUS2018 / AUS2008, "% verändert. 2018 im Vergleich zu 2008 sind das " + difaus, " kg CO2");
    document.querySelector(".title").innerHTML = "Carbon Dioxide Emissions in Australia";
    document.querySelector(".absoluteContinent").innerHTML = "Emission absolute of Australia in 2018";
    document.querySelector(".absoluteEmission").innerHTML = AUS2018 + "";
    document.querySelector(".relativePercentage").innerHTML = au1.toFixed(2) + "%" + "";
    document.querySelector(".growthPercentage").innerHTML = au2.toFixed(2) + "%" + "";
    document.querySelector(".growthEmission").innerHTML = difaus.toFixed(2) + "kg" + "";
    document.querySelector(".chart").setAttribute("style", "height:" + (AUS2018 / ALL2018) * 100 + "%");
}
window.addEventListener('load', function () {
    document.querySelector(".australia").addEventListener('click', australia);
});
//# sourceMappingURL=main.js.map
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
var eu = "Europe";
var eu1 = (EUR2018 / ALL2018) * 100;
var eu2 = EUR2018 / EUR2008;
var sa = "Southamerica";
var sa1 = (SAM2018 / ALL2018) * 100;
var sa2 = SAM2018 / SAM2008;
var na = "Northamerica";
var na1 = (NAM2018 / ALL2018) * 100;
var na2 = NAM2018 / NAM2008;
var af = "Africa";
var af1 = (AFR2018 / ALL2018) * 100;
var af2 = AFR2018 / AFR2008;
var as = "Asia";
var as1 = (ASI2018 / ALL2018) * 100;
var as2 = ASI2018 / ASI2008;
var au = "Australia";
var au1 = (AUS2018 / ALL2018) * 100;
var au2 = AUS2018 / AUS2008;
console.log("Die Emission weltweit ist: " + ALL2018, " kg CO2");
document.querySelector(".europe").addEventListener("click", function () {
    dataOfCountries(eu, EUR2018, eu1.toFixed(2), eu2.toFixed(2), difeur.toFixed(2), (EUR2018 / ALL2018) * 100);
});
document.querySelector(".southamerica").addEventListener("click", function () {
    dataOfCountries(sa, SAM2018, sa1.toFixed(2), sa2.toFixed(2), difsam.toFixed(2), (SAM2018 / ALL2018) * 100);
});
document.querySelector(".northamerica").addEventListener("click", function () {
    dataOfCountries(na, NAM2018, na1.toFixed(2), na2.toFixed(2), difnam.toFixed(2), (NAM2018 / ALL2018) * 100);
});
document.querySelector(".africa").addEventListener("click", function () {
    dataOfCountries(af, AFR2018, af1.toFixed(2), af2.toFixed(2), difafr.toFixed(2), (AFR2018 / ALL2018) * 100);
});
document.querySelector(".asia").addEventListener("click", function () {
    dataOfCountries(as, ASI2018, as1.toFixed(2), as2.toFixed(2), difasi.toFixed(2), (ASI2018 / ALL2018) * 100);
});
document.querySelector(".australia").addEventListener("click", function () {
    dataOfCountries(au, AUS2018, au1.toFixed(2), au2.toFixed(2), difaus.toFixed(2), (AUS2018 / ALL2018) * 100);
});
function dataOfCountries(Countryname, absEm, relPer, groPer, groEm, chart) {
    console.log("Die Emission von Südamerika ist:, " + SAM2018, " kg CO2. Relativ zur Gesamtemission der Welt verursacht Südamerika damit, " + (SAM2018 / ALL2018) * 100, "%. Für Südamerika hat sich 2018 im Vergleich zu 2008 die Emission um " + SAM2018 / SAM2008, "% verändert. 2018 im Vergleich zu 2008 sind das " + difsam, " kg CO2");
    document.querySelector(".title").innerHTML = "Carbon Dioxide Emissions in " + Countryname;
    document.querySelector(".absoluteContinent").innerHTML = "Emission absolute of " + Countryname;
    "in 2018";
    document.querySelector(".absoluteEmission").innerHTML = absEm + "";
    document.querySelector(".relativePercentage").innerHTML = relPer + "%" + "";
    document.querySelector(".growthPercentage").innerHTML = groPer + "%" + "";
    document.querySelector(".growthEmission").innerHTML = groEm + "kg" + "";
    document.querySelector(".chart").setAttribute("style", "height:" + chart + "%");
}
dataOfCountries(eu, EUR2018, eu1.toFixed(2), eu2.toFixed(2), difeur.toFixed(2), (EUR2018 / ALL2018) * 100);
dataOfCountries(sa, SAM2018, sa1.toFixed(2), sa2.toFixed(2), difsam.toFixed(2), (SAM2018 / ALL2018) * 100);
dataOfCountries(na, NAM2018, na1.toFixed(2), na2.toFixed(2), difnam.toFixed(2), (NAM2018 / ALL2018) * 100);
dataOfCountries(af, AFR2018, af1.toFixed(2), af2.toFixed(2), difafr.toFixed(2), (AFR2018 / ALL2018) * 100);
dataOfCountries(as, ASI2018, as1.toFixed(2), as2.toFixed(2), difasi.toFixed(2), (ASI2018 / ALL2018) * 100);
dataOfCountries(au, AUS2018, au1.toFixed(2), au2.toFixed(2), difaus.toFixed(2), (AUS2018 / ALL2018) * 100);
//# sourceMappingURL=main.js.map
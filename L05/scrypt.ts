var EUR2008:number= 4965.7;
var EUR2018:number= 4209.3;

var SAM2008:number=  1132.6;
var SAM2018:number= 1261.5;

var NAM2008:number= 6600.4;
var NAM2018:number= 6035.6;

var AFR2008:number= 1028;
var AFR2018:number= 1235.5;

var ASI2008:number= 12954.7;
var ASI2018:number= 16274.1;

var AUS2008:number= 1993;
var AUS2018:number= 2100.5;

var ALL2018:number= EUR2018 + SAM2018 + NAM2018 + AFR2018 + ASI2018 + AUS2018

var difeur:number= EUR2018-EUR2008;
var difsam:number= SAM2018-SAM2008;
var difnam:number= NAM2018-NAM2008;
var difafr:number= AFR2018-AFR2008;
var difasi:number= ASI2018-ASI2008;
var difaus:number= AUS2018-AUS2008;

console.log("Die Emission weltweit ist: "+ ALL2018, " kg CO2")

console.log("Die Emission von Europa ist: "+ EUR2018," kg CO2");
console.log("Relativ zur Gesamtemission der Welt verursacht Europa damit "+ (EUR2018/ALL2018)*100, "%");
console.log("Für Europa hat sich 2018 im Vergleich zu 2008 die Emission um "+ EUR2018/EUR2008, "% verändert");
console.log("2018 im Vergleich zu 2008 sind das "+ difeur, " kg CO2");

console.log("Die Emission von Südamerika ist: "+ SAM2018," kg CO2");
console.log("Relativ zur Gesamtemission der Welt verursacht Südamerika damit "+ (SAM2018/ALL2018)*100, "%");
console.log("Für Südamerika hat sich 2018 im Vergleich zu 2008 die Emission um "+ SAM2018/SAM2008, "% verändert");
console.log("2018 im Vergleich zu 2008 sind das "+ difsam, " kg CO2");

console.log("Die Emission von Nordamerika ist: "+ NAM2018," kg CO2");
console.log("Relativ zur Gesamtemission der Welt verursacht Nordamerika damit "+ (NAM2018/ALL2018)*100, "%");
console.log("Für Nordamerika hat sich 2018 im Vergleich zu 2008 die Emission um "+ NAM2018/NAM2008, "% verändert");
console.log("2018 im Vergleich zu 2008 sind das "+ difnam, " kg CO2");

console.log("Die Emission von Afrika ist: "+ AFR2018," kg CO2");
console.log("Relativ zur Gesamtemission der Welt verursacht Afrika damit "+ (AFR2018/ALL2018)*100, "%");
console.log("Für Afrika hat sich 2018 im Vergleich zu 2008 die Emission um "+ NAM2018/NAM2008, "% verändert");
console.log("2018 im Vergleich zu 2008 sind das "+ difafr, " kg CO2");

console.log("Die Emission von Asien ist: "+ ASI2018," kg CO2");
console.log("Relativ zur Gesamtemission der Welt verursacht Asien damit "+ (ASI2018/ALL2018)*100, "%");
console.log("Für Asien hat sich 2018 im Vergleich zu 2008 die Emission um "+ ASI2018/ASI2008, "% verändert");
console.log("2018 im Vergleich zu 2008 sind das "+ difasi, " kg CO2");

console.log("Die Emission von Australien ist: "+ AUS2018," kg CO2");
console.log("Relativ zur Gesamtemission der Welt verursacht Australien damit "+ (AUS2018/ALL2018)*100, "%");
console.log("Für Australien hat sich 2018 im Vergleich zu 2008 die Emission um "+ AUS2018/AUS2008, "% verändert");
console.log("2018 im Vergleich zu 2008 sind das "+ difaus, " kg CO2");
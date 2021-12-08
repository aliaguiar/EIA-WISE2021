//Sounds
var sound1 = new Audio("assets/hihat.mp3");
var sound2 = new Audio("assets/kick.mp3");
var sound3 = new Audio("assets/snare.mp3");
var sound4 = new Audio("assets/A.mp3");
var sound5 = new Audio("assets/C.mp3");
var sound6 = new Audio("assets/F.mp3");
var sound7 = new Audio("assets/G.mp3");
var sound8 = new Audio("assets/laugh-1.mp3");
var sound9 = new Audio("assets/laugh-2.mp3");
var sounds = ["assets/hihat.mp3", "assets/kick.mp3", "assets/snare.mp3", "assets/A.mp3", "assets/C.mp3", "assets/F.mp3", "assets/G.mp3", "assets/laugh-1.mp3", "assets/laugh-2.mp3"];
var beat = [sound2, sound2, sound3];
var poof;
var num;
//Funktion 7.1 Button
function playSample(sound) {
    sound.play();
    console.log("sound");
}
document.querySelector("#box1").addEventListener("mousedown", function () { playSample(sound1); });
document.querySelector("#box2").addEventListener("mousedown", function () { playSample(sound2); });
document.querySelector("#box3").addEventListener("mousedown", function () { playSample(sound3); });
document.querySelector("#box4").addEventListener("mousedown", function () { playSample(sound4); });
document.querySelector("#box5").addEventListener("mousedown", function () { playSample(sound5); });
document.querySelector("#box6").addEventListener("mousedown", function () { playSample(sound6); });
document.querySelector("#box7").addEventListener("mousedown", function () { playSample(sound7); });
document.querySelector("#box8").addEventListener("mousedown", function () { playSample(sound8); });
document.querySelector("#box9").addEventListener("mousedown", function () { playSample(sound9); });
//Intervall (Aufgabe 7.2)
var laufzahl = 0;
function playBeat() {
    setInterval(function () {
        beat[laufzahl++].play();
        if (laufzahl == 3) {
            laufzahl = 0;
        }
    }, 500);
}
//Funktion 8.3 Play/Pause
function playwithpause() {
    if (document.querySelector("#play").getAttribute("class") == "fas fa-play") {
        document.querySelector("#play").setAttribute("class", "fas fa-pause");
        poof = setInterval(playBeat, 500);
        console.log("click");
    }
    else {
        document.querySelector("#play").setAttribute("class", "fas fa-play");
        clearInterval(poof);
        console.log("auch Klick");
    }
}
//Funktion 8.6 Remix
function randomsounds() {
    num = setInterval(remix, 500);
}
function remix() {
    for (var i = 0; i <= beat.length; i++) {
    }
}
//Funktion 8.7 Löschen
function deleteBeat() {
    beat.length = 0;
}
//Extra knöpfe
document.querySelector(".fas fa-play").addEventListener("click", function () { playwithpause(); });
//# sourceMappingURL=main.js.map
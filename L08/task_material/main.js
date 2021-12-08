//Sounds
var sounds = [new Audio("assets/hihat.mp3"), new Audio("assets/kick.mp3"), new Audio("assets/snare.mp3"), new Audio("assets/A.mp3"), new Audio("assets/C.mp3"), new Audio("assets/F.mp3"), new Audio("assets/G.mp3"), new Audio("assets/laugh-1.mp3"), new Audio("assets/laugh-2.mp3")];
var beat = [sounds[1], sounds[1], sounds[2]];
var poof;
var num;
//Funktion 7.1 Button
function playSample(sound) {
    sound.play();
    console.log("sound");
}
document.querySelector("#box1").addEventListener("mousedown", function () { playSample(sounds[0]); });
document.querySelector("#box2").addEventListener("mousedown", function () { playSample(sounds[1]); });
document.querySelector("#box3").addEventListener("mousedown", function () { playSample(sounds[2]); });
document.querySelector("#box4").addEventListener("mousedown", function () { playSample(sounds[3]); });
document.querySelector("#box5").addEventListener("mousedown", function () { playSample(sounds[4]); });
document.querySelector("#box6").addEventListener("mousedown", function () { playSample(sounds[5]); });
document.querySelector("#box7").addEventListener("mousedown", function () { playSample(sounds[6]); });
document.querySelector("#box8").addEventListener("mousedown", function () { playSample(sounds[7]); });
document.querySelector("#box9").addEventListener("mousedown", function () { playSample(sounds[8]); });
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
// tslint:disable-next-line: typedef
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
    num = setInterval(startremix, 500);
    function startremix() {
        for (var i = 0; i <= beat.length; i++) {
            const random = Math.floor(Math.random() * 5);
            playSample(sounds[random]);
        }
    }
}
//Funktion 8.7 Löschen
function deleteBeat() {
    beat.length = 0;
}
//Extra knöpfe
document.querySelector(".fas fa-play").addEventListener("click", function () { playwithpause(); });
//# sourceMappingURL=main.js.map
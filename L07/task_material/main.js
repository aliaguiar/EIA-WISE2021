var L07;
(function (L07) {
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
    var beat = [sound4, sound5, sound6, sound7, sound4];
    //Funktion 7.1
    function playSample(sound) {
        sound.play();
        console.log("sound");
    }
    document.querySelector("#box1").addEventListener('click', function () { playSample(sound1); });
    document.querySelector("#box2").addEventListener('click', function () { playSample(sound2); });
    document.querySelector("#box3").addEventListener('click', function () { playSample(sound3); });
    document.querySelector("#box4").addEventListener('click', function () { playSample(sound4); });
    document.querySelector("#box5").addEventListener('click', function () { playSample(sound5); });
    document.querySelector("#box6").addEventListener('click', function () { playSample(sound6); });
    document.querySelector("#box7").addEventListener('click', function () { playSample(sound7); });
    document.querySelector("#box8").addEventListener('click', function () { playSample(sound8); });
    document.querySelector("#box9").addEventListener('click', function () { playSample(sound9); });
    //Funktion 7.2
    var laufzahl = 0;
    function playBeat() {
        setInterval(function () {
            beat[laufzahl++].play();
            if (laufzahl == 4) {
                laufzahl = 0;
            }
        }, 500);
    }
    document.querySelector(".playButton").addEventListener('click', function () { playBeat(); });
})(L07 || (L07 = {}));
//# sourceMappingURL=main.js.map
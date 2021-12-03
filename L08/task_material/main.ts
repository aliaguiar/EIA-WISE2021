namespace L07 {

//Sounds
    var sound1: HTMLAudioElement = new Audio ("assets/hihat.mp3");
    var sound2: HTMLAudioElement = new Audio ("assets/kick.mp3");
    var sound3: HTMLAudioElement = new Audio ("assets/snare.mp3");
    var sound4: HTMLAudioElement = new Audio ("assets/A.mp3");
    var sound5: HTMLAudioElement = new Audio ("assets/C.mp3");
    var sound6: HTMLAudioElement = new Audio ("assets/F.mp3");
    var sound7: HTMLAudioElement = new Audio ("assets/G.mp3");
    var sound8: HTMLAudioElement = new Audio ("assets/laugh-1.mp3");
    var sound9: HTMLAudioElement = new Audio ("assets/laugh-2.mp3");

    var sounds [] = [sound1, sound2, sound3, sound4, sound5, sound6, sound7, sound8, sound9];

    var beat: HTMLAudioElement[] = [sound4, sound5, sound6, sound7, sound4];
    

//Funktion 7.2
    var laufzahl: number = 0;

    function playBeat(): void {
        setInterval(function() {
            beat[laufzahl++].play();
            if (laufzahl == 4) {
                laufzahl = 0;
            }
        },          500 );
    }

    document.querySelector(".playButton").addEventListener("click", function() {playBeat(); });


//Funktion 8.3
    


//Function 8.7

    function deleting() {
        sounds.length = 0;
    }


//Funktion 7.1
    function playSample(sound: HTMLAudioElement): void {
    sound.play();
    console.log("sound");
}

    document.querySelector("#box1").addEventListener("click", function() {playSample(sound1); });
    document.querySelector("#box2").addEventListener("click", function() {playSample(sound2); });
    document.querySelector("#box3").addEventListener("click", function() {playSample(sound3); });
    document.querySelector("#box4").addEventListener("click", function() {playSample(sound4); });
    document.querySelector("#box5").addEventListener("click", function() {playSample(sound5); });
    document.querySelector("#box6").addEventListener("click", function() {playSample(sound6); });
    document.querySelector("#box7").addEventListener("click", function() {playSample(sound7); });
    document.querySelector("#box8").addEventListener("click", function() {playSample(sound8); });
    document.querySelector("#box9").addEventListener("click", function() {playSample(sound9); });

}

namespace L08 {
// tslint:disable: typedef
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

    var key: number = 0;
    var sounds: string [] = ["assets/hihat.mp3", "assets/kick.mp3", "assets/snare.mp3", "assets/A.mp3", "assets/C.mp3", "assets/F.mp3", "assets/G.mp3", "assets/laugh-1.mp3", "assets/laugh-2.mp3"];
    var beat: HTMLAudioElement[] = [sound2, sound2, sound3];
    var play: HTMLElement = document.querySelector("#play");
    var song: HTMLAudioElement = new Audio(beat[key]);
    var recorder = document.querySelector("#record");
    var max = beat.length - 1;
    
    var num: number;

//Funktion 7.1 Button
    function playSample(sound: HTMLAudioElement): void {
        sound.play();
        console.log("sound");
    }
    

    document.querySelector("#box1").addEventListener("mousedown", function() {playSample(sound1); });
    document.querySelector("#box2").addEventListener("mousedown", function() {playSample(sound2); });
    document.querySelector("#box3").addEventListener("mousedown", function() {playSample(sound3); });
    document.querySelector("#box4").addEventListener("mousedown", function() {playSample(sound4); });
    document.querySelector("#box5").addEventListener("mousedown", function() {playSample(sound5); });
    document.querySelector("#box6").addEventListener("mousedown", function() {playSample(sound6); });
    document.querySelector("#box7").addEventListener("mousedown", function() {playSample(sound7); });
    document.querySelector("#box8").addEventListener("mousedown", function() {playSample(sound8); });
    document.querySelector("#box9").addEventListener("mousedown", function() {playSample(sound9); });

//Funktion 7.2 Beat
    var laufzahl: number = 0;

    function playBeat(): void {
        setInterval(function() {
            beat[laufzahl++].play();
            if (laufzahl == 3) {
                laufzahl = 0;
            }
        },          500 );
    }

    document.querySelector("#play").addEventListener("click", function() {playBeat(); });


//Funktion 8.3 Play/Pause
    function playwithpause(): void {
    if (play.getAttribute("class") == "fas fa-pause") {
        play.setAttribute("class", "fas fa-play");
        playBeat();
        

    }
    else {
        play.setAttribute("class", "fas fa-pause");
    
        if (play.getAttribute("class") == "fas fa-play") { song.pause(); }
    }
}

//Funktion 8.6 Remix
    function randomnum(max) {
    max = Math.floor(max);
    return Math.floor(Math.random() * (max + 1));
}
    function remix() {
    for (var i = 0; i <= beat.length; i++) {
        sounds[i] = beat[randomnum(max)];
    }
}


//Funktion 8.7 Löschen
    function deleteBeat(): void {
    beat.length = 0;
  }


}

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


    var sounds: string [] = ["assets/hihat.mp3", "assets/kick.mp3", "assets/snare.mp3", "assets/A.mp3", "assets/C.mp3", "assets/F.mp3", "assets/G.mp3", "assets/laugh-1.mp3", "assets/laugh-2.mp3"];
    var beat: HTMLAudioElement[] = [sound2, sound2, sound3];
    var poof: number;
    
    var num: number;

//Funktion 7.1 Button
    function playSample(sound: HTMLAudioElement): void {
        sound.play();
        console.log("sound");
    }
    

    document.querySelector("#box1").addEventListener("mousedown", function(): void {playSample(sound1); });
    document.querySelector("#box2").addEventListener("mousedown", function(): void {playSample(sound2); });
    document.querySelector("#box3").addEventListener("mousedown", function(): void {playSample(sound3); });
    document.querySelector("#box4").addEventListener("mousedown", function(): void {playSample(sound4); });
    document.querySelector("#box5").addEventListener("mousedown", function(): void {playSample(sound5); });
    document.querySelector("#box6").addEventListener("mousedown", function(): void {playSample(sound6); });
    document.querySelector("#box7").addEventListener("mousedown", function(): void {playSample(sound7); });
    document.querySelector("#box8").addEventListener("mousedown", function(): void {playSample(sound8); });
    document.querySelector("#box9").addEventListener("mousedown", function(): void {playSample(sound9); });


//Intervall (Aufgabe 7.2)
    var laufzahl: number = 0;

    function playBeat(): void {
    setInterval(function(): void {
        beat[laufzahl++].play();
        if (laufzahl == 3) {
            laufzahl = 0;
        }
    },          500 );
}

//Funktion 8.3 Play/Pause
    function playwithpause(): void {
    if (document.querySelector("#play").getAttribute("class") == "fas fa-play") {
        document.querySelector("#play").setAttribute("class", "fas fa-pause");
        poof = setInterval(playBeat, 500);
        console.log("click");
        
        }
        else {document.querySelector("#play").setAttribute("class", "fas fa-play");
              clearInterval(poof);
              console.log("auch Klick"); }
}

//Funktion 8.6 Remix
    function randomsounds(): void {
       num  = setInterval(remix, 500);
    }

    function remix(): void {
    for (var i: number = 0; i <= beat.length; i++) {
        
    }}


//Funktion 8.7 Löschen
    function deleteBeat(): void {
    beat.length = 0;
  }


//Extra knöpfe
    document.querySelector(".fas fa-play").addEventListener("click", function(): void {playwithpause(); });

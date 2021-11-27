namespace L07{

    //Sounds
    var sounds: string[] = [];

    var sound:HTMLAudioElement = new Audio ();
    sound.play();

    var boxes: string[] = [];

    //Funktion 7.1
    function playsounds(){
    document.querySelector("body").style.background = sounds[]; void;

    }
    
    window.addEventListener('load', function(){
    document.querySelector('.box1').addEventListener('click', playsounds);
    });
    
}
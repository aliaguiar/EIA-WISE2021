namespace L10 {
    // tslint:disable-next-line: no-any
    declare var Artyom: any;
    window.addEventListener("load", function(): void {
    
             //Variablen
             //geschriebenes, id und div
    let tasks: HTMLElement = document.getElementById("tasks");
    let input: HTMLInputElement = document.querySelector("#input");
    let listdiv: HTMLDivElement = document.createElement("div");
             //spezifischere counter
    let counter: number = 0;
    let done: number = 0;
    let open: number = 0;
             //textfeld leeren
    listdiv.textContent = "";
    
    document.addEventListener("keydown", (event: KeyboardEvent): void => { 
            if (event.keyCode === 13) { 
                    if (document.querySelector("input").value != "") { newtask(); document.querySelector("input").value = ""; } 
                    else {alert("Add your task first!"); }}});
    
    function newtask(): void {
            //counter jeweils updaten
    counter ++;
    open ++;
    document.querySelector(".total").innerHTML = "Total: " + counter;
    document.querySelector(".open").innerHTML = "Open: " + open; 
    console.log("added task, counter up, open up");
            //Text eingegeben
    let eingabefeldtext: HTMLElement = document.createElement("p");
    eingabefeldtext.innerHTML = input.value;
    eingabefeldtext.className = "eingabefeldtext";
            //lokal deklarieren
    let listdiv: HTMLDivElement = document.createElement("div");
    let tasks: HTMLElement = document.getElementById("tasks");
            //Text in div appenden
    listdiv.appendChild(eingabefeldtext);
            //
    tasks?.appendChild(listdiv);   
    
          //Kindelement appenden
    tasks.appendChild(listdiv);
    
            //haeckchen hinzufügen
    let check: HTMLElement = document.createElement("div");
    check.className = "far fa-square";
            //Haken gehört div zu
    listdiv?.appendChild(check);
            //Hakenclick
    check.addEventListener("click", checkingoff);
            //Funktion checking off/on
    function checkingoff(): void {
        if (check.getAttribute("class") == "far fa-square") {
            check.setAttribute("class", "far fa-check-square"); 
             //mit hakenzustand ändert sich der done/ open status
             //abhaken
            done++; 
            open--;
            document.querySelector(".done").innerHTML = "Done: " + done; 
            document.querySelector(".open").innerHTML = "Open: " + open; 
            console.log("checked finished task");
                }
        else {
            check.setAttribute("class", "far fa-square"); 
             //abhaken rückgängig machen
            done--; 
            open++;
            document.querySelector(".done").innerHTML = "Done: " + done; 
            document.querySelector(".open").innerHTML = "Open: " + open; 
            console.log("unchecked finished task");
        }
    }
    
             //trash hinzufügen
    let trash: HTMLElement = document.createElement("div");
    trash.className = "fas fa-trash";
             //Trashklick
    trash.addEventListener("click", deleter);
             //funktion zum löschen
    function deleter(): void {
                        listdiv.parentElement.removeChild(listdiv);
                        //done/open updaten
                        if (check.getAttribute("class") == "far fa-square") {
                                open--; 
                                document.querySelector(".open").innerHTML = "Open: " + open; 
                                console.log("deleted open task");
                                }
                        else {  done--;
                                document.querySelector(".done").innerHTML = "Done: " + done; 
                                console.log("deleted finished task");
                                }
                        //counter updaten
                        counter--; 
                        document.querySelector(".total").innerHTML = "Total: " + counter;

                    }
             //trash gehört div zu
    listdiv?.appendChild(trash);

    } 

    });

// tslint:disable: no-any
// tslint:disable: typedef

             //nochmal deklarieren weil es nur direkt davor geht
    const artyom: any = new Artyom();
    let input: HTMLInputElement = document.querySelector("#input");
    const mike: HTMLElement = document.querySelector(".fa-microphone");

            //aufnahme anwenden
    mike.addEventListener("click", function(): void {
                if (mike.getAttribute("class") == "fas fa-microphone") {
                        mike.setAttribute("class", "fas fa-microphone-slash");
                        record();
                        console.log("listening");
                } else { 
                        mike.setAttribute("class", "fas fa-microphone");
                        stop();
                        console.log("'not listening'");     
                } 
            });

    artyom.addCommands({
        indexes: ["New task *", "Add * to the list", "Add *", "Write down *", "Enter new task *"],
        smart: true,
        action: function(i, texttospeech) {
                input.value = texttospeech; 
             //warum newtask nicht eingelesen wird, kann ich mir nicht erklären
                newtask();
        }
    });

             //aufnahme starten
    function record() {
        artyom.fatality();
             //Intervall bzw Timeout eonschalten
        setTimeout(
                function() {
                        artyom.initialize({
                                lang: "en-GB",
                                continuous: true,
                                listen: true,
                                interimResults: true,
                                debug: true
                        });
                },
                250);
    }

             //aufnahme beenden
    function stop() {
        artyom.fatality();
    }


}
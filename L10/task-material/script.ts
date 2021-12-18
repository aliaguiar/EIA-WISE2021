namespace L10 {
    // tslint:disable: no-any
    // tslint:disable: typedef
    window.addEventListener("load", function(): void {
    
    //Variablen
    let tasks: HTMLElement = document.getElementById("tasks");
    let input: HTMLInputElement = document.querySelector("#input");
    let listdiv: HTMLDivElement = document.createElement("div");
    let counter: number = 0;
    let done: number = 0;
    let open: number = 0;
    let mike: HTMLElement = document.getElementById("fa-microphone");
    listdiv.textContent = "";
    
    document.addEventListener("keydown", (event: KeyboardEvent): void => { 
            if (event.keyCode === 13) { 
                    if (document.querySelector("input").value != "") { newtask(); document.querySelector("input").value = ""; } 
                    else {alert("Add your task first"); }}});
    
    function newtask(): void {
            //counter jeweils updaten
    counter ++;
    open ++;
    document.querySelector(".total").innerHTML = "Total: " + counter;
    document.querySelector(".open").innerHTML = "Open: " + open; 
    console.log("counter");
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
            document.querySelector(".open").innerHTML = "Open: " + open; }
        else {
            check.setAttribute("class", "far fa-square"); 
            //abhaken rückgängig machen
            done--; 
            open++;
            document.querySelector(".done").innerHTML = "Done: " + done; 
            document.querySelector(".open").innerHTML = "Open: " + open; }
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
                                document.querySelector(".open").innerHTML = "Open: " + open; }
                        else {  done--;
                                document.querySelector(".done").innerHTML = "Done: " + done; }
                        //counter updaten
                        counter--; 
                        document.querySelector(".total").innerHTML = "Total: " + counter;
                    }
    //trash gehört div zu
    listdiv?.appendChild(trash);

    } 

    document.addEventListener("mousedown", startartyom())

    //setzt zuhören in aktion
    function startartyom() {
        artyom.initialize({
                lang: "en-GB",
                continuous: false,
                debug: true,
                listen: true
        });
    }
    
    }); }
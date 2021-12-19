var L10;
(function (L10) {
    window.addEventListener("load", function () {
        //Variablen
        //geschriebenes, id und div
        let tasks = document.getElementById("tasks");
        let input = document.querySelector("#input");
        let listdiv = document.createElement("div");
        //spezifischere counter
        let counter = 0;
        let done = 0;
        let open = 0;
        //textfeld leeren
        listdiv.textContent = "";
        document.addEventListener("keydown", (event) => {
            if (event.keyCode === 13) {
                if (document.querySelector("input").value != "") {
                    newtask();
                    document.querySelector("input").value = "";
                }
                else {
                    alert("Add your task first!");
                }
            }
        });
        function newtask() {
            //counter jeweils updaten
            counter++;
            open++;
            document.querySelector(".total").innerHTML = "Total: " + counter;
            document.querySelector(".open").innerHTML = "Open: " + open;
            console.log("added task, counter up, open up");
            //Text eingegeben
            let eingabefeldtext = document.createElement("p");
            eingabefeldtext.innerHTML = input.value;
            eingabefeldtext.className = "eingabefeldtext";
            //lokal deklarieren
            let listdiv = document.createElement("div");
            let tasks = document.getElementById("tasks");
            //Text in div appenden
            listdiv.appendChild(eingabefeldtext);
            //
            tasks?.appendChild(listdiv);
            //Kindelement appenden
            tasks.appendChild(listdiv);
            //haeckchen hinzufügen
            let check = document.createElement("div");
            check.className = "far fa-square";
            //Haken gehört div zu
            listdiv?.appendChild(check);
            //Hakenclick
            check.addEventListener("click", checkingoff);
            //Funktion checking off/on
            function checkingoff() {
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
            let trash = document.createElement("div");
            trash.className = "fas fa-trash";
            //Trashklick
            trash.addEventListener("click", deleter);
            //funktion zum löschen
            function deleter() {
                listdiv.parentElement.removeChild(listdiv);
                //done/open updaten
                if (check.getAttribute("class") == "far fa-square") {
                    open--;
                    document.querySelector(".open").innerHTML = "Open: " + open;
                    console.log("deleted open task");
                }
                else {
                    done--;
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
    const artyom = new Artyom();
    let input = document.querySelector("#input");
    const mike = document.querySelector(".fa-microphone");
    artyom.addCommands({
        indexes: ["New task *", "Add * to the list", "Add *", "Write down *", "Enter new task *"],
        smart: true,
        action: function (i, texttospeech) {
            input.value = texttospeech;
            //warum newtask nicht eingelesen wird, kann ich mir nicht erklären
            newtask();
        }
    });
    //aufnahme starten
    function record() {
        artyom.fatality();
        //Intervall bzw Timeout eonschalten
        setTimeout(function () {
            artyom.initialize({
                lang: "en-GB",
                continuous: true,
                listen: true,
                interimResults: true,
                debug: true
            });
        }, 250);
    }
    //aufnahme beenden
    function stop() {
        artyom.fatality();
    }
    //aufnahme anwenden
    mike.addEventListener("click", function () {
        if (mike.getAttribute("class") == "fas fa-microphone") {
            mike.setAttribute("class", "fas fa-microphone-slash");
            record();
        }
        else {
            mike.setAttribute("class", "fas fa-microphone");
            stop();
        }
    });
})(L10 || (L10 = {}));
//# sourceMappingURL=script.js.map
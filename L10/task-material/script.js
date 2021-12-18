var L10;
(function (L10) {
    // tslint:disable: no-any
    // tslint:disable: typedef
    window.addEventListener("load", function () {
        //Variablen
        let tasks = document.getElementById("tasks");
        let input = document.querySelector("#input");
        let listdiv = document.createElement("div");
        let counter = 0;
        let done = 0;
        let open = 0;
        let mike = document.getElementById("fa-microphone");
        listdiv.textContent = "";
        document.addEventListener("keydown", (event) => {
            if (event.keyCode === 13) {
                if (document.querySelector("input").value != "") {
                    newtask();
                    document.querySelector("input").value = "";
                }
                else {
                    alert("Add your task first");
                }
            }
        });
        function newtask() {
            //counter jeweils updaten
            counter++;
            open++;
            document.querySelector(".total").innerHTML = "Total: " + counter;
            document.querySelector(".open").innerHTML = "Open: " + open;
            console.log("counter");
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
                }
                else {
                    check.setAttribute("class", "far fa-square");
                    //abhaken rückgängig machen
                    done--;
                    open++;
                    document.querySelector(".done").innerHTML = "Done: " + done;
                    document.querySelector(".open").innerHTML = "Open: " + open;
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
                }
                else {
                    done--;
                    document.querySelector(".done").innerHTML = "Done: " + done;
                }
                //counter updaten
                counter--;
                document.querySelector(".total").innerHTML = "Total: " + counter;
            }
            //trash gehört div zu
            listdiv?.appendChild(trash);
        }
        document.addEventListener("mousedown", startartyom());
        //setzt zuhören in aktion
        function startartyom() {
            artyom.initialize({
                lang: "en-GB",
                continuous: false,
                debug: true,
                listen: true
            });
        }
    });
})(L10 || (L10 = {}));
//# sourceMappingURL=script.js.map
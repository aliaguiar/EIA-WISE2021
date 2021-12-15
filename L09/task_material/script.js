var L09;
(function (L09) {
    window.addEventListener("load", function () {
        //Variablen
        let tasks = document.getElementById("tasks");
        let input = document.querySelector("#input");
        let listdiv = document.createElement("div");
        let counter = 0;
        listdiv.textContent = "";
        //Kindelement appenden
        tasks.appendChild(listdiv);
        //haeckchen hinzufügen
        let check = document.createElement("div");
        check.className = "far fa-check-square";
        let index;
        //Haken gehört div zu
        listdiv?.appendChild(check);
        //Hakenclick
        check.addEventListener("click", checkingoff);
        //Funktion checking off/on
        function checkingoff() {
            if (check.getAttribute("class") == "far fa-check-square") {
                check.setAttribute("class", "far fa-square");
            }
            else {
                check.setAttribute("class", "far fa-check-square");
            }
        }
        //trash hinzufügen
        let trash = document.createElement("div");
        trash.className = "fas fa-trash";
        //trash gehört div zu
        listdiv?.appendChild(trash);
        //Trashklick
        trash.addEventListener("click", deleter);
        //funktion zum löschen
        function deleter() {
            listdiv.parentElement.removeChild(listdiv);
            counter--;
            document.querySelector(".total").innerHTML = "Task(s) total: " + counter;
        }
        function newtask() {
            //counter jeweils updaten
            counter++;
            document.querySelector(".total").innerHTML = "Task(s) total: " + counter;
            console.log("counter");
            //Text eingegeben
            let eingabefeldtext = document.createElement("p");
            eingabefeldtext.innerHTML = input.value;
            eingabefeldtext.className = "eingabefeldtext";
            input.value = "";
            //lokal deklarieren
            let listdiv = document.createElement("div");
            let tasks = document.getElementById("tasks");
            //Text in div appenden
            listdiv.appendChild(eingabefeldtext);
            //
            tasks?.appendChild(listdiv);
        }
        //Buttondruck
        document.querySelector("#addtaskbutton").addEventListener("click", newtask);
    });
})(L09 || (L09 = {}));
//# sourceMappingURL=script.js.map
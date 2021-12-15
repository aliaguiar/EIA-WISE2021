var L09;
(function (L09) {
    window.addEventListener("load", function () {
        //Variablen
        let tasks = document.getElementById("tasks");
        let input = document.querySelector("#input");
        let listdiv = document.createElement("div");
        let counter = 0;
        listdiv.textContent = "";
        /*document.addEventListener("keydown", function (event: KeyboardEvent): void { if (event.keyCode === 13) { if (document.querySelector("input").value != "") { newtask(); document.querySelector("input").value = ""; }
                         else {alert("Add a new task first!"); }}});
                         */
        document.querySelector("input").addEventListener("keydown", (event) => { if (event.keyCode === 13) {
            if (document.querySelector("input").value != "") {
                createTask();
                document.querySelector("input").value = "";
            }
            else {
                alert("Error 420: Input must not be empty!");
            }
        } });
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
            //Kindelement appenden
            tasks.appendChild(listdiv);
            //haeckchen hinzufügen
            let check = document.createElement("div");
            check.className = "far fa-check-square";
            //Haken gehört div zu
            listdiv?.appendChild(check);
            //Hakenclick
            check.addEventListener("click", checkingoff);
            //Funktion checking off/on
            function checkingoff() {
                if (check.getAttribute("class") == "far fa-square") {
                    check.setAttribute("class", "far fa-check-square");
                }
                else {
                    check.setAttribute("class", "far fa-square");
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
                counter--;
                document.querySelector(".total").innerHTML = "Task(s) total: " + counter;
            }
            //trash gehört div zu
            listdiv?.appendChild(trash);
        }
        //Buttondruck
        document.querySelector("#addtaskbutton").addEventListener("click", newtask);
        if (document.querySelector("input").value != "") {
            newtask();
            document.querySelector("input").value = "";
        }
        else {
            alert("Error 420: Input must not be empty!");
        }
        ;
    });
})(L09 || (L09 = {}));
/*
// Bei Klick auf Plus mit leererm Input.Value wird ein Alert ausgelöst
if (document.querySelector("input").value == "") {
       counter--;
       document.querySelector(".total").innerHTML = "Task(s) total: " + counter;
       newtask(); document.querySelector("input").value = "";}
       else {alert ("Add a new task first!"); }
}
*/ 
//# sourceMappingURL=script.js.map
var L09;
(function (L09) {
    //Variablen
    let tasks = document.getElementById("tasks");
    let input = document.querySelector("#input");
    let listdiv = document.createElement("div");
    let counter = 0;
    listdiv.textContent = "";
    //Kindelement appenden
    tasks.appendChild(listdiv);
    //Buttondruck
    document.querySelector("#addtaskbutton").addEventListener("click", newtask);
    //neues <p> Element in HTML hinzufügen
    function newtask() {
        //counter jeweils updaten
        counter++;
        document.querySelector(".total").innerHTML = "Task(s) total: " + counter;
        //Text eingegeben
        let eingabefeldtext = document.createElement("p");
        console.log("something");
        eingabefeldtext.innerHTML = input.value;
        eingabefeldtext.className = "eingabefeldtext";
        input.value = "";
        //lokal deklarieren
        let listdiv = document.createElement("div");
        //Text in div appenden
        listdiv.appendChild(eingabefeldtext);
        //haeckchen appenden
        let check = document.createElement("div");
        check.className = "far fa-check-square";
    }
})(L09 || (L09 = {}));
//# sourceMappingURL=script.js.map
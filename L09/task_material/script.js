var L09;
(function (L09) {
    //Variablen
    const attachedtasks = document.getElementById("attachedtasks");
    const p = document.createElement("p");
    let input = document.querySelector("#input");
    let eingabefeldtext = document.createElement("p");
    const listdiv = document.createElement("div");
    let counter = 0;
    //Kindelement appenden
    attachedtasks.appendChild(listdiv);
    //Buttondruck
    document.querySelector("#addtaskbutton").addEventListener("click", newtask);
    //neues <p> Element in HTML hinzufügen
    function newtask() {
        //counter jeweils updaten
        counter++;
        document.querySelector(".total").innerHTML = "Task(s) total: " + counter;
        //Text eingegeben
        console.log("something");
        p.textContent = input.value;
        //div machen
        attachedtasks?.appendChild(p);
        //Text in div appenden
        listdiv.appendChild(eingabefeldtext);
        //haeckchen appenden
        let check = document.createElement("div");
        check.className = "far fa-check-square";
    }
})(L09 || (L09 = {}));
//# sourceMappingURL=script.js.map
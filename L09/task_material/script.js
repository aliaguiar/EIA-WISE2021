var L09;
(function (L09) {
    //Variablen
    const attachedtasks = document.getElementById("attachedtasks");
    const p = document.createElement("p");
    const check = document.createElement("checkmark");
    let input = document.querySelector("#input");
    let eingabefeldtext;
    const trash = document.createElement("button");
    const listdiv = document.createElement("div");
    let counter = 0;
    //Buttondruck
    document.querySelector("#addtaskbutton").addEventListener("click", function () { newtask(); });
    //neues <p> Element in HTML hinzufügen
    function newtask() {
        console.log("something");
        p.textContent = input.value;
        attachedtasks.appendChild(p);
        counter++;
    }
    //Eingabefeld-text für newtask
    function newtext() {
        if (input.value != "")
            eingabefeldtext = input.value;
        input.value = "";
    }
    //newtask in div "attachedtasks" einfügen
    p.addEventListener("click", complete);
    attachedtasks?.appendChild(p);
    function complete() {
        console.log("anything");
    }
    //löschbutton
    trash.innerHTML = "<i class= 'fas minus-square'> </i>";
    trash.classList.add("trash");
    listdiv.appendChild(trash);
    //Task löschen
    function deletetask() {
        input.value = "";
        counter--;
    }
    //todo counter
    function count() {
        document.querySelector(".total").innerHTML = "Task(s) total: " + "counter";
    }
})(L09 || (L09 = {}));
//# sourceMappingURL=script.js.map
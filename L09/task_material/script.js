var L09;
(function (L09) {
    //Variablen
    const attachedtasks = document.getElementById("attachedtasks");
    const p = document.createElement("p");
    let input = document.querySelector("#input");
    let eingabefeldtext;
    //Buttondruck
    document.querySelector("#addtaskbutton").addEventListener("click", function () { newtask(); });
    //neues <p> Element in HTML hinzufügen
    function newtask() {
        console.log("something");
        p.textContent = input.value;
        attachedtasks.appendChild(p);
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
    //
})(L09 || (L09 = {}));
//# sourceMappingURL=script.js.map
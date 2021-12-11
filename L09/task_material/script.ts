namespace L09 {

//Variablen
const attachedtasks: HTMLElement = document.getElementById("attachedtasks");
const p: HTMLParagraphElement = document.createElement("p");
let input: HTMLInputElement = document.querySelector("#input");
let eingabefeldtext: string;

//Buttondruck
document.querySelector("#addtaskbutton").addEventListener("click", function(): void { newtask(); });

//neues <p> Element in HTML hinzufügen
function newtask(): void {
    console.log("something");
    p.textContent = input.value;
    attachedtasks.appendChild(p);
}
//Eingabefeld-text für newtask
function newtext(): void {
    if (input.value != "") eingabefeldtext = input.value;
    input.value = "";
}
//newtask in div "attachedtasks" einfügen
p.addEventListener("click", complete);
attachedtasks?.appendChild(p);
function complete(): void {
        console.log("anything");
    }

//


}
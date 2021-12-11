namespace L09 {

//Variablen
const attachedtasks: HTMLElement = document.getElementById("attachedtasks");
const p: HTMLParagraphElement = document.createElement("p");
const check: HTMLElement = document.createElement("checkmark");
let input: HTMLInputElement = document.querySelector("#input");
let eingabefeldtext: string;
const trash: HTMLButtonElement = document.createElement("button");
const listdiv: HTMLDivElement = document.createElement("div");

let counter: number = 0;


//Buttondruck
document.querySelector("#addtaskbutton").addEventListener("click", function(): void { newtask(); });

//neues <p> Element in HTML hinzufügen
function newtask(): void {
    console.log("something");
    p.textContent = input.value;
    attachedtasks.appendChild(p);
    counter ++;
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

//löschbutton
trash.innerHTML = "<i class= 'fas minus-square'> </i>";
trash.classList.add("trash");
listdiv.appendChild(trash);

//Task löschen
function deletetask(): void {
    input.value = "";
    counter --;
}

//todo counter
function count(): void {
    document.querySelector(".total").innerHTML = "Task(s) total: " + "counter";
}

}
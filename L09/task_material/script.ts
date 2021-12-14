namespace L09 {

//Variablen
const attachedtasks: HTMLElement = document.getElementById("attachedtasks");
const p: HTMLParagraphElement = document.createElement("p");
let input: HTMLInputElement = document.querySelector("#input");
let eingabefeldtext: HTMLElement = document.createElement("p");
const listdiv: HTMLDivElement = document.createElement("div");
let counter: number = 0;

//Kindelement appenden
attachedtasks.appendChild(listdiv);

//Buttondruck
document.querySelector("#addtaskbutton").addEventListener("click", newtask);

//neues <p> Element in HTML hinzufügen
function newtask(): void {
    //counter jeweils updaten
    counter ++;
    document.querySelector(".total").innerHTML = "Task(s) total: " + counter;
    //Text eingegeben
    console.log("something");
    p.textContent = input.value;
        //div machen
    attachedtasks?.appendChild(p);
        //Text in div appenden
    listdiv.appendChild(eingabefeldtext);
        //haeckchen appenden
    let check: HTMLElement = document.createElement("div");
    check.className = "far fa-check-square";
}
  
    


}
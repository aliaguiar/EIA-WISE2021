namespace L09 {

//Variablen
let tasks: HTMLElement = document.getElementById("tasks");
let input: HTMLInputElement = document.querySelector("#input");
let listdiv: HTMLDivElement = document.createElement("div");
let counter: number = 0;
listdiv.textContent = "";

//Kindelement appenden
tasks.appendChild(listdiv);

//Buttondruck
document.querySelector("#addtaskbutton").addEventListener("click", newtask);

//neues <p> Element in HTML hinzufügen
function newtask(): void {
        //counter jeweils updaten
    counter ++;
    document.querySelector(".total").innerHTML = "Task(s) total: " + counter;
        //Text eingegeben
    let eingabefeldtext: HTMLElement = document.createElement("p");
    console.log("something");
    eingabefeldtext.innerHTML = input.value;
    eingabefeldtext.className = "eingabefeldtext";
    input.value = "";
        //lokal deklarieren
    let listdiv: HTMLDivElement = document.createElement("div");
        //Text in div appenden
    listdiv.appendChild(eingabefeldtext);
        //haeckchen appenden
    let check: HTMLElement = document.createElement("div");
    check.className = "far fa-check-square";
}
  
    


}
namespace L09 {
window.addEventListener("load", function(): void {

//Variablen
let tasks: HTMLElement = document.getElementById("tasks");
let input: HTMLInputElement = document.querySelector("#input");
let listdiv: HTMLDivElement = document.createElement("div");
let counter: number = 0;
listdiv.textContent = "";

document.addEventListener("keydown", (event: KeyboardEvent): void => { 
        if (event.keyCode === 13) { 
                if (document.querySelector("input").value != "") { newtask(); document.querySelector("input").value = ""; } 
                else {alert("Add your task first!!!"); }}});

function newtask(): void {
        //counter jeweils updaten
counter ++;
document.querySelector(".total").innerHTML = "Task(s) total: " + counter;
console.log("counter");
        //Text eingegeben
let eingabefeldtext: HTMLElement = document.createElement("p");
eingabefeldtext.innerHTML = input.value;
eingabefeldtext.className = "eingabefeldtext";


        //lokal deklarieren
let listdiv: HTMLDivElement = document.createElement("div");
let tasks: HTMLElement = document.getElementById("tasks");
        //Text in div appenden
listdiv.appendChild(eingabefeldtext);
        //
tasks?.appendChild(listdiv);   

      //Kindelement appenden
tasks.appendChild(listdiv);

        //haeckchen hinzufügen
let check: HTMLElement = document.createElement("div");
check.className = "far fa-square";
        //Haken gehört div zu
listdiv?.appendChild(check);
        //Hakenclick
check.addEventListener("click", checkingoff);
        //Funktion checking off/on
function checkingoff(): void {
    if (check.getAttribute("class") == "far fa-square") {
        check.setAttribute("class", "far fa-check-square"); }
    else {
        check.setAttribute("class", "far fa-square"); }
}

        //trash hinzufügen
let trash: HTMLElement = document.createElement("div");
trash.className = "fas fa-trash";
                //Trashklick
trash.addEventListener("click", deleter);
                //funktion zum löschen
function deleter(): void {
                    listdiv.parentElement.removeChild(listdiv);
                    counter--; 
                    document.querySelector(".total").innerHTML = "Task(s) total: " + counter;
                }
                //trash gehört div zu
listdiv?.appendChild(trash);
    
} 


}); }
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
document.querySelector("#addtaskbutton").addEventListener("keydown", newtask);


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
    let tasks: HTMLElement = document.getElementById("tasks");
        //Text in div appenden
    listdiv.appendChild(eingabefeldtext);
        //
    tasks?.appendChild(listdiv);

        //haeckchen hinzufügen
    let check: HTMLElement = document.createElement("div");
    check.className = "far fa-check-square";
        //Haken gehört div zu
    listdiv?.appendChild(check);
        //Funktion checking off/on
    function checkingoff(): void {
    if (check.getAttribute("class") == "far fa-check-square") {
        check.setAttribute("class", "far fa-square"); }
    else {
        check.setAttribute("class", "far fa-check-square"); }
} 
        //Hakenclick
    check.addEventListener("click", checkingoff);

        //trash hinzufügen
    let trash: HTMLElement = document.createElement("div");
    trash.className = "fas fa-trash";
        //funktion zum löschen
    function deleter(): void {
    listdiv.parentElement.removeChild(listdiv);
    counter--; 
    document.querySelector(".total").innerHTML = "Task(s) total: " + counter;
}  }

}
//Im Dokument wird durch document.querySelector der erste Button angesprochen.
let button = document.querySelector("button");
//Angeben welche Variable welche Aktion ausführen soll.
button.addEventListener("click", switchColor);
console.log(button);


function switchColor();{
    const color = "hotpink";
    const header = document.querySelector("header");
}
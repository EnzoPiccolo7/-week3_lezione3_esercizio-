let nom;
let cog;
let et;
let citt;

function invia() {
    nom = document.getElementById("nome").value;
    cog = document.getElementById("cognome").value;
    et  = document.getElementById("eta").value;
    citt= document.getElementById("citta").value;
  
    stampa()
    return(nom,cog,et,citt);
}

function stampa() {
    document.getElementById('risnome').innerHTML = nom;
    document.getElementById('riscognome').innerHTML = cog;
    document.getElementById('riseta').innerHTML = et;
    document.getElementById('riscitta').innerHTML = citt;
    let pensione = 70 - et;
    document.getElementById('pensione').innerHTML = pensione;
}

let num1;
let num2;

function piu(){
    num1 = Document.getElementById('numero1').value;
    num2 = Document.getElementById('numero2').value;
    stampavalore();
    return(num1,num2);
}
function meno(){

}
function per(){

}
function diviso(){

}

function stampavalore(){
    let add = (+num1) + (+num2);
document.getElementById("risultatotutto").innerHTML = add;
}

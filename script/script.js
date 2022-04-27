

let a;
let b;
let c;

let x1;
let x2;

//Δ = b² -4.a.c    
//-b +-  √Δ/2*a  -->

function getValueA(element) {
    a = element.value;
}

function getValueB(element) {
    b = element.value;
}

function getValueC(element) {
    c = element.value;
}

function calcDelta() {
    let delta;
    delta = (b * b) - (4 * a * c);
    return delta;
}

function getValues() {
    getValueA(document.getElementById("valueA"));
    getValueB(document.getElementById("valueB"));
    getValueC(document.getElementById("valueC"));
}

function getResult() {
    getValues();

    let delta = calcDelta();

    x1 = (-1 * (b) + Math.sqrt(delta)) / (2 * a);
    x2 = (-1 * (b) - Math.sqrt(delta)) / (2 * a);

    changeScreenValue();

}

function changeScreenValue() {
    let element = document.getElementById("result");
    element.innerText = "X1: " + x1 + ", X2: " + x2;
}
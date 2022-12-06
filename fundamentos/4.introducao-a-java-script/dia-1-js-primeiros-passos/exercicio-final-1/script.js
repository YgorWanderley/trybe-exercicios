let a = 40;
let b = 30;

console.log("Soma: " + (a + b));
console.log("Subtração :" + (a - b));
console.log("Multiplicação: " + (a * b));
console.log("Divisão: " + (a / b));
console.log("Módulo: " + (a % b));

const c = 10;
const d = 20; 
if (c > d) {
    console.log("o maior número é " + c + " (c)");
} else {
    console.log("O maior número é " + d + " (d)");
}

const x = 2;
const y = 4;
const z = 6;
if (x > y && x > z) {
    console.log("O maior número é " + x + " (x)");
}else if (y > x && y > z){
    console.log("O maior número é " + y + " (y)");
}else if (z > x && z > y) {
    console.log("O maior número é " + z + " (z)");
}

const parameter = -1000;
if (parameter > 0) {
    console.log("positive");
} else if (parameter === 0) {
    console.log("zero");
} else {
    console.log("negative");
}

const anguloA = 60;
const anguloB = 70;
const anguloC = 50;
let somaDosAngulos = anguloA + anguloB + anguloC;
let angulosPositivos = anguloA > 0 && anguloB > 0 && anguloC > 0;

if (angulosPositivos) {
    if (somaDosAngulos === 180){
        console.log("true");
    }else {
        console.log("false");
    }
}else {
    console.log("Erro, ângulo inválido");
} 
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

const anguloA = 10;
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

let chessPiece = "Dama";
switch (chessPiece.toLowerCase()) {
    case "peão":
        console.log("Peão -> Apenas uma casa para frente, no primeiro movimento podem ser duas casas.");
        break;
    case "cavalo":
        console.log("Cavalo ->  L pode pular sobre as peças.");
        break;
    case "torre":
        console.log("Torre -> Horizontal e Vertical");
        break;
    case "bispo":
        console.log("Bispo -> Diagonal");
        break;
    case "dama":
        console.log("Dama -> Diagonal, horizontal e vertical");
        break;
    case "rei":
        console.log("Rei -> Uma casa para qualquer direção");
        break;
    default:
        console.log("Erro, peça inválida!");
        break;
}

let grade = 100;
if (grade < 0 || grade > 100){
    console.log("Erro, nota inválida.")
}else if (grade >= 90) {
    console.log("A");
}else if (grade >= 80) {
    console.log("B");
}else if (grade >= 70) {
    console.log("C");
}else if (grade >= 60){
    console.log("D");
}else if (grade >= 50) {
    console.log("E");
}else {
    console.log("F");
}

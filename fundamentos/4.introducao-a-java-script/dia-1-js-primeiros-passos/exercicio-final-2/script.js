const a = 3;
const b = 5;
const c = 7;
if (a%2 === 0 || b%2 === 0 || c%2 === 0) {
    console.log("true");
}else {
    console.log("false");
}


const x = 2;
const y = 1982731;
const z = 4;
if (x%2 === 1 || y%2 === 1 || z%2 === 1) {
    console.log("true");
}else {
    console.log("false");
}


const coustOfProduct = 50;
const saleValue = 180;
const coustTotal = coustOfProduct*0.20 + coustOfProduct;
if (coustOfProduct > 0 && saleValue > 0) {
    const profit = (saleValue - coustTotal)*1000;
        console.log("O lucro foi de " + profit);
}else {
    console.log("Erro, os valores não podem ser negativos")
}

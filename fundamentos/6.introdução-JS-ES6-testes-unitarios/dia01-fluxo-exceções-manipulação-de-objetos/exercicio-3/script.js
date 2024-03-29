const lesson1 = {
    materia: 'Matemática',
    numeroEstudantes: 20,
    professor: 'Maria Clara',
    turno: 'manhã'
  };
  
  const lesson2 = {
    materia: 'História',
    numeroEstudantes: 20,
    professor: 'Carlos',
  };
  
  const lesson3 = {
    materia: 'Matemática',
    numeroEstudantes: 10,
    professor: 'Maria Clara',
    turno: 'noite',
  };

//Crie uma função para adicionar o turno da noite na lesson2. Essa função deve possuir três parâmetros, sendo eles: o objeto a ser modificado, a chave que deverá ser adicionada e o valor dela.
const addProp = (object, keys, value) => {
    object[keys] = value;
}
addProp(lesson2, "turno", "noite");
/* console.log(lesson2); */

//Crie uma função para listar as keys de um objeto. Essa função deve receber um objeto como parâmetro.
const listingKeys = (obj) => Object.keys(obj);
/* console.log(listingKeys(lesson2)); */

//Crie uma função para mostrar o tamanho de um objeto.
const objLength = (obj) => listingKeys(obj).length;
/* console.log(objLength(lesson1)) */;

//Crie uma função para listar os valores de um objeto. Essa função deve receber um objeto como parâmetro.
const listingValue = (obj) => Object.values(obj);
/* console.log(listingValue(lesson2)); */

//Crie um objeto de nome allLessons, que deve agrupar todas as aulas através do Object.assign. Cada chave desse novo objeto será uma aula, sendo essas chaves lesson1, lesson2 e lesson3;
const allLessons = Object.assign({}, {lesson1, lesson2, lesson3});
console.log(allLessons);

//Usando o objeto criado no tópico anterior, crie uma função que retorne o número total de estudantes em todas as aulas.
const getNumberOfStudents = (obj) => {
    let total = 0;
    const keys = Object.keys(obj);
    for (index in keys) {
    total += obj[keys[index]].numeroEstudantes;
}
    return total;
}
    console.log(getNumberOfStudents(allLessons));
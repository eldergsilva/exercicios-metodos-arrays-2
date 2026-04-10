const numeros = [0, 122, 4, 6, 7, 8, 44];
// const numeros = [0, 122, 4, 6, 8, 8, 44];


const validaPares = numeros.every(numero => numero % 2 === 0);

console.log(validaPares ? "array válido" : "array inválido");
 
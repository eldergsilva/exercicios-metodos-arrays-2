const numeros = [1, 98, -76, 0, 12, 19, 5, 60, 44];

const arrayPares = numeros.filter((numero) => {
  return numero % 2 === 0;
});

console.log(arrayPares); // [98, -76, 0, 12, 60, 44]
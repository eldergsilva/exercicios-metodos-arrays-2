const nomes = [
  "Maria",
  "João",
  "José",
  "Antonio",
  "Beatriz",
  "Camila",
  "amanda",
];

const novoArray = nomes.filter((nome) => {
    return nome[0].toLowerCase() === "a"
})

console.log(novoArray);
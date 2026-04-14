const frutas = ["Manga", "UVA", "abacaxi", "banaNA", "MAçã"];
const novoArray = frutas.map((fruta, indice) => {
    return `${indice} - ${fruta.slice(0,1).toLocaleUpperCase()}${fruta.slice(1).toLocaleLowerCase()}`;
});
console.log("Frutas:", novoArray);
// ['0 - Manga', '1 - Uva', '2 - Abacaxi', '3 - Banana', '4 - Maçã']


const animais = ["GATO", "cãO", "ELEFANTE", "pAssArO", "leÃO"];
const novoArrayAnimais = animais.map((animal, indice) => {
    return `${indice} - ${animal.slice(0,1).toLocaleUpperCase()}${animal.slice(1).toLocaleLowerCase()}`;
});
console.log("Animais:", novoArrayAnimais);
// ['0 - Gato', '1 - Cão', '2 - Elefante', '3 - Pássaro', '4 - Leão']


const cidades = ["sÃO PAULO", "RIO de janeiro", "CURITIBA", "beLO HORIzonte", "FORTALEZA"];
const novoArrayCidades = cidades.map((cidade, indice) => {
    return `${indice} - ${cidade.slice(0,1).toLocaleUpperCase()}${cidade.slice(1).toLocaleLowerCase()}`;
});
console.log("Cidades:", novoArrayCidades);
// ['0 - São paulo', '1 - Rio de janeiro', '2 - Curitiba', '3 - Belo horizonte', '4 - Fortaleza']


const cores = ["vERMELHO", "AZUL", "verde", "aMaReLo", "ROXO"];
const novoArrayCores = cores.map((cor, indice) => {
    return `${indice} - ${cor.slice(0,1).toLocaleUpperCase()}${cor.slice(1).toLocaleLowerCase()}`;
});
console.log("Cores:", novoArrayCores);
// ['0 - Vermelho', '1 - Azul', '2 - Verde', '3 - Amarelo', '4 - Roxo']
const enderecos = [
  { cep: "00111-222", rua: "Rua dos Artistas" },
  { cep: "00111-333", rua: "Rua Augusta" },
  { cep: "00222-444", rua: "Avenida Paralela" },
  { cep: "11222-333", rua: "Rua Carlos Gomes" },
];

function buscarEnderecoPorCep(cepPesquisado) {
  const enderecoEncontrado = enderecos.find((endereco) => endereco.cep === cepPesquisado);

  if (enderecoEncontrado) {
    console.log(enderecoEncontrado.rua);
  } else {
    console.log("CEP não encontrado.");
  }
}

buscarEnderecoPorCep("00222-444");  
buscarEnderecoPorCep("11222-333");  
buscarEnderecoPorCep("99999-999");  
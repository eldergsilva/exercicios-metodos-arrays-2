const palavras = ["livro", "caneta", "sol", "carro", "orelha"];

function verificarPalavras(palavras) {
    const temPalavraInvalida = palavras.some(palavra => palavra.length > 5);

    if (temPalavraInvalida) {
        console.log('existe palavra inválida');
    } else {
        console.log('array validado');
    }
}

// Testes
verificarPalavras(["livro", "caneta", "sol", "carro", "orelha"]);  
verificarPalavras(["livro", "sol", "carro", "lua", "tela"]);        
verificarPalavras(["abacaxi", "sol"]);                              
verificarPalavras(["sol", "lua", "mar", "paz"]);                  
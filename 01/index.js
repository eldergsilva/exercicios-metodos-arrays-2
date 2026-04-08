const livros = ['Guerra e Paz', 'A Montanha Mágica', 'Cem Anos de Solidão', 'Dom Quixote', 'A Divina Comédia'];

function encontrarLivro(livros, nomeDoLivro) {
    const index = livros.indexOf(nomeDoLivro);

    if (index !== -1) {
        console.log(`O livro está na posição ${index + 1}`);
    } else {
        console.log(`O livro "${nomeDoLivro}" não foi encontrado na estante`);
    }
}

// Testes
encontrarLivro(livros, 'Dom Quixote');         
encontrarLivro(livros, 'Guerra e Paz');         
encontrarLivro(livros, 'A Divina Comédia');    
encontrarLivro(livros, 'Harry Potter');         
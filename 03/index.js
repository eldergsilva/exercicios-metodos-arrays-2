const palavras = ["arroz", "feijão", "carne", "cerveja", "macarrão"];

const validarListaDeCompras = palavras.some((palavra) => {
    return palavra === "cerveja" || palavra === "vodka";
});

if (validarListaDeCompras) {
    console.log("revise sua lista, joão. possui bebida com venda proibida!");
} else {
    console.log("tudo certo, vamos as compras!");
}

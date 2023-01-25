function novoProduto(nome, preco) {
  const produto = {
    nome,
    preco,
  };
  return produto;
}

const notebook = novoProduto("Intel i7 8GB Win10", 2500);

alert(notebook);

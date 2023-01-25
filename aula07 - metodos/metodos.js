let pessoa = {
  nome: "Maurício",
  idade: 32,
  dizerOla() {
    console.log("Olá mundo. Meu nome é " + this.nome) //Esse 'this' significa "este objeto"
  }
}

console.log(pessoa)
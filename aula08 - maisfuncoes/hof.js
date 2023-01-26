function calcular (a, b, operacao) { //operacao é uma função, dentro da função 'calcular'
  console.log("Realizando operação")
  const resultado = operacao(a,b) //somar (3, 5)
  return resultado
}

function somar(x, y) {
  console.log("Realizando uma soma")
  return x + y
}

console.log(calcular (3, 5, somar))

calcular(8, 4, function(x,y) {
  console.log("Realizando uma subtraçao.")
  return x - y
})

function exibirElemento(elemento, indice, array) {
  console.log({
    elemento,
    indice,
    array
  })
}

const lista = ["Maçã", "Banana", "Laranja", "Limão"]

for (let i = 0; i < lista.length; i++) {
  exibirElemento(lista[i], i, lista)
}

lista.forEach(exibirElemento)

lista.forEach(function (elemento, indice, array) {
  console.log(
    elemento,
    indice,
    array
  ) 
})
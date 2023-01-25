function somar(a, b) {
  return a+b
}

const operacao = somar

console.log(operacao(4,5))


//-------Outra forma de escrever-------

const subtrair = function (a,b) { //aqui não precisa dar nome para a função, pq ela já está sendo atribuida à variável 'subtrair'
  return a - b
}

console.log(subtrair(36,13))
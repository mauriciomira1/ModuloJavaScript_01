let entrada = ""
let entradaNum = ""
let option = ""
let incremento = ""
let incrementoNum = ""

entrada = prompt("Dinheiro disponível:")
entradaNum = parseFloat(entrada)
do {
   option = prompt("Você possui R$ " + entradaNum + ".\n\nGostaria de:\n" +
   "1. Adicionar dinheiro\n" +
   "2. Remover dinheiro\n" +
   "3. Sair")

   switch(option) {
      case "1":
      incremento = prompt("Quanto você quer adicionar?")
      incrementoNum = parseFloat(incremento)
      entradaNum += incrementoNum
      alert("Novo valor é R$ " + entradaNum)
      break

      case "2":
      incremento = prompt("Quanto você quer remover?")
      incrementoNum = parseFloat(incremento)
      entradaNum -= incrementoNum
      alert("Novo valor é R$ " + entradaNum)
      break

      default:
         alert("Programa finalizado")
         break
   }


} while (option !== "3" || option !== "3")

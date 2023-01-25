/*
- área do triângulo: base * altura / 2
- área do retângulo: base * altura
- área do quadrado: lado²
- área do trapézio: (base maior + base menor) * altura / 2
- área do círculo: pi * raio² (considere pi = 3.14)
*/

/*

let opcao = ""

do {
   opcao = prompt("Informe a opção que deseja calcular:\n" + 
   "1. Área do triângulo\n" + 
   "2. Área do retângulo\n" + 
   "3. Área do quadrado\n" + 
   "0. Sair")

   switch (opcao) {
      case "1": {
         let baseT = prompt("Informe a base do triângulo:")
         let alturaT = prompt("Informe  altura do triângulo:")
         let areaTriangulo = baseT*alturaT/2
         alert("A área do triângulo é: " + areaTriangulo)
      break
      }
      
      case "2": {
         let baseRect = prompt("Insira a base:")
         let alturaRect = prompt("Insira a altura:")
         let areaRetangulo = baseRect*alturaRect
         alert("A área do retÂngulo é: " + areaRetangulo)
         break
      }

      case "3": {
         let baseQ = prompt("Informe o lado:")
         alert("A área do quadrado é: " + baseQ*baseQ)
         break
      }

      case "0": {
         alert ("ENCERRANDO PROGRAMA...\n\nAté logo!")
         break
      }

      default: {
         alert("Valor inválido!")
      }
   }
} while (opcao !== "0")

*/

let option = ""
let areaTriangulo = ""
let areaRetangulo = ""

function calcTriangulo() {
   let baseT = prompt("Informe a base do triângulo:")
   let alturaT = prompt("Informe  altura do triângulo:")
   let areaTriangulo = baseT*alturaT/2
   return alert("A área do triângulo é: " + areaTriangulo)
}

function calcRect() {
   let baseRect = prompt("Insira a base:")
   let alturaRect = prompt("Insira a altura:")
   let areaRetangulo = baseRect*alturaRect
   return alert("A área do retÂngulo é: " + areaRetangulo)
} 

function sair(){
   alert("Encerrando programa...")
   } 


do {
   
   let opcao = prompt(
   "Informe a opção que deseja calcular:\n" + 
   "1. Área do triângulo\n" + 
   "2. Área do retângulo\n" + 
   "3. Sair"
   )

   switch(opcao) {
   case "1": 
   calcTriangulo()
   break

   case "2":
   calcRect()
   break

   case "3":
   sair()
   break

   default:
   alert("Valor inválido!")
   
}
} while(opcao !== "3")
alert("Até logo!")



const entrada = prompt("Qual número deseja converter? (em metros)")
const medida = prompt("Deseja converter para qual medida?\nkm\nmm\ncm\ndm") 
let res

const entradaNum = parseFloat('entrada')

switch (medida) { 
   case ('km'):
   alert(entrada + " m em quilômetros = " + entrada * 0.001 + " km")  
   break 

   case('mm'):
   alert(entrada + " m em milímetros = " + entrada * 1000 + " mm")
   break

   case('cm'):
   alert(entrada + " m em centímetros = " + entrada * 100 + " cm")
   break
    
   default:
   alert("Opção inválida")
   break
}
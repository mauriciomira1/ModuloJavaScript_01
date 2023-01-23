let option = ""

do {
   option = prompt("Seja bem vindo!\n" +
   "Selecione uma das opções abaixo\n" +
   "1. Opção um\n" +
   "2. Opção dois\n" +
   "3. Opção três\n" +
   "4. Opção quatro\n" +
   "5. Encerrar"
   )
   switch(option) {
      case "1":
         alert("Você escolheu a opção 1")
         break
      case "2":
         alert("Você escolheu a opção 2")
      break
      case "3":
         alert("Você escolheu a opção 3")
      break
      case "4":
         alert("Você escolheu a opção 4")
      break
      case "5":
         alert("Você escolheu a encerrar.\nFinalizando programa...")
      break
      default:
         alert("Opção inválida")
      break
   
   }
} while(option !== "5")


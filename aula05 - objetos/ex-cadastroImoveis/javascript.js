
let novoImovel = [] /* Proprietário, qtd de quartos, qtd banheiros, se possui garagem */
let imoveis = [novoImovel]  

do {
let opcao = prompt("Bem-vindo ao cadastro de imóveis.\n\n" + "Quantidade de imóveis cadastrados: " + novoImovel.length + "\n\nVocê deseja:\n\n" + "1. Salvar novo imóvel\n" + "2. Mostrar todos os imóveis\n" + "3. Sair")
   switch(opcao) {
    case "1":
      
      novoImovel[0] = prompt("CADASTRO DE NOVO IMÓVEL\n\n" + "Insira o nome do proprietário:")
      novoImovel[1] = prompt("CADASTRO DE NOVO IMÓVEL\n\n" + "Insira a quantidade de quartos:")
      novoImovel[2] = prompt("CADASTRO DE NOVO IMÓVEL\n\n" + "Insira a quantiadade de banheiros:")
      novoImovel[3] = prompt("CADASTRO DE NOVO IMÓVEL\n\n" + "Possui garagem? (Sim/Não)")
      alert("CADASTRO FINALIZADO COM SUCESSO!\n\nProprietário: " + novoImovel[0] + "\nQuantidade de quartos: " + novoImovel[1] + "\nQuantidade de banheiros: " + novoImovel[2] + "\nPossui garagem: " + novoImovel[3])
      imoveis.push(novoImovel)
      break
   case "2":
      alert('digitou 2')
      break
   case "3":
      alert("Encerrando...")
      break
   default:
      alert("Opção inválida!")
   }

} while(opcao !== "3")
alert('programa finalizado')
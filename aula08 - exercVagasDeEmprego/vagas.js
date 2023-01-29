const vagas = []

function listarVagas () {
  const vagasEmTexto = vagas.reduce( function (textoFinal, vaga, indice) {
    textoFinal += indice + ". " + vaga.nome + " (" + vaga.candidatos.length + " candidatos)\n"
    return textoFinal
  }, "")

  alert(vagasEmTexto)
}

function novaVaga() {
  const nome = prompt("Insira o nome da nova vaga:")
  const descricao = prompt("Insira a descrição da vaga:")
  const dataLimite = prompt("Insira a data limite (dd/mm/aaaa):")
  const confirmacao = confirm("Deseja criar a vaga?\n" + "Vaga: " + nome + "\nDescrição: " + descricao + "\nData Limite: " + dataLimite)
  
  if (confirmacao) {
    const novaVaga = {nome, descricao, dataLimite, candidatos: []}
    vagas.push(novaVaga)
    alert("Vaga adicionada!")
  }
}

/* const candidatosEmTexto = vagas[option].candidatos.reduce(function(textoFinal, candidato) {
  textoFinal += textoFinal + " - " + candidato + "\n"
}, "") */

 function visualizarVaga () {
  const option = prompt("Qual o índice da vaga que deseja listar?")
  const candidatosEmTexto = vagas[option].candidatos.reduce(function (textoFinal, candidato){
    return textoFinal + "\n - " + candidato
  }, "")
  
  alert(
  "Nome da Vaga: " + vagas[option].nome +
  "\nDescrição: " + vagas[option].descricao +
  "\nData Limite: " + vagas[option].dataLimite +
  "\nNº de candidatos: " + vagas[option].candidatos.length +
  "\nNomes dos candidatos: " + candidatosEmTexto
  )
} 

/* function visualizarVaga () {
  const option = prompt("Qual o índice da vaga que deseja listar?")
  const candidatosEmTexto = vagas[option].candidatos
  alert(
  "Nome da Vaga: " + vagas[option].nome +
  "\nDescrição: " + vagas[option].descricao +
  "\nData Limite: " + vagas[option].dataLimite +
  "\nNº de candidatos: " + vagas[option].candidatos.length +
  "\nNomes dos candidatos: " + candidatosEmTexto
  )
} */

function inscreverCandidato () {
  const nomeCandidato = prompt("Qual o nome do candidato(a)?")
  const indice = prompt ("Qual o índice da vaga na qual deseja inscrever o candidato?")
  confirm("Confirma a inscrição do candidato " + nomeCandidato + " na vaga " + indice + "?" +
  "\nNome da Vaga: " + vagas[indice].nome +
  "\nDescrição: " + vagas[indice].descricao +
  "\nData Limite: " + vagas[indice].dataLimite
  )
  if (confirm) {
    vagas[indice].candidatos.push(nomeCandidato)
    alert("Inscrição realizada com sucesso!")
  }
}

function excluirVaga () {
  const indice = prompt("Qual o índice da vaga que deseja excluir?")
  confirm(
    "A vaga selecionada é:" +
    "\nVaga: " + vagas[indice].nome +
    "\nDescrição: " + vagas[indice].descricao +
    "\nData Limite: " + vagas[indice].dataLimite +
    "\n\nTEM CERTEZA QUE DESEJA EXCLUIR A VAGA SELECIONADA?"
    )
    if (confirm) {
      vagas.splice(indice, 1)
      alert("Vaga excluída com sucesso!")
    }
}

function exibirMenu() {
  const option = prompt(
    "Escolha uma das opções abaixo:\n" +
    "1. Listar vagas disponíveis\n" +
    "2. Criar um nova vaga\n" +
    "3. Visualizar uma vaga\n" +
    "4. Inscrever um candidato em uma vaga\n" +
    "5. Excluir uma vaga\n" +
    "6. Sair"
  )
  return option
}

function executar () {
  let option = ""
  do {
    option = exibirMenu()

    switch (option) {
      case "1":
        listarVagas()
        break
      case "2":
        novaVaga()
        break
      case "3":
        visualizarVaga()
        break
      case "4":
        inscreverCandidato()
        break
      case "5":
        excluirVaga()
        break
      case "6":
        alert("Encerrando programa...")
        break
      
      default: alert("Opção inválida!")
    }

  } while (option != "6")
}

executar()
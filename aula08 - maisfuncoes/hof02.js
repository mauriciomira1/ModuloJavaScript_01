const personagens = [
  { nivel: 42, nome: "Thrall", raca: "Orc", classe: "Xamã" },
  { nivel: 28, nome: "Garrosh", raca: "Orc", classe: "Guerreiro" },
  { nivel: 35, nome: "Varok", raca: "Orc", classe: "Guerreiro" },
  { nivel: 35, nome: "Uther", raca: "Humano", classe: "Paladino" },
  { nivel: 26, nome: "Jaina", raca: "Humano", classe: "Maga" },
  { nivel: 39, nome: "Tyrande", raca: "Elfo Noturno", classe: "Sacerdotisa" },
  { nivel: 29, nome: "Muradin", raca: "Anão", classe: "Guerreiro" },
]



/* const nomes = [] */

/* for (i = 0 ; i < personagens.length ; i++) {
  nomes.push(personagens[i].nome)
  
}

*/

// Map: faz transformação em arrays
// Pega um array existente cria um novo array modificado

const nomes = personagens.map(function(personagem) {
  return personagem.nome
})


console.log(nomes) 


// Filter

/* const orcs = []

for (let i = 0; i < personagens.length; i++) {
  if (personagens[i].raca === "Orc") {
    orcs.push(personagens[i])
  }
} */

const orcs = personagens.filter(function(personagem){
  return personagem.raca === "Orc"
})

console.log(orcs)


// Reduce: transforma o array em outro tipo (string, objeto, número, etc)

const nivelTotal = personagens.reduce(function (valorAcumulado, personagem) {
  return valorAcumulado + personagem.nivel
}, 0)

console.log(nivelTotal)

const racas = personagens.reduce(function(valorAcumulado, personagem) {
  if ( )
}, {})
let vetor = ['2','4','6']
let vetor2 = ['mauricio', 'miranda']
vetor.shift() 

const vetor03 = vetor.concat(vetor2)

//substituição dos elementos
//splice
const a = vetor03.splice(0, 1, 'cissy tinazi')
alert(vetor03)
alert(a)
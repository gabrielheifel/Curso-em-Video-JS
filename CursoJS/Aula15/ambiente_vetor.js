let num = [5, 8, 9, 3]

console.log(num)

num[4] = 7
num.push(1)        // adiciona valor no final do vetor

console.log(`${num}`)
console.log(`O vator tem ${num.length} posições`)

num.sort()
console.log(`${num}`)

let pos = num.indexOf(8)
if( pos == -1){
    console.log('Valor não encontrado')
} else {
    console.log(`Valor 8 esta na posiçao ${pos}`)
}
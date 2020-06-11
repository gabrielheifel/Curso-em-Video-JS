let val = [5, 7, 6, 4, 2, 9]

//vetor tradicional
for(let i = 0; i<val.length; i++){
    console.log(`A posiçao ${i} tem o valor ${val[i]}`)
}

val.sort()
//vetor diferenciado, more easy
for(let pos in val){    // para cada posiçao em val faça...
    console.log(`O valor ${val[pos]} esta na posiçao ${pos}`)
}
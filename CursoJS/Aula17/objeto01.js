let amigo = {
    nome: 'Jose',
    sexo: 'Masc',
    peso: 80.5,
    engordar(p){
        console.log('engordou')
        this.peso += p
    }
}
amigo.engordar(5)
console.log(`${amigo.nome} pesa ${amigo.peso}Kg`)
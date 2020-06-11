let numero = document.getElementById('txtn')
let tab = document.getElementById('seltabela')
let res = document.getElementById('res')
var val = []

function isValid(n){
    if(Number(n)>=1 && Number(n)<=100){
        return true
    }else{
        return false
    }
}
function naLista(n, lista){
    if(lista.indexOf(Number(n)) != -1){         //se o endereço do valor nao estiver na lista
        return true
    }else{
        return false
    }
}

function adicionar(){

    if(numero.value.length == 0){
        window.alert('[ERRO] Preencha todos os campos!')
    }else{
        if(isValid(numero.value) && !naLista(numero.value, val)){
            let num = Number(numero.value)
            val.push(num)
            let item = document.createElement('option')
            item.text = `Valor ${num} adicionado.`
            item.value = `tab${val.length}`
            tab.appendChild(item)
            res.innerHTML = ''      // Apaga o finalizar() apos atualizar a tabela
            
        }else{
            window.alert('[ERRO] Valor invalido ou já encontrado.')
        }
        numero.value = ''       //Limpa o campo  
        numero.focus()          //Cursor volta para o campo
    }
}
function finalizar(){

    if(val.length == 0){
        window.alert('Adicione valores antes de finalizar!')
    }else{
        let total = val.length
        let maiorNum = val[0]
        let menorNum = val[0]
        let somaVal = 0
        let media

        for(let pos in val){
            somaVal += val[pos]
            if(val[pos]>maiorNum){
                maiorNum = val[pos]
            }
            if(val[pos]<menorNum){
                menorNum = val[pos]
            }
        }
        media = somaVal/total

        res.innerHTML = ''
        res.innerHTML += `Ao todo, temos ${total} números cadastrados.<br>`
        res.innerHTML += `O maior valor informado foi ${maiorNum}.<br>`
        res.innerHTML += `O menor valor informado foi ${menorNum}.<br>`
        res.innerHTML += `Somando todos os valores, temos ${somaVal}.<br>`
        res.innerHTML += `A média dos valores digitados é ${media}.<br>`
    }
}

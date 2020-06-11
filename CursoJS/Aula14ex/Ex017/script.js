function tabuada(){
    var numero = document.getElementById('txtnum')
    var tab = document.getElementById('seltab') // Nome do select

    if(numero.value.length == 0){
        window.alert('[ERRO] Preencha todos os campos!')
    }else{
        var num = Number(numero.value)
        tab.innerHTML = ''  //Limpar o select
        for(var i=0; i<=9; i++){
            var item = document.createElement('option') //cria um option no select
            item.text = `${num} x ${i} = ${num*i}`
            item.value = `tab${i}`   //nome para cada posiçao
            tab.appendChild(item)   //adiciona valor ao select
        }
    }
}
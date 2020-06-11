function contar(){
    var ini = document.getElementById('ininum')
    var fim = document.getElementById('fimnum')
    var passo = document.getElementById('pasnum')
    var res = document.querySelector('div#result')

    if(ini.value.length==0 || fim.value.length==0 || passo.value.length==0){
        window.alert('[ERRO] Preencha todos os campos!')
    } else {
        res.innerHTML = 'Contando: <br>'
        var i = Number(ini.value)
        var f = Number(fim.value)
        var p = Number(passo.value)

        if(p <= 0){
            p = 1
            window.alert('Passo inválido! Considerando PASSO 1')
        }
        if(i < f){
            //Contagem crescente
            for(var c=i; c<=f; c+=p){
                res.innerHTML += `${c} \u{27A1} `
            }
        } else {   
            //Contagem decrescente
            for(var c=i; c>=f; c-=p){
                res.innerHTML += `${c} \u{27A1} `
            }
        }
        res.innerHTML += ` \u{1F3C1}`
    }
}

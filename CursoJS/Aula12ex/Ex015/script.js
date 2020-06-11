function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.querySelector('div#res')
    if(fano.value.length == 0 || Number(fano.value) > ano){
        window.alert('[ERRO] Verifique os dados e tente novamente!')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')  // é igual a <img id='foto'> no html
        if(fsex[0].checked){
            genero = 'Homem'
            if(idade >=0 && idade <10){
                // imagem de uma crianca
            } else if(idade <21){
                //yong
            } else if(idade <60){
                //adult
            } else {
                //old man
            }
        } else {
            genero = 'Mulher'
            if(idade >=0 && idade <10){
                //kid
            } else if(idade >=10 && idade <21){
                //yong
            } else if(idade >=21 && idade <60){
                //adult
            } else {
                //old woman
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
        res.appendChild(img)
    }
}
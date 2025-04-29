function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.getElementById('res')

    if (fano.value.length == 0 || fano.value > ano){
        window.alert('Verefique os dados novamente')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsex[0].checked){
            genero = 'Homem'
            if (idade >=0 && idade <10){
                // criança
                img.setAttribute('src','bebehomem.png')
            } else if (idade < 21){
                // joven
                img.setAttribute('src','homemjoven.png')
            } else if (idade < 50){
                //adulto
                img.setAttribute('src','homemadulto.png')
            } else  {
                img.setAttribute('src', 'homemidoso.png')
            }

        } else if (fsex[1].checked){
            genero = 'Mulher'
            if (idade >=0 && idade <10){
                // criança
                img.setAttribute('src', 'bebemulher.png')
            } else if (idade < 21){
                // joven
                img.setAttribute('src', 'mulherjoven.png')
            } else if (idade < 50){
                //adulto
                img.setAttribute('src', 'mulheradulta.png')
            } else  {
                img.setAttribute('src', 'mulheridosa.png')
            }
        }
        res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
        res.appendChild(img)
    }
}
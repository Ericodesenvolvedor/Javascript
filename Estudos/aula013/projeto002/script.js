function verificar() {

    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById ('ano')
    var res = document.getElementById ('res')

    if (fano.value.length == 0 || Number(fano.value) > ano) {
        alert ('[Error] Preencha os dados corretamente, tente novamente.')
    } 

    else {
        var fsexo = document.getElementsByName ('sexo')
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = document.createElement ('img')
        img.setAttribute ('id', 'foto')

        if (fsexo[0].checked) {
            genero = 'Homem'

            if (idade >=0 && idade <18) {
                // menino
                img.setAttribute ('src', 'imagens/menino.jpg')
                img.style.clipPath = "circle()"
                img.style.width = '150px'
                img.style.position = 'relative'
                img.style.left = '-30%'
                img.style.top = '-50%'
            } 
            else if (idade >= 18 && idade < 50) {
                //garoto
                img.setAttribute ('src', 'imagens/garoto.jpg')
                img.style.clipPath = "circle()"
                img.style.width = '150px'
                img.style.position = 'relative'
                img.style.left = '-30%'
                img.style.top = '-50%'
            } 
            else if (idade >= 50) {
                //idoso
                img.setAttribute ('src', 'imagens/idoso.jpg')
                img.style.clipPath = "circle()"
                img.style.width = '150px'
                img.style.position = 'relative'
                img.style.left = '-30%'
                img.style.top = '-50%'
            }
        }

        else if (fsexo[1].checked) {
            genero = 'Mulher'

            if (idade >=0 && idade <18) {
                // menina
                img.setAttribute ('src', 'imagens/menina.jpg')
                img.style.clipPath = "circle()"
                img.style.width = '150px'
                img.style.position = 'relative'
                img.style.left = '-30%'
                img.style.top = '-50%'
            } else if (idade >= 18 && idade < 50) {
                //garota
                img.setAttribute ('src', 'imagens/garota.jpg')
                img.style.clipPath = "circle()"
                img.style.width = '150px'
                img.style.position = 'relative'
                img.style.left = '-30%'
                img.style.top = '-50%'
            } else if (idade >= 50) {
                //idosa
                img.setAttribute ('src', 'imagens/idosa.jpg')
                img.style.clipPath = "circle()"
                img.style.width = '150px'
                img.style.position = 'relative'
                img.style.left = '-30%'
                img.style.top = '-50%'
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = 'Você é ' + genero + ' e tem ' + idade + ' anos.'
        res.appendChild (img)
    }

}
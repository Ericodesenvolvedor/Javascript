function carregar() {

    var msg = window.document.getElementById ('msg')
    var foto = window.document.getElementById ('fotododia')
    var titulo = window.document.getElementById ('titulo')
    var dataatual = new Date()
    var hora = dataatual.getHours()
    var minutos = dataatual.getMinutes()
    var mensagem = msg.innerText = ('Horário atual: ' + hora + ':' + minutos)

    if (hora >=0 && hora < 12) {
        foto.src = 'dia.jpg'
        document.body.style.background = '#C89878'
        msg.style.color = '#623A27'
        titulo.style.color = '#623A27'
    } 
    
    else if (hora >= 12 && hora < 18) {

        foto.src = 'tarde.jpg'
        document.body.style.background = '#A1B5AF'
        msg.style.color = '#194437'
        titulo.style.color = '#194437'

    } 
    
    else {

        foto.src = 'noite.jpg'
        document.body.style.background = '#00192f'

    }

}


function somar() {
    var number1 = window.document.getElementById ('number1')
    var number2 = window.document.getElementById ('number2')
    var resultado = window.document.getElementById ('resultado')
    var n1 = Number (number1.value)
    var n2 = Number (number2.value)
    var s = n1 + n2 

    resultado.innerText = s
}

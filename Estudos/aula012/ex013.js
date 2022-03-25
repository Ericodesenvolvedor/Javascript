var agora = new Date()
var hora = agora.getHours()
var minutos = agora.getMinutes()

if (hora < 12) {
    console.log (hora + ':' + minutos + ' Bom dia!')

} else if (hora < 18) {
    console.log (hora + ':' + minutos + ' Boa tarde!')

} else if (hora < 0) {
    console.log (hora + ':' + minutos + ' Boa noite!')

} else if (hora < 6) {
    console.log (hora + ':' + minutos + ' Já está de madrugada, vá dormir!')
}

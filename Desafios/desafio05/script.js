function converter() {

    var msg = document.getElementById ('msg')
    var vmetros = Number(prompt ('Digite um valor em metros(m)'))
    var valores = document.getElementById ('valores')
    var km = document.getElementById ('km')
    var dam = document.getElementById ('dam')
    var cm = document.getElementById ('cm')
    var mm = document.getElementById ('mm')
    var mi = document.getElementById ('mi')

    msg.innerText = `O valor de ${vmetros} metros convertido é:`
    msg.style.fontWeight = 'bold'
    valores.style.border = '1px solid black'

    /* - Na primeira parte foi chamado todos os meus elementos html e variaveis para guardar seus valores.
    - Na segunda parte eu fiz a conversão de cada um criando mais uma váriavel para guardar todos seus valores, note a letra V antes de todos, oq significa valor.
    - No final eu só coloquei pra escrever dentro de cada elemento html respectivos pelo seu valor. 
    */

    var vkm = `Quilometros = ${vmetros/1000} km`
    var vdam = `Decametros = ${vmetros/10} dam`
    var vcm = `Centrimetros = ${vmetros*100} cm`
    var vmm = `Milimetro = ${vmetros*1000} mm`
    var vmi = `Milhas = ${vmetros/1609} mi`
    
    km.innerText = vkm
    dam.innerText = vdam
    cm.innerText = vcm
    mm.innerText = vmm
    mi.innerText = vmi
}

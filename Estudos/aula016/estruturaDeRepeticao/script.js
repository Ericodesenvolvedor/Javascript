function contar() {
    var inicio = document.getElementById ('inicio')
    var fim = document.getElementById ('fim')
    var passo = document.getElementById ('passo')
    var number = document.getElementById ('number')

    if (inicio.value.length == 0 || fim.value.length == 0 || passo.value.length == 0) {
        alert ('Você precisa preencher todas as caixas')
    } 
    var vinicio = Number(inicio.value)
    var vfim = Number(fim.value)
    var vpasso = Number(passo.value)

    if (vpasso <= 0) {
        alert ('Passo invalido!')
        vpasso = 1
    }

    // --------------------- contagem crescente -------------------------

    if (vinicio < vfim) {
       for (let c = vinicio; c <= vfim; c = c + vpasso) {
            number.innerHTML += ` ${c}`
        } 
    }

    // --------------------- contagem regressiva -------------------------

    else {
        for (let c = vinicio; c >= vfim; c = c - vpasso) {
            number.innerHTML += ` ${c}`
        }
    }
}
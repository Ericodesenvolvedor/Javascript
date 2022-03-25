function tabuada() {

    let number = document.getElementById ('number')
    let tab = document.getElementById ('tab')

    if (number.value.length == 0) {
        alert ('Você precisa digitar um número!')
    } 
    else {
        let n = Number(number.value)
        let c = 1
        tab.innerHTML = ''
        
        while (c <= 10) {
            let item = document.createElement ('option')
            item.text = `${n} x ${c} = ${n*c}`
            tab.appendChild (item)
            c++
        }

    }

}
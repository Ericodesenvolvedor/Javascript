const btn = document.querySelector('.btn')
btn.addEventListener("click", calcular)

function calcular() {
    const nomeProduto = prompt('Qual produto você comprou?')
    const valorProduto = Number(prompt('Qual o valor do produto?'))
    const valorGastar = Number(prompt('Quanto você tinha para gastar?'))
    const troco = valorGastar - valorProduto
    alert(`Dinheiro para gastar:   R$ ${valorGastar}\nProduto comprado: ${nomeProduto}\nValor do produto:  R$ ${valorProduto}\nTroco disponivel: R$ ${troco}`)
}





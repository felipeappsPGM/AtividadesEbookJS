function promo(){
    const produto = document.getElementById('idProduto').value;
    const preco = document.getElementById('idPreco').value;

    const calc = (Number(preco) * 2) + (Number(preco) / 2);
    const calcDesconto = (Number(preco) / 2);

    const total = document.getElementById('outPrecoTotal');
    const desconto = document.getElementById('outDesconto');

    total.textContent = produto + ' - Promoção: Leve 3 por R$: ' + calc;
    desconto.textContent = 'O 3° produto custa apenas R$: ' +  calcDesconto;
}

const btPromo = document.getElementById('idPromo');
btPromo.addEventListener('click', promo);
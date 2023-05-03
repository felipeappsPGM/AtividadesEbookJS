function promo(){
    const medicamento = document.getElementById('idMedicamento').value;
    const preco = document.getElementById('idPreco').value;

    let calcPromo = Math.floor((Number(preco) * 2));

    const promo = document.getElementById('outPromo');
    const precoPromo = document.getElementById('outPreco');

    promo.textContent = 'Promoção de ' + medicamento;
    precoPromo.textContent = 'Leve 2 por apenas R$: ' + calcPromo;
}

const btPromo = document.getElementById('idPromo');
btPromo.addEventListener('click', promo);
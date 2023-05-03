function calcPreco(){
    const preco = document.getElementById('idPreco').value;
    const tempo = document.getElementById('idTempo').value;

    const fatorTempo = Math.ceil(Number(tempo) / 15) * preco;
    console.log(Math.ceil(Number(tempo) / 15));
    const outPreco = document.getElementById('outPreco');
    outPreco.textContent = 'Valor a Pagar R$: ' + fatorTempo;
}

const btPreco = document.getElementById('idCalc');
btPreco.addEventListener('click', calcPreco);
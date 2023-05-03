const btnNomeHoras = document.getElementById('nomeHoras');
btnNomeHoras.addEventListener('click', () => {
    calcularHoras();
});

function calcularHoras(){
    const minuto = document.getElementById('minutosFilme').value;
    let horas = minuto / 60;
    let minutos = minuto % 60;
    horas = Math.floor(horas);
    
    if(horas !== 0){
        horas = horas + ' hora(s) e ' + minutos + ' minutos';
        exibirConteudo(horas);
    }else{
        horas = minutos + ' minutos';
        exibirConteudo(horas);

    }
       
}

function exibirConteudo(horas){
    const nome = document.getElementById('nomeFilme').value;
    const resultado = document.getElementById('resposta');
    resultado.textContent = 'nome: ' + nome + " " + horas;
    
}

const nome = document.getElementById('nome');
const btnMostrar = document.getElementById('btnMostrar');
const resposta = document.getElementById('resposta');
btnMostrar.addEventListener('click', () => {
    mostrarOla();
})

function mostrarOla(){
    resposta.textContent = 'Olá ' + nome.value;
}
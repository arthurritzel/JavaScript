var a = window.document.querySelector('#area')
a.addEventListener('click', clicar)
a.addEventListener('mouseenter', entrar)
a.addEventListener('mouseout', sair)

function clicar(){
    a.innerHTML = 'clicou!'
    a.style.background = 'red'
}
function entrar() {
    a.innerHTML = 'entrou'
    a.style.background = 'blue'
}

function sair(){
    a.innerHTML = 'saiu'
    a.style.background = 'white'
}
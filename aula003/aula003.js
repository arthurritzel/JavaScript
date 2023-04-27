var p1 = window.document.getElementsByTagName('p')[1]
document.write(p1.innerText)
document.write(p1.innerHTML)
p1.style.color = 'black'
document.body.style.background = 'white'

var div = window.document.getElementById('div1')
document.write(div.innerHTML)
div.style.background = 'black'
div.innerText = 'ola meus amigos'

var titulo = window.document.querySelector('.titulo')

titulo.innerText = 'sou foda'
function somar(){
    var tn1 = window.document.getElementById('txtn1')
    var tn2 = window.document.getElementById('txtn2')
    var n1 = Number(tn1.value)
    var n2 = Number(tn2.value)
    var s = n1 + n2
    var res = window.document.getElementById('res')
    res.innerHTML = `A soma entre ${n1} e ${n2} é ${s}`
}
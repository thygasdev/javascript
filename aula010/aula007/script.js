function contar(){
    var ini = document.getElementById('txti')
    var fim = document.getElementById('txtf')
    var pas = document.getElementById('txtp')
    var res = document.getElementById('res')
    if (ini.value.length == 0 || fim.value.length == 0 || pas.value.length == 0) {
        window.alert('erro tenta denovo')
    } else {
        res.innerHTML = ('contando')
        var i = ini.value
        var f = fim.value
        var p = pas.value
    }
}
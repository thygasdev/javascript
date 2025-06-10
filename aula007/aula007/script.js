function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById ("txtano")
    var res = document.querySelector("div#res")
    if (fano.value.length == 0 || Number(fano.value) > ano){
        window.alert('[erro] dados errados! correção agora ! ')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
       if (fsex[0].checked) {
        genero = 'homem'
        if(idade >=0 && idade <10 ){
            
            img.setAttribute ('src', 'bebe-m.jpg')
        } else if(idade < 21){
           
            img.setAttribute ('src', 'jovem-m.jpg')
        } else if(idade <50) {
           
            img.setAttribute ('src', 'adulto-m.jpg')
        } else {
            
            img.setAttribute ('src', 'idoso-m.jpg')
        }
       } else if(fsex[1].checked) {
        genero = 'mulher'
          if(idade >=0 && idade <10 ){
            
            img.setAttribute ('src', 'bebe-f.jpg')
        } else if(idade < 21){
           
            img.setAttribute ('src', 'jovem-f.jpg')
        } else if(idade <50) {
           
            img.setAttribute ('src', 'adulta-f.jpg')
        } else {
            
            img.setAttribute ('src', 'idosa-f.jpg')
            
        }
       }
       res.style.textAlign = 'center'
       res.innerHTML = `detectamos ${genero} com ${idade} anos`
       res.appendChild(img)
    }
}
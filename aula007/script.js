function carregar() {
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem') 
    var data = new Date()
    var hora = data.getHours()
    msg.innerHTML = `agora são ${hora} horas.`
    if (hora >= 0 && hora < 12) {      
        img.src ='manha.jpg'
        document.body.style.background ='#01A8F7'
    } else if (hora >= 12 && hora < 18) {     
        img.src ='tarde.jpg'
        document.body.style.background ='#CB7021'
    } else {      
        img.src ='noite.jpg'
        document.body.style.background ='#39435E'
    }

}  

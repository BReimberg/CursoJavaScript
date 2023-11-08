function carregar() {
    let msg = document.querySelector('#msg')
    let img = document.querySelector('#imagem')
    let data = new Date()
    //let hora = data.getHours()
    hora = 2
    msg.innerHTML = `Agora são ${hora} horas.`
    
    if (hora >= 0 && hora <= 4) {
        //Boa Madrugada!
        img.src = './image/madrugada.jpg'
        document.body.style.background = '#406379'
    } else if (hora > 5 && hora <= 12) {
        //Bom dia!
        img.src = './image/manha.jpg'
        document.body.style.background = '#87784d'
    }
    else if (hora > 13 && hora <= 18) {
        //Boa Tarde!
        img.src = './image/tarde.jpg'
        document.body.style.background = '#575641'
    } else {
        //Boa Noite!
        img.src = './image/noite.jpg'
        document.body.style.background = '#1c3240'
    }
}

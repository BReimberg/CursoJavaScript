function verificar() {
    let data = new Date()
    let ano = data.getFullYear()
    let fano = document.querySelector('#txtano')
    let res = document.querySelector('div#res')

    if (fano.value.length == 0 || Number(fano.value) > ano) {
        alert('[ERRO] Verifique os dados e tente novamente!')
    } else {
        let fsex = document.getElementsByName('radsex')
        let idade = ano - Number(fano.value)
        let gereno = ''
        let img = document.createElement('img')
        img.setAttribute('id', 'foto')

        if (fsex[0].checked) {
            genero = 'Masculino'
            if (idade >= 0 && idade < 10) {
                //Criança
                img.setAttribute('src', './image/crianca-m.jpg')
            } else if (idade < 18) {
                //Adolecente
                img.setAttribute('src', './image/adolecente-m.jpg')
            } else if (idade < 60) {
                //Adulto
                img.setAttribute('src', './image/homem.jpg')
            } else {
                //Idoso
                img.setAttribute('src', './image/senhor.jpg')
            }
        } else if (fsex[1].checked) {
            genero = "Feminino"
            if (idade >= 0 && idade < 10) {
                //Criança
                img.setAttribute('src', './image/crianca-f.jpg')
            } else if (idade < 18) {
                //Adolecente
                img.setAttribute('src', './image/adolecente-f.jpg')
            } else if (idade < 60) {
                //Adulto
                img.setAttribute('src', './image/mulher.jpg')
            } else {
                //Idoso
                img.setAttribute('src', './image/senhora.jpg')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos alguém do gênero ${genero} com ${idade} anos.`
        res.appendChild(img)
    }
}
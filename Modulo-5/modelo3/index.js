function contar() {
    let ini = document.querySelector('#txti')
    let fim = document.querySelector('#txtf')
    let passo = document.querySelector('#txtp')
    let res = document.querySelector('#res')

    //Se o valor ini for igual a 0 ou o valor do fim for igual a 0 ou o valor do passo for igual a 0;
    if (ini.value.length == 0 || fim.value.length == 0 || passo.value.length == 0) {
        res.innerHTML = 'Imporssível contar!'
        alert('[ERRO] Faltam dados!')

    } else {
        res.innerHTML = 'Contando: <br>'
        let i = Number(ini.value)
        let f = Number(fim.value)
        let p = Number(passo.value)

        if (p <= 0) {
            alert('Passo invalido! Considerando PASSO 1')
            p = 1
        }
        //Se o valor inicial for menor que o final;
        if (i < f) { //contagem crescente;

                //O contador começa com o valor do inicio;
                //Enquanto o contador fo menor ou igual ao fim;
                //Contador vai receber ele mesmo mais o valor do passo;
                for (let c = i; c <= f; c += p) {
                    res.innerHTML += `${c} \u{1F449}`
                }

            } else { //contagem decrescente;
                for (let c = i; c >= f; c -= p) {
                    res.innerHTML += `${c} \u{1F449}`
                }

            }
        res.innerHTML += `\u{1F3C1}`
    }
}
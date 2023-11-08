/*
let num = [5, 8, 2, 9, 3]
console.log(`Nosso vetor é o ${num}.`)
console.log(`O vetor tem ${num.length} posições.`)
console.log(`O primeiro valor do vetor é ${num[0]}`)

for( let pos=0; pos < num.length; pos++ ) {
    console.log(num[pos])
}

for(let pos in num) {
    console.log(num[pos])
}


let pos = num.indexOf(4)
if (pos == -1) {
    console.log('O valor não foi encontrado!')
} else {
    console.log(`o valor 4 está na posição ${pos}`)
}

//----------------------------------------------------
function parimp(n) {
    if(n%2==0) {
        return 'par'
    } else {
        return 'impar'
    }
}
let res = parimp(10)

console.log(`O valor digitado é ${res}.`)

function soma(n1, n2) {
    return n1 + n2
}
console.log(soma(2, 5))

function soma(n1, n2) {
    return n1 + n2
}
console.log(soma(2))

function soma(n1=0, n2=0) {
    return n1 + n2
}
console.log(soma(2))

let v = function(x) {
    return x*2
}
console.log(v(5))

function fatorial(n) {
    let fat = 1
    for(let c = n; c > 1; c--) {
        fat *= c
    }
    return fat
}
console.log(fatorial(5))
*/

//alert(" Deu certo; Miguel Afonso Xavier 28, Anthony Marba 2 e Pedro de Castro 32")

//--let Nome_Usuario = prompt("quantas horas vc trabalha?")


let CalculodeMediaDoUsuario = function Mediazinha(num1, num2, num3) {
    let numero1 =  num1.parseInt(prompt("Me dê o primeiro número"))
    numero2 = num2.parseInt(prompt("Me dê o segundo número"))
    numero3 = num3.parseInt(prompt("Me dê o terceiro número"))
    return (num1+num2+num3)/3
}
console.log(CalculodeMediaDoUsuario)


let Soma = function somaBasica(num1, num2) {
    return num1+num2
}

console.log(Soma(2, 3))

let Quadrado = function areaQuadrado(num1) {
    return num1*num1
}

console.log(Quadrado(2))

function Triangulo(num1, num2, num3) {
    num3 = 2
    return (num1*num2)/num3
}

console.log(Triangulo(2,3))

let Media = function calculoMedia(num1, num2, num3) {
    return (num1+num2+num3)/3
}

console.log(Media(2, 3, 10))

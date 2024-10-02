// //alert(" Deu certo; Miguel Afonso Xavier 28, Anthony Marba 2 e Pedro de Castro 32")

// //--let Nome_Usuario = prompt("quantas horas vc trabalha?")


// let CalculodeMediaDoUsuario = function Mediazinha(num1, num2, num3) {
//     num1 = parseInt(prompt("Me dê o primeiro número"))
//     num2 = parseInt(prompt("Me dê o segundo número"))
//     num3 = parseInt(prompt("Me dê o terceiro número"))
//     return (num1+num2+num3)/3   
// }
// console.log(CalculodeMediaDoUsuario())


// let Soma = function somaBasica(num1, num2) {
//     return num1+num2
// }

// console.log(Soma(2, 3))

// let Quadrado = function areaQuadrado(num1) {
//     return num1*num1
// }

// console.log(Quadrado(2))

// function Triangulo(num1, num2, num3) {
//     num3 = 2
//     return (num1*num2)/num3
// }

// console.log(Triangulo(2,3))

// let Media = function calculoMedia(num1, num2, num3) {
//     return (num1+num2+num3)/3
// }

// console.log(Media(2, 3, 10))


let estados = ['Acre', 'Alagoas', 'Amapá', 'Amazonas', 'Bahia', 'Ceará', 'Distrito Federal', 'Espírito Santo', 'Goiás', 'Maranhão', 'Mato Grosso', 'Mato Grosso do Sul', 'Minas Gerais', 'Pará', 'Paraíba', 'Paraná', 'Pernambuco', 'Piauí', 'Rio de Janeiro', 'Rio Grande do Norte', 'Rio Grande do Sul', 'Rondônia', 'Roraima', 'Santa Catarina', 'São Paulo', 'Sergipe', 'Tocantins']

let i = 0
while (i < estados.length) {
    console.log(i);
    console.log(estados[i]) 
        i = i+1;
}

for (let index = 0; index < estados.length; index++) {
    console.log(index)
    
}
// Exemplos

// Exercício 0A

function soma(num1, num2) {
   // implemente sua lógica aqui
   return num1 + num2
}

// Exercício 0B

function imprimeMensagem() {
   // implemente sua lógica aqui
   const mensagem = prompt('Digite uma mensagem!')

   console.log(mensagem)
}

// Exercícios

//Exercício 1

function calculaAreaRetangulo() {
   // implemente sua lógica aqui
const altura = prompt(` Digite a altura : `)
const largura = prompt(` Digite a largura : `)
console.log(altura*largura)
}

//Exercício 2

function imprimeIdade() {
   // implemente sua lógica aqui
const anoAtual = prompt(` Ano atual :`)
const anoDeNascimento = prompt(` Ano De Nascimento : `)
console.log(anoAtual-anoDeNascimento)

}

//Exercício 3

function calculaIMC(peso, altura) {
   // implemente sua lógica aqui

return peso / (altura*altura)

}

//Exercício 4

function imprimeInformacoesUsuario() {
   // implemente sua lógica aqui
   const nome = prompt(`Qual seu Nome ?: `)
   const idade = prompt(`Qual Sua Idade ? : `)
   const email = prompt(`Qual seu email ? : `)
   console.log(`Meu nome é ${nome}, tenho ${idade} anos, e o meu email é ${email}.`)

}

//Exercício 5

function imprimeTresCoresFavoritas() {
   // implemente sua lógica aqui
const firstColor = prompt(`Digite uma cor : `)
const secondColor = prompt(` Digite outra cor : `)
const thirdColor = prompt(`Digite mais uma cor : `)
let colors = [firstColor, secondColor, thirdColor]
console.log(colors)
}

//Exercício 6

function retornaStringEmMaiuscula(string) {
   // implemente sua lógica aqui
  const grande = string
  
  return grande.toUpperCase()
  
}

//Exercício 7

function calculaIngressosEspetaculo(custo, valorIngresso) {
   // implemente sua lógica aqui

return custo / valorIngresso

}

// Exercício 8

function checaStringsMesmoTamanho(string1, string2) {
  // implemente sua lógica aqui
const check = string1.length === string2.length

return check
}

// Exercício 9

function retornaPrimeiroElemento(array) {
   // implemente sua lógica aqui

   let firstArray = array
   let selecionar = array[0]
  
   return selecionar


}

// Exercício 10

function retornaUltimoElemento(array) {
   // implemente sua lógica aqui

   let lastArray = array
   let selecionar = array[lastArray.length-1]
  
   return selecionar 

}

//Exercício 11

function trocaPrimeiroEUltimo(array) {
   // implemente sua lógica aqui

  let first = array[0]
  array[0] =array[array.length-1]
   array[array.length-1] = first
   return array

}

// Exercício 12

function checaIgualdadeDesconsiderandoCase(string1, string2) {
   // implemente sua lógica aqui

   const check = string1.length == string2.length

   return check
}

// Exercício 13

function checaRenovacaoRG() {
   // implemente sua lógica aqui
const currentYear = Number(prompt(`ano atual ? : `))
const yearsOfBirth = Number(prompt(`Qual Ano Você Nasceu? :`))
const yearOfIndentify = Number(prompt(`Em que Ano Sua Carteira foi emitida ? :`))

const user = currentYear - yearsOfBirth
const ageIdentify = currentYear - yearOfIndentify
const check = (user < 21 && ageIdentify > 4) || (( user  > 20 && user < 50) && ageIdentify > 9 )|| (user > 49 && ageIdentify > 14) 
console.log(check) 
 
}

// Exercício 14

function checaAnoBissexto(ano) {
   // implemente sua lógica aqui
}

// Exercício 15

function checaValidadeInscricaoLabenu(pessoa) {
   // implemente sua lógica aqui




}



//  1. Leia o código abaixo:


//  a) Explique o que o código faz. Qual o teste que ele realiza? 
// é um teste para mostrar se ele é divisivel por dois

//  b) Para que tipos de números ele imprime no console "Passou no teste"? 
//Todos que são diviseis por dois

//  c) Para que tipos de números a mensagem é "Não passou no teste"?
// Os que não são divisiveis por dois


//-----------------------------------------------//

// 2. O código abaixo foi feito por uma pessoa desenvolvedora, contratada para automatizar algumas tarefas de um supermercado:

//   a) Para que serve o código acima?

// Escolher determinada fruta é saber o preço

//    b) Qual será a mensagem impressa no console, se o valor de fruta for `"Maçã"`?

//será sempre inserido o valor da maçã

//    c) Considere que um usuário queira comprar uma `Pêra`, qual seria a mensagem impressa no console se retirássemos o `break` que está logo acima do `default` (o `break` indicado pelo comentário "BREAK PARA O ITEM c.")?

//Ele vai continuar executando as linhas de codigo , é o valor inserido da pera sera "5"


//--------------------------------------//  

// 3. Leia o código abaixo:



//  a) O que a primeira linha está fazendo?
//Pede para digitar um Número

//  b) Considere um usuário digitou o número 10. Qual será a mensagem do terminal? E se fosse o número -10?

// 10 : "Esse número passou no teste"
// vai ocorrer um erro  

// c) Haverá algum erro no console? Justifique usando os conceitos de bloco ou escopo.

// sim a varivel let mensagem ( não compartilha com quem ta fora do escopo)

//-----------------------------------------------------//

// 1. Faça um programa que pergunta ao usuário qual a idade dele e imprima no console se ele/ela pode dirigir (apenas maiores de idade).

//  a) Faça um `prompt` para receber a idade do usuário e guarde em uma variável.
/*
const ages = Number(prompt("How old are you : ? "))


//  b) Garanta que essa variável é do tipo `Number`, você deve usar o cast para number para isso.

// c) Agora veja se essa idade do usuário corresponde à idade mínima que permite dirigir. Se sim, imprima no console `"Você pode dirigir"`, caso contrário, imprima `"Você não pode dirigir."`

if (ages >= 18) {
    console.log("you can drive")
} else {
    console.log("You can't drive")

}



2. Agora faça um programa que verifica que turno do dia um aluno estuda. Peça para digitar **M** (matutino) ou **V** (Vespertino) ou **N** (Noturno). Imprima no console a mensagem "Bom Dia!", "Boa Tarde!" ou "Boa Noite!". Utilize o bloco `if/else`
    


const mornings = prompt("Which shift do you study")



// if (mornings === "V") {
//     console.log("Good afternoon ")
// } else if (mornings === "N") {
//     console.log("Good Night")
// } else if (mornings === "M") {
//     console.log("Good Morning")
// } else {

//     console.log("You are not Register")
// }


switch (mornings) {
    case "M" : console.log("Good Morning")
        break;
    case "N" : console.log("Good Night")     
        break;   
    case "V" : console.log("Good afternoon")
        break;
    default:
      
}



4. Considere a situação: você vai ao cinema com um amigo ou amiga, porém ele/ela só assistirá a um filme com você se ele for do gênero fantasia **e** se o ingresso está abaixo de 15 reais. Faça um código que pergunta ao usuário qual o gênero de filme que vão assistir e outra pergunta sobre o preço do ingresso, então verifique se seu amigo ou amiga vai topar assistir o filme. Caso positivo, imprima no console a mensagem: `"Bom filme!"`, caso contrário, imprima `"Escolha outro filme :("`



const question = prompt("What genre are you going to watch? : ")

const price = prompt ("What is the ticket price? : ")

const lunch = prompt (" Which snack will you choose? : ")

if (question === "fantasy" && price >= 15)  {
    console.log("Have a nice filme :))")
    console.log("Enjoy your " + lunch)
}else{
    console.log("Chose another film")

}
*/







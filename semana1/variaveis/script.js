/* Exercícios de interpretação de código 
1. Analise o programa abaixo e diga o que será impresso no console, **SEM EXECUTAR o programa.**

    ```jsx
    let a = 10
    let b = 10                            

    console.log(b)                        Será impresso : 10 10 5

    b = 5
    console.log(a, b)
    ```






2. Analise o programa abaixo e diga o que será impresso no console, **SEM EXECUTAR o programa.**

    
    let a = 10
    let b = 20
    c = a
    b = c
    a = b                        /sera impresso 10 10 10

    console.log(a, b, c)   
    





3. Analise o programa abaixo, entenda o que ele faz e **sugira melhores nomes para as variáveis**. Lembre-se que devemos escolher nomes significativos, usar o padrão **camelCase**. Alem disso, os nomes não podem começar com números ou caracteres especiais.

    
    let p = prompt("Quantas horas você trabalha por dia?")
    let t = prompt("Quanto você recebe por dia?")
    alert(`Voce recebe ${t/p} por hora`)                    /ele Recebe os Valores e divide o numero de horas pelo o numero dias trabalhados.


    






*/

/* Exercicios de Escrita */


// a) Declare uma variável para armazenar um nome, sem atribuir um valor.
    let nome  
    
//b) Declare uma variável para armazenar uma idade, sem atribuir um valor.

    let age                     

// c) Imprima na tela o tipo dessas variáveis que acabou de criar, usando o comando typeof.

    console.log (" A variavel name é ", typeof nome)
    console.log ("A variavel age é" ,  typeof age)

/* d) Reflita: por que esse tipo foi impresso? Escreva a resposta em um comentário de código.

     As variaveis não estão recebendo um valor, por isso retorna indefinido
*/

// e) Pergunte ao usuário seu nome e sua idade, atribuindo esses dois valores às variáveis que acabou de criar.

     nome = prompt ("Qual é o seu nome?")
     age = prompt ("Quantos anos você tem?")

// f) Novamente, imprima na tela o tipo dessas variáveis. O que você notou? Escreva em um comentário de código.
    
    console.log ("A variavel name é uma " , typeof nome)
    console.log ("A variavel age é uma ", typeof age)   /* Prompt sempre ira retornar uma string */

// g) Para finalizar, imprima na tela a mensagem: "Olá nome,  você tem idade anos". Onde nome e idade são os valores que o usuário inseriu
    
    console.log("Ola ", nome, "você tem ", age , "Anos");


// ---------------------------------------------------------------//


// 2. Escreva um programa que faça 3 perguntas de Sim ou Não, armazenado em uma variável. Por exemplo: "Você está usando uma roupa azul hoje?". Depois, siga os passos:

// a) Crie três novas variáveis, contendo as respostas
const firstQuestion = "Você tem Cachorro?"
const secondQuestion = "Você ta usando roupa Azul ?"
const thirdQuestion = "Você sabe programar ?"
 // b) Imprima na tela todas as perguntas seguidas por suas respectivas respostas. Por exemplo:
const dog = prompt(firstQuestion)
const blue = prompt(secondQuestion)
const dev = prompt(thirdQuestion)

console.log(firstQuestion+dog)
console.log(secondQuestion+blue)
console.log(thirdQuestion+dev)

 // 3. Dadas duas variáveis a e b com valores diferentes, troque o conteúdo delas sem atribuir diretamente os valores!

    let a = 10
    let b = 25
    let c = 10

    a = b
    b = c


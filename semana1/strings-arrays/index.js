
              //  Exercícios de interpretação de código

// 1.  Indique todas as mensagens impressas no console, **SEM EXECUTAR o programa**.

/*
let array
console.log('a. ', array)  // a , undefined

array = null
console.log('b. ', array)  // b , null (undefined)

array = [3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]
console.log('c. ', array.length)                 // "c". , 11

let i = 0
console.log('d. ', array[i])  // d , 3

array[i+1] = 19
console.log('e. ', array) // Array 11  // 3, 19, 5, 6, 7, 8, 9, 10, 11, 12, 13


const valor = array[i+6]      // f. 9
console.log('f. ', valor)



2. Leia o código abaixo com atenção 


const frase = prompt("Digite uma frase")

console.log(frase.toUpperCase().replaceAll("A", "I"), frase.length)


Qual será o valor impresso no console se a entrada do usuário for: `"Subi num ônibus em Marrocos"`?
                     
                //SUBI NUM ONIBUS EM MIRROCOS






            Exercícios de escrita de código


1. Faça um programa que pergunte ao usuário seu nome e seu e-mail. Em seguida, imprima na tela a seguinte mensagem:

O e-mail `emailDoUsuario` foi cadastrado com sucesso. Seja bem-vinda(o), `nomeDoUsuario`!

    



const userName = prompt('Qual seu nome:  ?')
const email = prompt('Qual o seu email : ?')


console.log(` O e-mail  ${email} foi cadastrado com suceso. Seja bem vinda(o), ${userName}  ` )




2. Faça um programa que contenha um array com 5 das suas comidas preferidas, armazenado em uma variável. Em seguida, siga os passos:

    a) Imprima na tela o array completo

    b) Imprima na tela a mensagem "Essas são as minhas comidas preferidas: ", seguida por cada uma das comidas, **uma embaixo da outra**.

    c) Aqui vai um desafio: pergunte ao usuário uma comida preferida. Troque a segunda comida da sua lista pela inserida pelo usuário. Imprima na tela a nova lista
    





const favoriteFood = ['açai', 'pizza', 'parmejiana', 'sorvete', 'uva']



console.log(`Essas São minhas comidas preferidas: `)
console.log(favoriteFood[0])
console.log(favoriteFood[1])
console.log(favoriteFood[2])
console.log(favoriteFood[3])
console.log(favoriteFood[4])



const userFood = prompt("Qual Sua Comida preferida")
favoriteFood[1] = userFood
console.log(favoriteFood)





3. Faça um programa, seguindo os passos:

    a) Crie um array vazio e guarde-o em uma variável, chamada `listaDeTarefas`

    b) Pergunte ao usuário 3 tarefas que ele precise realizar no dia e armazene-as, uma por uma, no array

    c) Imprima o array na tela

    d) Peça ao usuário que digite o **índice** de uma tarefa que ele já realizou: 0, 1 ou 2 

    e) Remova da lista o item de índice que o usuário escolheu.

    f) Imprima o array na tela






const listaDeTarefas = []

const primeira = prompt(`Primeira Tarefa : `)
const segunda = prompt(`Segunda Tarefa : `)
const Terceira = prompt(`Terceira Tarefa : `)

listaDeTarefas.push(primeira)
listaDeTarefas.push(segunda)
listaDeTarefas.push(Terceira)

console.log(listaDeTarefas)

const tarefaRealizada = prompt("Digite tal tarefa")
listaDeTarefas.splice(Number(tarefaRealizada),1)

console.log(listaDeTarefas)

*/ 









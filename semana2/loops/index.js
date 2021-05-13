// 1. O que o código abaixo está fazendo? Qual o resultado impresso no console?

    
//     let valor = 0
//     for(let i = 0; i < 5; i++) {
//       valor += i
//     }
//     console.log(valor)
 
// Ele eśta somando a variavel valor  com o i

// 10 


// 2. Leia o código abaixo:

//     `
//     const lista = [10, 11, 12, 15, 18, 19, 21, 23, 25, 27, 30]
//     for (let numero of lista) {
//       if (numero > 18) {
//     		console.log(numero)
//     	}
//     }
    

//     a) O que vai ser impresso no console?

            // Todo Número que for maior que 18

//     b) Se eu quisesse acessar o **índice** de cada elemento dessa lista, o `for...of...` é suficiente? Se sim, o que poderia ser usado para fazer isso?

        //Poderia usar o metódo Index para acessa-la
 
        
//  3. Qual seria o resultado impresso no console, se o usuário digitasse o número `4` ?

       
 
//  const quantidadeTotal = Number(prompt("Digite a quantidade de linhas: "))
//  let quantidadeAtual = 0
//  while(quantidadeAtual < quantidadeTotal){
//    let linha = ""
//    for(let asteriscos = 0; asteriscos < quantidadeAtual + 1; asteriscos++){
//      linha += "0"
//    }
//    console.log(linha)
//    quantidadeAtual++
//  }

//  Resposta : 0 , 00, 000 , 0000 , (4)



        //------------------------------------------//

    // 1. Pergunte ao usuário quantos bichinhos de estimação ele tem e guarde esse dado em uma variável. 

    // a) Se a quantidade for 0, imprima no console "Que pena! Você pode adotar um pet!"

    // b) Se a quantidade for maior que 0, solicite que o usuário digite os nomes deles, um por um, e guarde esses nomes em um array

    // c) Por fim, imprima o array com os nomes dos bichinhos no console


// const manyPets =  () =>{

//     let arrayOfPets = []

//     let pets = Number(prompt("How many pets you have :"))
//     if (pets ==0) {
//         console.log(" What a pity you need to adopt a pet :)")
//     }else
//     for(let i = 0; i < pets; i ++ ){
//         let names = prompt("What Their Names : ?")
//         arrayOfPets.push(names)
//         console.log(arrayOfPets)
//     }
    


// }

// manyPets()


//2 2. Considere que você tenha acesso a um `array`  (chamado de 'array original') que é composto somente de números. Baseando-se nisso, crie uma função para cada um dos itens abaixo, realizando as operações pedidas:

// a) Escreva um programa que **imprime** cada um dos valores do array original.

//--------------Variaveis---------------//

let originalArray = [80, 30, 130, 40, 60, 21, 70, 120, 90, 103, 110, 55]


//--------------------------///



// const printValor = () => {
//     for(let list of originalArray){
//         console.log(list)


//     }

    


// }


// printValor()


// // b) Escreva um programa que **imprime** cada um dos valores do array original divididos por 10



// const divisorValor = () => {
//     for(let list of originalArray){
        
//         let divisor = list/10
        
//         console.log(divisor)


//     }

    


// }


// divisorValor()




// c) Escreva um programa que **crie** um novo array contendo, somente, os números pares do array original e **imprima** esse novo array

// const parValor = () => {
    
//     for(let listPar of originalArray){
//         let arrayPar = []
//         if (listPar % 2 === 0) {
//             console.log(listPar)
            
            
//         }

        
        
//     }

   
    
// }


// parValor()



// d) Escreva um programa que **crie** um novo array contendo strings, da seguinte forma: "O elemento do índex `i` é: `numero`". Depois, **imprima** este novo array.

// e) Escreva um programa que imprima no console o maior e o menor números contidos no array 
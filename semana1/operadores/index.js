//1 1. Leia o código abaixo. Indique todas as mensagens impressas no console, **SEM EXECUTAR o programa**.
/*
const bool1 = true
const bool2 = false
const bool3 = !bool2

let resultado = bool1 && bool2
console.log("a. ", resultado)            // False

resultado = bool1 && bool2 && bool3 
console.log("b. ", resultado)            // False

resultado = !resultado && (bool1 || bool2) 
console.log("c. ", resultado)               //true

console.log("d. ", typeof resultado)      //Tipos Boolean



//22. Seu colega se aproxima de você falando que o código dele não funciona como devia.  Vamos ajudá-lo: consegue perceber algum problema? O que será impresso no console? 

    ```jsx
    let primeiroNumero = Number(prompt("Digite um numero!"))
    let segundoNumero = Number(prompt("Digite outro numero!"))

    const soma = primeiroNumero + segundoNumero                                       *Sera imprimido uma string ou seja a concatenação*
                                                                                       *faltou o Number* 

    console.log(soma)
    ```









*/ 



//1. Faça um programa que:

   // a) Pergunte a idade do usuário

   // b) Pergunte a idade do seu melhor amigo ou da sua melhor amiga

  //  c) **Imprima na console** a seguinte mensagem: "Sua idade é maior do que a do seu melhor amigo?", seguido pela resposta (`true` ou `false`)

  //  d) **Imprima na console** a diferença de idade (não tem problema se sair um número negativo)

/*
 let name = Number(prompt("Qual é sua idade? :"))
 let secondName = Number(prompt("Qual a idade so seu amigo ? :"))

let diference = name-secondName;

console.log('Sua idade é maior que a do seu melhor amigo ? :', name >= secondName);
console.log('Diferença de idade entre vocês : ' , diference ) */

//-------------------------------------------------------------------//

//2. Faça um programa que:

//a) Peça ao usuário que insira um número **par**

//b) Imprima na console **o resto da divisão** desse número por 2.

//c) Teste o programa com diversos números pares. Você notou um padrão? Escreva em um comentário de código.
// Sempre será 0


//d) O que acontece se o usuário inserir um número ímpar? Escreva em um comentário de código
// continuar sendo 0 afinal ele ta dividindo o numero por ele mesmo praticamente


/*
let parNumber = Number(prompt("Insira um Número Par : "))


let result = parNumber % parNumber /2


console.log('O Resultado é : ', result)





3. Faça um programa que pergunte ao usuário sua idade em anos. Depois, imprima no console 

    a) A idade do usuário em meses

    b) A idade do usuário em dias

    c) A idade do usuário em horas






let ages = Number(prompt("Qual a sua idade em anos ? : "))

let month = ages *12 

let days = ages * 365

let hours = ages * 8760

console.log('Idade do usuario em meses : ', month)
console.log('Idade do Usuario em dias : ', days)
console.log('idade do usuario em horas : ', hours )



4. Faça um programa que pergunte ao usuário dois números. Em seguida, faça as operações e imprima no console as seguintes mensagens:

    
    O primeiro numero é maior que segundo? true
    O primeiro numero é igual ao segundo? false
    O primeiro numero é divisível pelo segundo? true
    O segundo numero é divisível pelo primeiro? true
    

  


    let firstNumber = Number(prompt('Digite um Número: '))
    let secondNumber = Number(prompt('Digite Outro Número : '))

    console.log(' O primeiro número é maior que o segundo ? :', firstNumber > secondNumber )
    
    console.log(' O primeiro número é igual ao segundo ? :', firstNumber == secondNumber )
    

    console.log(' O primeiro número é divisivel pelo segundo ? :', (firstNumber%secondNumber)===0)
    
    console.log(' O segundo número é divisivel pelo primeiro ? :', (secondNumber%firstNumber)===0 )

    */
    




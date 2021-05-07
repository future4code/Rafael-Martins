//1 - a : Vai Imprimir os valores 5 é 50

//1 - b : vai retornar um erro dizendo que não é uma função



//2 - a :                               //não consegui fazer a dois :,(
 //   - b :








/*

a) A função não deve receber nenhum parâmetro e deve imprimir uma mensagem falando algumas informações sobre você, como: 

```
"Eu sou Caio, tenho 23 anos, moro em São Paulo e sou estudante."
```

Troque o nome, idade, cidade e se é estudante ou não por informações sobre você. Lembrando que a função não possui entradas, apenas imprime essa mensagem.

*Resposta : *


unction rafael (){
   
    console.log(`Eu sou Rafael, tenho 20 anos, moro em Minas Gerais e sou Estudante`)
    

 
  }

 rafael ()



                                // -----------------------------------//





b)  Agora escreva uma função que receba 4 parâmetros que correspondem às informações de uma pessoa: o nome (`string`), a idade (`number`), a cidade (`string`) e uma profissão (`string`). Ela deve retornar uma `string` que unifique todas as informações da pessoa em uma só mensagem com o template:

```
Eu sou [NOME], tenho [IDADE] anos, moro em [ENDEREÇO] e sou [PROFISSÃO].
```


*Resposta :* 

function imprime (nome , idade , cidade , profissao){

   
const pessoa = (`Eu sou ${nome}, tenho ${idade} anos, moro em ${cidade} e sou ${profissao}. `)

return pessoa

}

const exemplo = imprime("Rafael", 20, "Minas Gerais", "Full Stack" ) 

console.log(exemplo)










                    //--------------------------------------------------------//


2. Escreva as funções explicadas abaixo:

    a) Escreva uma função que receba 2 números como parâmetros, e, dentro da função, faça a soma das duas entradas e retorne o resultado. Invoque a função e imprima no console o resultado.

    
    function soma ( n1 , n2 ){

    const numbers = n1 + n2    
    return numbers

}

    const resultado = soma (4 , 5)

    console.log(resultado)

    
    
    b) Faça uma função que recebe 2 números e retorne um booleano que informa se o primeiro número é **maior ou igual** ao segundo.

  
    function number ( n1 , n2 ){

      const maior = n1 > n2  
      return maior  


    }

    const teste = number ( 3 , 2 )
    console.log(teste)

  
  
  
    c) Escreva uma função que receba um número e devolva um booleano indicando se ele é par ou não

   
    function number ( n1  ){

        const maior = n1
        return maior  % 2 == 0
  
  
      }
  
      const teste = number ( 7 )
      console.log(teste)
   
   
   
    d) Faça uma função que recebe uma mensagem (`string`) como parâmetro e imprima o tamanho dessa mensagem, juntamente com uma versão dela em letras maiúsculas.

        const outraFuncao =  function mensage (string){
        

       
        const tamanho = string.length
      
        return string.toUpperCase() + tamanho
     
}


    const teste = outraFuncao (" uma mensagem muito grande é legal ")
    console.log(teste)



3. Crie uma função para cada uma das operações básicas (soma, subtração, multiplicação e divisão). Em seguida, peça para o usuário inserir dois números e chame essas 4 funções com esses valores inputados pelo usuário sendo o argumento. Por fim, mostre no console o resultado das operações:

    
    Números inseridos: 30 e 3
    Soma: 33
    Diferença: 27
    Multiplicação: 90
    Divisão: 10
    



const  somar = function (n1 , n2){
     const somarNumeros = n1 + n2   
    console.log("soma : " + somarNumeros)  
     return somarNumeros  

    }

    const multiplicação = function (n1 , n2){
        const multiplicarNumeros = n1 * n2   
        console.log("diferença : " + multiplicarNumeros)  
           return multiplicarNumeros
       }    
       
    
  
       const divisão = function (n1 , n2){
        const dividirNumeros = n1 / n2   
        console.log("divisão : " + dividirNumeros)  
           return dividirNumeros
       }


       const resto = function (n1 , n2){
        const restoNumeros = n1 % n2   
        console.log("resto : " + restoNumeros)  
        return restoNumeros 
        
        
       }



        const firstNumber = Number(prompt("Insira um Numero : "))
  const secondNumber = Number(prompt ("Insira outro Numero : "))
  

       console.log(" Os numeros Escolhidos são : " , firstNumber , " é " , secondNumber)

  somar(firstNumber , secondNumber)
  multiplicação(firstNumber, secondNumber)
  divisão(firstNumber , secondNumber)
  resto(firstNumber , secondNumber)



 */





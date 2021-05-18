/**
 * EXEMPLO DE UTILIZAÇÃO DA 'comprarCarta'
 * 
 * 
    const carta = comprarCarta(); // Sorteia uma carta. Por exemplo, o rei de ouros
    
    console.log(carta.texto) // imprime o texto da carta. Exemplo: "K♦️" (indica "K" de ouros)
    console.log(carta.valor) // imprime o valor da carta (um número). Exemplo: 10 (dado que "K" vale 10)
 * 
 * 
 * 
 */



  

  
function sumCards(number1 , number2){

      return number1 + number2;

   


}

let card1 = comprarCarta()
let card2 = comprarCarta()
let card3 = comprarCarta()
let card4 = comprarCarta()

let cartinhaDoUsuario = sumCards(card1.valor , card2.valor)

let cartinhaDoPc = sumCards(card3.valor , card4.valor)


function userCards() {
  
      

   return console.log(`Usuário cartas - ${card1.texto} ${card2.texto} - Pontuação ${cartinhaDoUsuario}`) 
}



function computerCards() {

   return console.log(`Computador cartas - ${card3.texto} ${card4.texto} - Pontuação ${cartinhaDoPc}`)
}





   const welcome = alert("Bem Vindo ao jogo de Black Jack")

 



   if (confirm("Deseja Iniciar uma nova rodada ?") ){
        
      


         userCards() 
         computerCards()
        
      if (cartinhaDoUsuario > cartinhaDoPc ) {
         console.log(`O usuario Ganhou`)
      
      }else if (cartinhaDoUsuario < cartinhaDoPc){

         console.log(`O Pc Ganhou`)

      }else if (cartinhaDoUsuario === cartinhaDoPc) {
         console.log(`Empate`)
      }
      


   }else {

      console.log(" O jogo Acabou")

   }


   
   
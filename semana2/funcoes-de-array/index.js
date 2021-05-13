
//---------------- **Exercícios de interpretação de código** ---------------//

//1 : O nome das três instrutoras em forma de objeto é array

  //2 Amanda Rangel , Laís Petra , Letícia Chijo.

    //3 não vai escrever a "chijo"











//---------------- **Exercícios de Escrita de código** ---------------//






// 1. Dado o seguinte array de cachorrinhos que são clientes de um pet shop, realize as operações pedidas nos itens abaixo utilizando as funções de array **map** e **filter:**





// a) Crie um novo array que contenha apenas o nome dos doguinhos

//      const nameList = pets.map((names) => {
//     return names.nome
// })

// console.log(nameList)



// b) Crie um novo array apenas com os [cachorros salsicha](https://www.youtube.com/watch?v=YQ404vwjzus)


// const sausageDogs = pets.filter((sausage) => {

// return sausage.raca === "Salsicha"


// })


// console.log(sausageDogs)



// c) Crie um novo array que possuirá mensagens para enviar para todos os clientes que são poodles. A mensagem deve ser: "Você ganhou um cupom de desconto de 10% para tosar o/a `[NOME]`!"

// const poodle = pets.filter((pets,index,array)=>{
//         return pets.raca === "Poodle"
    
    
    
    // }).map((pets, index , array)=>{
    
    //     return `Você ganhou um cupom de desconto de 10% para tosar o/a ${pets.nome}`
    
    
    
    // })
     
    
    // console.log(poodle)








 //2 .2. Dado o seguinte array de produtos, realize as operações pedidas nos itens abaixo utilizando as funções de array **map** e **filter:**

   
 const produtos = [
       { nome: "Alface Lavada", categoria: "Hortifruti", preco: 2.5 },
       { nome: "Guaraná 2l", categoria: "Bebidas", preco: 7.8 },
       { nome: "Veja Multiuso", categoria: "Limpeza", preco: 12.6 },
       { nome: "Dúzia de Banana", categoria: "Hortifruti", preco: 5.7 },
       { nome: "Leite", categoria: "Bebidas", preco: 2.99 },
       { nome: "Cândida", categoria: "Limpeza", preco: 3.30 },
       { nome: "Detergente Ypê", categoria: "Limpeza", preco: 2.2 },
       { nome: "Vinho Tinto", categoria: "Bebidas", preco: 55 },
       { nome: "Berinjela kg", categoria: "Hortifruti", preco: 8.99 },
       { nome: "Sabão em Pó Ypê", categoria: "Limpeza", preco: 10.80 }
    ]
 
    

    // a) Crie um novo array que contenha apenas o nome de cada item

    // const nameList = produtos.map((names) => {
    //     return names.nome
    // })
    
    // console.log(nameList)



    // b) Crie um novo array que contenha um objeto com o nome e o preço de cada item, aplicando 5% de desconto em todos eles
     
    // const copiaDaListaComNovoPreco = produtos.map((produto) => { return {...produto, preco: produto.preco * 0.95 }})

    // const stringComNovosPrecos = copiaDaListaComNovoPreco.map((produto)=>{
        
    //         return {
    //             nome : produto.nome,
    //             preco: produto.preco

    //         }
    //    })

       
    //    console.log(stringComNovosPrecos)
    
    
    // c) Crie um novo array que contenha apenas os objetos da categoria Bebidas

    //   const drinkList = produtos.filter((nome) => {
    //     return nome.categoria == "Bebidas"
    // })
    
     
    
    // console.log(drinkList)

  
    // d) Crie um novo array que contenha apenas os objetos cujo nome contenha a palavra "Ypê"


    // function ypeList(produto){
        
    //     return produto.nome.includes("Ypê")


    // }

    // let ype = produtos.filter(ypeList)

    // console.log(ype)

    // e) Crie um novo array onde cada item é uma frase "Compre [NOME] por [PREÇO]". Esse array deve conter frases apenas dos itens cujo nome contenha a palavra "Ypê"

    
    // function buyer (ype){
        
    //     ype.nome.includes("Ypê")
    //    return ype
    // }



    // let buyMensage = produtos.map(buyer)

    // console.log(buyMensage)
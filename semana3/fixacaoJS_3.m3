
```
function calculaNota(ex, p1, p2) {
  // Escreva seu código aqui
 
 const mediaPonderada = ex * 1 + p1 * 2 + p2 *3 
  let resultado = mediaPonderada / 6
  if (resultado >= 9) {
      return "A"
  }else if (resultado < 9 && resultado >= 7 ) {
      return "B"
  }else if (resultado < 7.5 && resultado >= 6) {
      return "C"
  }else if (resultado < 6) {
      return "D"
  }
    
  
}


```

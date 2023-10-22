// Descrição da atividade: fazer os exercícios para praticar. Não precisa entregar as respostas. 
// Objetivo: 
// • Praticar estrutura de decisão for; 
// • Tabela ASCII; 
// • Array; 
// • parseInt.

const prompt = require('prompt-sync')();

/*Exercício 1
O  programa  a  seguir  imprime  no  console  os  números  de  0  a  9.  Alterar  o  código  para  imprimir
somente os números ímpares*/

// for(let i = 0; i < 10; i++ ){
//     if ( i % 2 == 1 ){
//     console.log(i);
//     }
//   }


/*Exercício 2
Alterar o código o Exercício 1 para exibir os números ímpares na ordem decrescente.*/

// for(let i = 9; i >= 0; i -= 2 ){
//     console.log(i);
//   }


/*Exercicio 3
  Complete o código para imprimir no console os caracteres da placa do automóvel.
let placa = prompt("Entre com a placa:");
for(let i = _____; i < _____________; ______ ){
  console.log(_____________);
} */

// let placa = prompt("Entre com a placa:");
// for(let i = 0; i < placa.length; i ++){
//     console.log(placa[i]);
// }

/* Exercicio 4 Alterar o código do Exercício 3 para imprimir o código ASCII de cada caractere. 
O método charCodeAt retorna código do caractere na tabela ASCII
*/

// let placa = prompt("Entre com a placa:");
// for (let i = 0; i < placa.length; i++) {
//     placaAux = placa.charCodeAt([i])
//     console.log(placaAux);
// }

/*Exercício 5: Alterar o código do Exercício 4 para imprimir somente os dígitos numéricos. 
Na tabela ASCII os dígitos numéricos possuem valores de 48 a 57. 
Dica: será necessário comparar se o valor ASCII do caractere está no intervalo [48,57]. 
*/

// let placa = prompt("Entre com a placa:");
// for (let i = 0; i < placa.length; i++) {
//     placaAux = placa.charCodeAt([i])
//     if (placaAux > 48 && placaAux < 57) {
//         console.log(placaAux);
//     }
// }

let temDinheiro = true ;
let estaEnsolarado =true;
let carroEstaNaGaragem =false;

let resultadoE = "voce vai ao shopping? ";
resultadoE += temDinheiro && estaEnsolarado;
console.log(resultadoE)

let resultadoOU = "você vai no shpping";
resultadoOU += estaEnsolarado || carroEstaNaGaragem;
console.log(resultadoOU)
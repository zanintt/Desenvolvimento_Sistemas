function executarOperacao(a, b, operacao){
    return operacao(a, b);
}

function multiplicar (a, b){
    return a * b;
}

function adicao (a, b){
    return a + b;
}

let resultado = executarOperacao(5, 5, adicao);
console.log ("resultado da soma:" + resultado); 

function executarOperacao (a, b, Operacao) {
    return Operacao (a, b);
}
function multiplicar (x , y){
    return x * y;
}

let resultado = executarOperacao (45, 69, multiplicar);
console.log ("multiplicação: " + resultado);
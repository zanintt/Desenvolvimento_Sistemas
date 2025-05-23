const nota1 = 5.1;
const nota2 = 1.1;
const nota3 = 2.1;

function minima(n1, n2) {
    return n1 <= n2 ? n1 : n2;
}

function mediaDuasMaiores(n1, n2, n3) {
    const menorNota = minima(n1, minima(n2,n3));

    if (menorNota === n1) {
        return (n2 + n3) / 2;
    } else if ( menorNota === n2) {
        return (n1 + n3) / 2;
    } else {
        return ( n1 + n2);
    }
}

function digital_root(n) {
    // ...
    
    let arreglo = n.toString().split("");
    let numero = 0;
    while (arreglo.length>1) {
        numero = arreglo.reduce(function (a,b) {
            return parseInt(a) + parseInt(b);
        });
        arreglo = numero.toString().split("");
    }
    return numero;
}



let suma =  digital_root(493193);

console.log(suma);


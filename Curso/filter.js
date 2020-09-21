// let numeros = [1,2,3,4,5,6];
// console.log(numeros);

// let pares = numeros.filter( element => element%2==0 );
// console.log(pares);

// let impares = numeros.filter( (a) => a%2==1 );
// console.log(impares);

let nombres = ['Franco','Karen','Karla','Frescia'];

let mayores_a_5 = nombres.filter(function (a,b,c) {
    console.log(a);
    console.log(b);
    console.log(c);
});

function iguales_a_5(elemet) {
    return elemet.length == 5;
}

let nombre_de_5 = nombres.filter(iguales_a_5);
console.log(nombre_de_5);


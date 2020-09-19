snail = function(array) {
    // enjoy
    console.log(array);
    let arreglo = [];
    for (let i = 0; i < array.length; i++) {
        for (let y = 0; y < array.length; y++) {
            arreglo.push(array[i][y]);            
        }
    }
    return arreglo;
}

let cero = []

let una = [
    [1]
]
00

let cuadrado = [
    [1,2],
    [3,4]
]
00,01,11,10

let cubo = [
    [1,2,3],
    [4,5,6],
    [7,8,9]
]
00,01,02,12,22,21,20,10,11

let cuarta = [
    [1,2,3,4],
    [5,6,7,8],
    [9,10,11,12],
    [13,14,15,16]
]
00,01,02,03,
13,23,33,32,
31,30,20,10,
11,12,22,21

console.log(snail(cuarta));
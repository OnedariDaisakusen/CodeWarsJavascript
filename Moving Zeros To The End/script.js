var moveZeros = function (arr) {
    // TODO: Program me
    console.log(arr);
    let arreglo = arr.filter(function (x) {
        return x!==0;
    });
    console.log(arreglo);
    return ;
}

moveZeros([1,2,3,0,5,0,false,{},[],null]);
function persistence(n) {
    //code me
    let cont = 0;
    while (n>9) {
        n = n.toString().split('').reduce((a,b)=> a*b);
        cont++;
    }

    return cont;

}

let result = persistence(39);
console.log(result);
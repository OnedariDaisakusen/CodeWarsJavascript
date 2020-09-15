function expandedForm(num) {
    
    let numeros = [];
    for (let index = 0; index < num.toString().length; index++) {
        if(num.toString()[index] != 0){
            numeros.push(num.toString()[index]*Math.pow(10, num.toString().length - (index+1)));
        }
    }
    return numeros.join(' + ');
}

console.log(expandedForm(70300));
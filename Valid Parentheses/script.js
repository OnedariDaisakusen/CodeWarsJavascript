function validParentheses(parens){
    //TODO 
    console.log(parens);

    let arreglo = parens.split("");
    let derecha = 0;
    let insquierda = 0;

    for (let index = 0; index < arreglo.length; index++) {
        if(arreglo[0]=='(' && arreglo[arreglo.length-1]==')' && arreglo[2]==')'){
            if(arreglo[index]==='(')derecha++
            else insquierda++;
        }else{
            return false;
        }
        
    }

    if(derecha == insquierda) return true;
    else return false;
    
}

function validParentheses2(parens) {
    console.log(parens);
    console.log(new Date);
    while (true) {
        if(parens=='(' || parens == ')' || parens == ')(' || parens == ''){
            break;
        }else{
            parens = parens.split('()').join('');
        }       
    }


    return parens=='' ? true: false;
}

function validParentheses3(parens) {

    console.log(parens);

    let indice = parens.split('').indexOf('()');

    console.log(indice);


}

console.log(validParentheses3('()()()'));
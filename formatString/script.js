function list(names){
    //your code here
    console.log(names);
    names = names.map( element => {
        return element.name;
    });

    let frase = names.reduce((a,b,c,d) => {
        console.log(a+b);
    });

    console.log(names);

}

list([ {name: 'Bart'}, {name: 'Lisa'}, {name: 'Maggie'} ]);
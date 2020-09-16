function expandedForm(num) {
    // Your code here

    return num.toString().split('').reduce(function (a,b,c,d) {
        console.log("a " + a);
        console.log("b " + b);
        console.log(Math.pow(10, d.length - 1));
       return (parseInt(a) * Math.pow(10, d.length - 1)) + parseInt(b);
    });
}

console.log(expandedForm(751));
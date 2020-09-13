// function narcissistic(value) {
//     // Code me to return true or false
//     if(Number.isInteger(value)){
//         let numeros = (`${value}`).split('');
//         let sum = 0;
//         numeros.forEach(element => {
//             sum+= Math.pow(Number.parseInt(element),numeros.length);
//         });
//         if(sum==value) return true;
//         else return false;

//     }
// }

let num = [1,2,3,4,5].reduce(function (a,b,c,d) {
    return a +b;
},);

// function narcissistic( value ) {
//     return ('' + value).split('').reduce(function(p, c){
//       return p + Math.pow(c, ('' + value).length)
//       }, 0) == value;
// }

console.log(num);
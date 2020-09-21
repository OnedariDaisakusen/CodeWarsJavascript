function arrayDiff(a, b) {
  return a.filter( (x) => !b.includes(x) );
}

function arrayDiff2(a, b) {
  return a.filter( (x) => b.indexOf(x) );
}

let result = arrayDiff([],[ 1, 2 ]);
console.log(result);
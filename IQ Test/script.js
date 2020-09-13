function iqTest(numbers){
  // ...

  let pares = 0;
  let impares = 0;

  let numeros = numbers.split(" ");
  console.log(numeros);

  numeros.forEach(element => {
      if (element%2==0) {
          pares++;
      }else{
          impares++;
      }
  });

  if(pares>impares){
      for (let i = 0; i < numeros.length; i++) {
          if(numeros[i]%2!=0){
              return (i+1);
          }
      }
  }else{
    for (let i = 0; i < numeros.length; i++) {
        if(numeros[i]%2==0){
            return (i+1);
        }
    }
  }

}

function iqTest2(numbers){
    numbers = numbers.split(" ").map(function(el){return parseInt(el)});
    
    var odd = numbers.filter(function(el){ return el % 2 === 1});
    var even = numbers.filter(function(el){ return el % 2 === 0});
    
    return odd.length < even.length ? (numbers.indexOf(odd[0]) + 1) : (numbers.indexOf(even[0]) + 1);
  }

console.log(iqTest("1 2 1 1"));
function firstNonRepeatingLetter(s) {
  // Add your code here
  console.log(s);
  let minuscula = s.toLowerCase();
  console.log(minuscula);
  for (let index = 0; index < minuscula.length; index++) {
    console.log(minuscula[index]);
    let rep = minuscula.split('').filter( x => x == minuscula[index]);
    console.log(rep);
    if(rep.length == 1) return s[index];    
  }
  return '';
}

console.log(firstNonRepeatingLetter('sTreSS'));
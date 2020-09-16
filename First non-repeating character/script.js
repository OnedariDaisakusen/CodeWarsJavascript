function firstNonRepeatingLetter(s) {
  // Add your code here
  let minuscula = s.toLowerCase();
  for (let index = 0; index < minuscula.length; index++) {
    let rep = minuscula.split('').filter( x => x == minuscula[index]);
    if(rep.length == 1) return s[index];    
  }
  return '';
}

console.log(firstNonRepeatingLetter('sTreSS'));
function anagrams(word, words) {

    let palabra = word.split('').filter((a,b,c) => c.indexOf( a ) == b).join('');
    let palabras = words.filter((a) => {
        if(word.length<a.length){
            return;
        }else{
            return a.split('').filter((a,b,c) => c.indexOf( a ) == b).sort().join('') == palabra;
        }
    });
    
    return palabras;
}

let anal = anagrams('abba',[ 'aabb',
'abab',
'abbaa',
'abbab',
'abbba',
'abcd',
'baaab',
'baab',
'baba',
'babaa',
'bbaa' ]);

console.log(anal);

// String.prototype.sort = function() {
//     return this.split("").sort().join("");
//   };
  
//   function anagrams(word, words) {
//     return words.filter(function(x) {
//         return x.sort() === word.sort();
//     });
//   }
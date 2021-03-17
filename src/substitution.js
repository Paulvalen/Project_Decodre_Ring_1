// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (e.g., helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const substitutionModule = (function () {
  // you can add any code you want within this function scope

  function substitution(input, alphabet, encode = true) {
    if(!alphabet || alphabet.length !==26) return false

    const baseAlphabet = 'abcdefghijklmnopqrstuvwxyz'
    input = input.toLowerCase()
    let result =''
       
    for(let j = 0; j < input.length; j++){       
      let inputIndexes = baseAlphabet.indexOf(input[j])
      //will keep the spaces in input 
      if(input[j].includes(' '))
        result += ' '
        //loop in alphabet to check if alphabet has unique characters 
        for(let i = 0; i < alphabet.length; i++){
          for(let l = i + 1; l < alphabet.length; l++){
            if(alphabet[i] === alphabet[l])          
            return false
          }
          if(inputIndexes === alphabet.indexOf(alphabet[i]) && encode){
            result += alphabet[i]
          }
        }        
        for(let k = 0; k < baseAlphabet.length; k++){
          if(!encode && alphabet.indexOf(input[j]) === baseAlphabet.indexOf(baseAlphabet[k]))
            result += baseAlphabet[k]
        }        
    }    
    return result    
  }
  
  return {
    substitution,
  };
})();

module.exports = substitutionModule.substitution;

// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (e.g., helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const caesarModule = (function () {
  // you can add any code you want within this function scope
  
    
  function caesar(input, shift, encode = true) {
    let alphabet = 'abcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyz'
    if(shift === 0 || !shift || shift < -25 || shift > 25)
      return false
    encode?shift:shift=-shift
    let result = ''
    input = input.toLowerCase()
    for(let i = 0; i < input.length; i++){     
      //find the index of input
      let firstIndex = alphabet.indexOf(input[i])
      let lastIndex = alphabet.lastIndexOf(input[i])      
      //shift the index and add to result      
      if(alphabet.includes(input[i]) && Math.sign(shift) === -1){
        result+=alphabet[lastIndex+shift]
      }
      else if(alphabet.includes(input[i])){ 
        result+=alphabet[firstIndex+shift]
      }
      else{
        result+=input[i]
      }
    }    
    return result
  }     

  return {
    caesar,
  };
})();

module.exports = caesarModule.caesar;

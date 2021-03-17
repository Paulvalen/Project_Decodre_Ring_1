// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (e.g., helper methods, variables, etc.) within the scope
// of the anonymous function on line 6


const polybiusModule = (function () {
  // you can add any code you want within this function scope

  function polybius(input, encode = true) {  
    
    alphabet = [['a','b','c','d','e'],['f','g','h','i/j','k'],['l','m','n','o','p'],['q','r','s','t','u'],['v','w','x','y','z']]
    //result variable
    let result = ''
    let decodeNumber = input.split(' ').join('')

    if(!encode && decodeNumber.length % 2 === 1){
      return false
    }

    for(let k = 0; k < input.length; k++){
      //mantain spaces 
      if(input[k].includes(' ')){
        result += ' '
      }
      //decode taking first two numbers from string and ignoring spaces
      if(!encode && !input[k].includes(' ')){
        let first = input[k+1]
        let second = input[k]
        let letters = alphabet[first - 1][second-1]
        result+=letters       
        k+=1 
      }     

      for(let i = 0; i < alphabet.length; i++){                     
        for(let j = 0; j < alphabet[i].length; j++){         
          if(alphabet[i][j].includes(input[k]) && encode){                 
              result += j+1
              result += i+1
          }
        }
      }
    }    
    return result
  }  

  return {
    polybius,
  };
})();

module.exports = polybiusModule.polybius;

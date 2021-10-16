//////////////////////////////////////////////////
function oneThroughTwenty() {  

    let meuRetorno = [];

    for(let index = 1; index <= 20; index++){
      meuRetorno.push(index);
    }

    return meuRetorno;
}

console.log(oneThroughTwenty())

//////////////////////////////////////////////////

function evensToTwenty() {
      
    let meuRetorno = [];

    for(let index = 1; index <= 20; index++){
      
      if(index % 2 === 0){
        meuRetorno.push(index);
      }
    }
    
    return meuRetorno;
}

console.log(evensToTwenty())

//////////////////////////////////////////////////

function oddsToTwenty() {
      
    let meuRetorno = [];

    for(let index = 1; index <= 20; index++){
      
      if(index % 2 === 1){
        meuRetorno.push(index);
      }
    }

    return meuRetorno;
    
}

console.log(oddsToTwenty())

//////////////////////////////////////////////////

function multiplesOfFive() {
    
    let meuRetorno = [];
    
    for(let index = 1; index <= 100; index++){

      if(index % 5 === 0){
        meuRetorno.push(index);
      }
    }

    return meuRetorno;
}

console.log(multiplesOfFive())

//////////////////////////////////////////////////

function squareNumbers() {
    
    let meuRetorno = [];
    
    for(let index = 1; index <= 10; index++){
      meuRetorno.push(index * index);
    }

      return meuRetorno;
}
 
 console.log(squareNumbers())

//////////////////////////////////////////////////

function countingBackwards() {

    let meuRetorno = [];

    for(let index = 20; index >= 1; index--){
      meuRetorno.push(index);
    }

    return meuRetorno;
}

  console.log(countingBackwards())

//////////////////////////////////////////////////

function evenNumbersBackwards() {

    let meuRetorno = [];

    for(let index = 20; index >= 1; index --){

      if(index % 2 === 0){
        meuRetorno.push(index);
      }
    }

    return meuRetorno;
}

console.log(evenNumbersBackwards())

//////////////////////////////////////////////////

function oddNumbersBackwards() {
    
    let meuRetorno = [];
    
    for(let index = 20; index >= 1; index--){

      if(index % 2 === 1){
        meuRetorno.push(index);
      }
    }

    return meuRetorno
 }
 
 console.log(oddNumbersBackwards())

//////////////////////////////////////////////////

function multiplesOfFiveBackwards() {
    
    let meuRetorno = [];

    for(let index = 100; index >= 1; index--){

      if(index % 5 === 0){
        meuRetorno.push(index);
      }
    }

    return meuRetorno;
}

console.log(multiplesOfFiveBackwards())

//////////////////////////////////////////////////

function squareNumbersBackwards() {
    
    let meuRetorno = [];
    
    for(let index = 10; index >= 1; index--){
      meuRetorno.push(index * index)
    }
    
    return meuRetorno;
}

console.log(squareNumbersBackwards())


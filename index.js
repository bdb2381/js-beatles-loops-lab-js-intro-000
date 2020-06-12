var emptyArray = []

function theBeatlesPlay(musicians, instruments){
  for (let num = 0; num < 4; num+=1){

      emptyArray.push( `${musicians[num]} plays ${instruments[num]}` )
      console.log(emptyArray)    //used to debug to see what is happening, if anything
    }
return emptyArray

}



var johnFactsArray = []

function johnLennonFacts(johnFactsArray){
  let counter = johnFactsArray.length
  let newFactsArray = []
  let arrayPos = 0

  while (counter > 0){
     newFactsArray.push(johnFactsArray[arrayPos] + "!!!")
    console.log(newFactsArray)  //used to debug to see what is happening, if anything
    counter -= 1
    arrayPos++
  }

return newFactsArray
}

/////////////
let i = 0;

function incrementVariable() {
  i = i + 1;
  return i;
}



var number = 1

function iLoveTheBeatles(number){
//create and store an emtpy var
do {
  let emptyArray = []
   emptyArray.push(`"I love the Beatles!"`)
} while incrementVariable(number) < 15

  return arrayOfIloveBeatles
}

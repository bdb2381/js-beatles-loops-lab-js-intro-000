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

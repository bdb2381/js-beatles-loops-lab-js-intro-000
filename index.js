var emptyArray = []

function theBeatlesPlay(musicians, instruments){
  for (let num = 0; num < 4; num+=1){

      emptyArray.push( `${musicians[num]} plays ${instruments[num]}` )
      //console.log(emptyArray)    use log to see function in action to debug
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
  //  console.log(newFactsArray)
    counter -= 1
    arrayPos++
  }


return newFactsArray


}

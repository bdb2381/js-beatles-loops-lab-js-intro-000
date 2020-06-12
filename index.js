var emptyArray = []

function theBeatlesPlay(musicians, instruments){
  for (let num = 0; num < 4; num+=1){

      emptyArray.push( `${musicians[num]} plays ${instruments[num]}` )
      //console.log(emptyArray)    use log to see function in action to debug
  }

return emptyArray

}


function johnLennonFacts(johnFactsArray){
  counter = 0
  while (counter <= johnFactsArray){
    [...johnFactsArray, "!!!"]
    console.log(johnFactsArray
    counter+=1
  }


return johnLennonFacts


}

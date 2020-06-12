// add solution here
//var musicians = ["John", "Bach", "Lady Gaga"]
//var instruments = ["guitar", "horn", "Piano"]
//var empty = []
var emptyArray = []

function theBeatlesPlay(musicians, instruments){
  for (let num = 0; num < 4; num+=1){

      emptyArray.push( `${musicians[num]} plays ${instruments[num]}` )
      console.log(emptyArray)
  }

return emptyArray

}

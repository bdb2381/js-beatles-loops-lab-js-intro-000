// add solution here
//var musicians = ["John", "Bach", "Lady Gaga"]
//var instruments = ["guitar", "horn", "Piano"]
//var empty = []
var emptyArray = []

function theBeatlesPlay(musicians, instruments){
  for (let num = 1; num <= musicians.length; num+=1){

      emptyArray.unshift( `${musicians[num]} plays ${instruments[num]}` )
  }

return emptyArray

}

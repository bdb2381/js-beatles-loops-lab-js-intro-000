// add solution here
//var musicians = ["John", "Bach", "Lady Gaga"]
//var instruments = ["guitar", "horn", "Piano"]
//var empty = []
var emptyArray = []

function theBeatlesPlay(musicians, instruments){
  for (let num = 0; num <= musicians; num+=1){

      emptyArray.unshift( `${musicians[num]} plays ${instruments[num]}` )
      console.log(emptyArray)
  }

return emptyArray

}

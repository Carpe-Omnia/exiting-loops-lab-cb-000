function breakOut(array, changeValue, stopValue) {
  array.forEach(element => {
    console.log(element)
    if (element !== stopValue) {element = changeValue}
    else {return array}
  })
  return array
}
function keepGoing(array, changeValue, skipValue) {}
function findBy(array, findFn) {}

function breakOut(array, changeValue, stopValue) {
  array.forEach(element => {
    if (element !== stopValue) {element = changeValue}
    else {break}
  })
  return array
}
function keepGoing(array, changeValue, skipValue) {}
function findBy(array, findFn) {}
